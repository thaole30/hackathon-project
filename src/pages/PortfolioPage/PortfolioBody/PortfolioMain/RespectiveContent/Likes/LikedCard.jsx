import React from 'react';
import { Avatar, Button, Space } from 'antd';
import { NavLink } from 'react-router-dom'

const LikedCard = ({project}) => {
  return (
    <NavLink to={`/project/${project.id}`} className="w-100 h-100 liked-card-link">
        <div className="liked-card w-100 h-100 f f-column">
            <div className="liked-card-info relative f-grow-1">
                {
                    project.isWinning && (
                        <>    
                            <div className="liked-card-ribbon absolute">

                            </div>
                            <h3 className="ribbon-text absolute m-0">
                                Winner
                            </h3>
                        </>
                    )
                }
                <div className="project-card-img">
                <img src={project.img} alt="" />
                </div>
                <div className="text-info f f-column">
                <h2 className="bold text-20">{project.name}</h2>
                <p className="desc">{
                    project.desc.length < 100 ? project.desc : `${project.desc.substring(0,100)}... `
                }</p>
                </div>
            </div>
            <div className="liked-card-social f-between">
                <Space>
                <Space>
                    <svg width="16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="h-100 block svg-inline--fa fa-heart fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="#FF5722"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
                    <p className="black">{project.likes}</p>
                </Space>
                <Space>
                    <svg width="16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="h-100 block black svg-inline--fa fa-comment-alt fa-w-16 fa-lg text-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--text-dark)"><path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path></svg>
                    <p className="black">{project.comments}</p>
                </Space>
                </Space>
                <div className="creator-avatar">
                <Avatar src="https://joeschmoe.io/api/v1/random" />
                </div>
            </div>
        </div>
    </NavLink>
  )
}

export default LikedCard