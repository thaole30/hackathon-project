import React from 'react'
import CustomButton from '../../../components/CustomButton/CustomButton'
import { NavLink } from "react-router-dom";
import { useUserInfoByUsernameQuery } from '../../../query/useUserQuery';
import { useSelector } from 'react-redux';


const ProjectBanner = () => {

  const { userInfo } = useSelector((state) => state.user);




  return (
    <div className="project-banner">
      <div className="container f-between h-100 project-banner-content content">
        <img src="https://crowdhack.io/images/project/project_left.png" alt="" className="img-banner left" />
        <h1>Explore projects from <br/> Portfolios &amp; <b>hackathons</b></h1>
        <NavLink to={`/portfolio/${userInfo.name}?action=add-project`}>
          <CustomButton name="primary" size="large">
              Add your project
          </CustomButton>
        </NavLink>
        <img src="	https://crowdhack.io/images/project/project_right.png" alt="" className="img-banner right" />
      </div>
    </div>
  )
}

export default ProjectBanner