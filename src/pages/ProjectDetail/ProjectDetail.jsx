import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SpinLoading from '../../components/SpinLoading/SpinLoading';
import { failFetchProjectDetail, startFetchProjectDetail, successFetchProjectDetail } from '../../contexts/appContext/appActions';
import { AppContext } from '../../contexts/appContext/appContext';
import "./ProjectDetail.scss";
import ProjectDetailBanner from './ProjectDetailBanner';
import ProjectDetailMain from './ProjectDetailMain';

const ProjectDetail = () => {

    const {projectId} = useParams();
    const {appContext, dispatch} = useContext(AppContext);
    console.log("appContext", appContext);
    const {projectDetail, isLoading} = appContext;
    console.log("isLoading", isLoading);
    console.log("projectDetail", projectDetail)

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

    if (isLoading) {
      return (
        <>
          {/* <ProgressLoading/> */}
          <SpinLoading />
        </>
      );
    }

  return (
    <div className="project-detail">
      <ProjectDetailBanner projectDetail={projectDetail}/>
      <ProjectDetailMain projectDetail={projectDetail}/>
    </div>
  )
}

export default ProjectDetail