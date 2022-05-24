import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { startFetchProjectDetail, successFetchProjectDetail } from '../../contexts/appContext/appActions';
import { AppContext } from '../../contexts/appContext/appContext';
import "./ProjectDetail.scss";
import ProjectDetailBanner from './ProjectDetailBanner';
import ProjectDetailMain from './ProjectDetailMain';

const ProjectDetail = () => {

    const {projectId} = useParams();
    const {appContext, dispatch} = useContext(AppContext);
    console.log("appContext", appContext);
    const {projectDetail} = appContext;
    console.log("projectDetail", projectDetail)

    useEffect(() => {
      if(projectId) {
        const fetchProjectDetail = async () => {
            dispatch(startFetchProjectDetail());
            dispatch(successFetchProjectDetail(projectId));

        }
        fetchProjectDetail();
      }
    } ,[projectId])
    

    console.log("projectId in ProjectDetail", projectId);

  return (
    <div className="project-detail">
      <ProjectDetailBanner projectDetail={projectDetail}/>
      <ProjectDetailMain projectDetail={projectDetail}/>
    </div>
  )
}

export default ProjectDetail