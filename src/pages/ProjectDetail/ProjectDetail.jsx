import React, { useContext, useEffect } from 'react';
import { useMatch, useParams } from 'react-router-dom';
import SpinLoading from '../../components/SpinLoading/SpinLoading';
import { failFetchProjectDetail, startFetchProjectDetail, successFetchProjectDetail } from '../../contexts/appContext/appActions';
import { AppContext } from '../../contexts/appContext/appContext';
import "./ProjectDetail.scss";
import ProjectDetailBanner from './ProjectDetailBanner';
import ProjectDetailMain from './ProjectDetailMain';
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getProjectApi } from '../../api/project';
import useProjectInfoQuery from './../../query/useProjectInfoQuery';

const ProjectDetail = () => {

  // let match = useMatch("/project/:projectId");

  // console.log(match);

    const {projectId} = useParams();
    const {appContext, dispatch} = useContext(AppContext);
    console.log("appContext", appContext);
   

    useEffect(() => {
      if(projectId) {
          const fetchProjectDetail = async () => {
            dispatch(startFetchProjectDetail());
          try {
            setTimeout(() => {
              dispatch(successFetchProjectDetail(projectId));
            }, 2000)
          } catch (error) {
            dispatch(failFetchProjectDetail());
          }

        }
        fetchProjectDetail();
      }
    } ,[projectId])
    

    console.log("projectId in ProjectDetail", projectId);

  
    const {data, isFetching, isLoading, mutationUpdateProject} = useProjectInfoQuery(projectId);
  
  console.log("data", data);
  console.log("isFetching isLoading", isFetching, isLoading);
  
  if(isFetching) {
      return <SpinLoading/>
  }
  
  


  return (
    <div className="project-detail">
      <ProjectDetailBanner projectDetail={data}/>
      <ProjectDetailMain projectDetail={data} mutationUpdateProject={mutationUpdateProject}/>
    </div>
  )
}

export default ProjectDetail