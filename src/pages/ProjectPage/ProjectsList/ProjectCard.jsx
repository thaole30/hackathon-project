import React, { useContext, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import {  Col, Space, Avatar } from 'antd';
import "./ProjectsList.scss";
import { AppContext } from '../../../contexts/appContext/appContext';
import {startFetchProjectDetail, successFetchProjectDetail } from './../../../contexts/appContext/appActions';



const ProjectCard = ({project}) => {


  return (
    <Col xs={24} md={12} xl={8}>
        <div className="project-card h-100">
            <NavLink className="f f-column h-100" to={`/project/${project._id}`}>
                <div className="project-card-img">
                  <img src={project.img} alt="" />  
                </div>
                <div className="project-card-body mt-24 f f-column">
                    <Space>
                        <p style={{lineHeight: '100%'}}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_229_1448)"><path d="M12.6667 2.66629H3.33333C2.59695 2.66629 2 3.26324 2 3.99962V13.333C2 14.0693 2.59695 14.6663 3.33333 14.6663H12.6667C13.403 14.6663 14 14.0693 14 13.333V3.99962C14 3.26324 13.403 2.66629 12.6667 2.66629Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.6667 1.33298V3.99964" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.33325 1.33298V3.99964" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 6.66629H14" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_229_1448"><rect width="16" height="16" fill="white" transform="translate(0 -0.000366211)"></rect></clipPath></defs></svg> 
                        </p>
                        <p className="project-card-time">{project.date}</p>
                    </Space>
                    <h1 className="mb-16 project-card-title">{project.name}</h1>
                    <p className="project-desc mb-32">
                        {project.desc}
                    </p>

                    <div className="bonus-info f-around">
                        <Space>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.833496 9.99992C0.833496 9.99992 4.16683 3.33325 10.0002 3.33325C15.8335 3.33325 19.1668 9.99992 19.1668 9.99992C19.1668 9.99992 15.8335 16.6666 10.0002 16.6666C4.16683 16.6666 0.833496 9.99992 0.833496 9.99992Z" stroke="#080A25" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#080A25" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <p>{project.viewers}</p>
                        </Space>
                        <Space>
                        <svg width="16" height="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#FF5722"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                            <p>{project.likes}</p>
                        </Space>
                        <Space>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 9.58336C17.5029 10.6832 17.2459 11.7683 16.75 12.75C16.162 13.9265 15.2581 14.916 14.1395 15.6078C13.021 16.2995 11.7319 16.6662 10.4167 16.6667C9.31678 16.6696 8.23176 16.4126 7.25 15.9167L2.5 17.5L4.08333 12.75C3.58744 11.7683 3.33047 10.6832 3.33333 9.58336C3.33384 8.26815 3.70051 6.97907 4.39227 5.86048C5.08402 4.7419 6.07355 3.838 7.25 3.25002C8.23176 2.75413 9.31678 2.49716 10.4167 2.50002H10.8333C12.5703 2.59585 14.2109 3.32899 15.4409 4.55907C16.671 5.78915 17.4042 7.42973 17.5 9.16669V9.58336Z" stroke="#080A25" strokeOpacity="0.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            <p>{project.comments}</p>
                        </Space>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </div>

                </div>
            </NavLink>
        </div>
    </Col>
  )
}

export default ProjectCard