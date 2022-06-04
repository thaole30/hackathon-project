import React, { useContext, useState } from 'react';
import SearchComponent from '../../../components/SearchComponent/SearchComponent';
import "./ProjectsList.scss";
import { Row, Col } from 'antd';
import CategoryCard from './CategoryCard';
import ProjectCard from './ProjectCard';
import { AppContext } from './../../../contexts/appContext/appContext';
import { searchProjectsByKeyword, successFetchAllProjects } from '../../../contexts/appContext/appActions';
import { useNavigate } from 'react-router-dom';
import EmptyData from '../../../components/EmptyData/EmptyData';
import { publicRequest } from '../../../api';
import { getAllProjects } from '../../../api/project';
import SpinLoading from './../../../components/SpinLoading/SpinLoading';
import { useMutation, useQuery, useQueryClient } from "react-query";


const ProjectsList = () => {

    const {appContext, dispatch} = useContext(AppContext);
    console.log("filteredProjects", appContext.filteredProjects);

    const [valueSearch, setValueSearch] = useState("");
    let navigate = useNavigate();

    const getProjects = async () => {
        const {data: projects} = await getAllProjects();
        console.log("projects fetched", projects);
        dispatch(successFetchAllProjects(projects));
        return projects;
    };
      const { data , isFetching, isLoading } = useQuery("get-projects", getProjects, {initialData: []});

    const handleChangeInputSearch = (e) => {
        setValueSearch(e.target.value);
    }

    const handleInputSearch = (e) => {
        e.preventDefault();
        console.log("value project search", valueSearch);
        dispatch(searchProjectsByKeyword(valueSearch));
        navigate(`/software?search=${valueSearch}&category=${appContext.selectedCategory}`)
    }

    console.log("isLoading projects", isFetching);



    if(isFetching) {
        return <SpinLoading/>
    }

  return (
    <div className="projects-list">
        <SearchComponent 
            placeholder="Search project by keyword"
            valueSearch={valueSearch}
            onChangeInputSearch={handleChangeInputSearch}
            onHandleInput={handleInputSearch}
        />
        <div className="projects-list-content container-lg">
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={6}>
                    <CategoryCard/>
                </Col>
                <Col xs={24} lg={18}>
                    <Row gutter={[16, 16]}>
                        {
                            appContext.filteredProjects.length > 0 ? appContext.filteredProjects.map((project) => (
                                <ProjectCard project={project} key={project.id}/>
                            )) : (
                                <EmptyData/>
                            )
                        }
                       
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default ProjectsList