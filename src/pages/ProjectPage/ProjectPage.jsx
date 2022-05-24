import React from 'react';
import ProjectBanner from './ProjectBanner/ProjectBanner';
import ProjectsList from './ProjectsList/ProjectsList';
import "./ProjectPage.scss";
import { NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom';
import TrendingTag from './TrendingTag/TrendingTag';

const ProjectPage = () => {
  

  const [searchParams] = useSearchParams();
  console.log("search", searchParams.get('search'));

  return (
    <div className="project-page">
      <ProjectBanner/>
      {/* <NavLink to="/software?search=JavaScripts" className="mt-24">
        <button>Lean JS</button>
      </NavLink> */}
      <ProjectsList/>
      <TrendingTag/>
    </div>
  )
}

export default ProjectPage