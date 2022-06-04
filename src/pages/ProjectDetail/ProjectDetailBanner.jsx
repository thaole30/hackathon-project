import { Space } from 'antd';
import React from 'react'
import IconButton from './../../components/IconButton/IconButton';

const ProjectDetailBanner = ({projectDetail}) => {
  return (
    <div className="project-detail-banner f-center">
        <div className='text-center'>
            <h1 className="text-45 bold project-detail-banner-title mb-8">
                {projectDetail.name}
            </h1>
            <h3>{projectDetail.desc}</h3>
            <Space>
                <IconButton
                    addedClass="project-detail-banner-btn like-btn"
                    svgIcon={<svg style={{color: 'red'}} width="16" height="16"aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" className="svg-inline--fa fa-heart fa-w-16 mr-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="rgba(255,255,255,0.7)"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>}
                >Like | {projectDetail.likes.length}</IconButton>
                <IconButton
                    addedClass="project-detail-banner-btn comment-btn"
                    svgIcon={<svg width="16" height="16"aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="svg-inline--fa fa-quote-left fa-w-16 mr-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path></svg>}
                >Comment | {projectDetail.comments.length}</IconButton>
            </Space>
        </div>
    </div>
  )
}

export default ProjectDetailBanner