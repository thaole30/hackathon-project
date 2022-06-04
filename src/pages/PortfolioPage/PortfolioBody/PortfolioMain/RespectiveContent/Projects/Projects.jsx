import React from 'react';
import { Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import MyProjectCard from './MyProjectCard';
// import { myProjects } from './data';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserProjectsApi } from '../../../../../../api/project';


const Projects = () => {
  const { userInfo } = useSelector((state) => state.user);

  const getProjects = async () => {
    const {data: projects} = await getUserProjectsApi();
    console.log("projects fetched", projects);
    return projects;
};
  const { data: myProjects , isFetching, isLoading } = useQuery("get-projects", getProjects, {initialData: []});
  

  return (
    <div className="projects">
        <h2 className="text-30 bold">In progress</h2>
        <h2 className="info mb-32">{userInfo.name} haven't published this gallery yet, but hang tight!</h2>
        <Row gutter={[20, 16]}>
            <Col span={24}>
                <h2 className="text-24 bold">Portfolio</h2>
            </Col>
            {
              myProjects.map((project, index) => {
                return (
                  <Col xs={24} sm={12} lg={8} key={index}>
                      <MyProjectCard project={project}/>
                  </Col>
                )
              })
            }
        </Row>
    </div>
  )
}

export default Projects