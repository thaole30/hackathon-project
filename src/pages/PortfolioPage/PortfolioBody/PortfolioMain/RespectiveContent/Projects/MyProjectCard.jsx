import { Avatar, Button, Space } from 'antd';
import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from './../../../../../../components/IconButton/IconButton';


const MyProjectCard = ({project, imgUser}) => {
  return (
    <NavLink to={`/project/${project._id}`} className="w-100 h-100 my-project-card-link">
        <div className="my-project-card w-100 h-100 f f-column">
            <div className="my-project-card-info relative f-grow-1">
                <div className="start-container absolute">
                  <Button>
                    <svg style={{width: '36px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18 text-24" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" color="#fff"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </Button>
                </div>
                <div className="progress-container absolute">
                  <span className="black text-16 bold">{project.status}</span>
                </div>
                <div className="project-card-img">
                  <img className="w-100" src={project.img} alt="" />
                </div>
                <div className="text-info f f-column">
                  <h2 className="bold text-20">{project.name}</h2>
                  <p className="desc">{
                    project.desc.length < 100 ? project.desc : `${project.desc.substring(0,100)}... `
                  }</p>
                </div>
            </div>
            <div className="my-project-card-social f-between">
                <Space>
                  <Space>
                    <svg width="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="h-100 block svg-inline--fa fa-heart fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#FF5722"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                    <p className="black">{project.likes.length}</p>
                  </Space>
                  <Space>
                    <svg width="16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="h-100 block black svg-inline--fa fa-comment-alt fa-w-16 fa-lg text-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--text-dark)"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></svg>
                    <p className="black">{project.comments.length}</p>
                  </Space>
                </Space>
                <div className="creator-avatar">
                  <Avatar src={imgUser} />
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default MyProjectCard