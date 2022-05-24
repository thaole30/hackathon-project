import { Button, Input, Space } from 'antd';
import { SearchOutlined} from "@ant-design/icons";
import React, { useState } from 'react'
import Likes from './../PortfolioPage/PortfolioBody/PortfolioMain/RespectiveContent/Likes/Likes';

const ProjectGallery = () => {

  const [searchGalleryValue, setSearchGalleryValue] = useState("");

  const handleChangeSearchParticipants = (e) => {
    console.log("participant", e.target.value);
    setSearchGalleryValue(e.target.value);
  };

  return (
    <div className="project-gallery">
      <div className="container">
        <div className="project-gallery-search f-between">
          <h1 className="text-36 bold m-0">Project Gallery</h1>
          <Space>
            <Input
              size="large"
              value={searchGalleryValue}
              className="input-search-submisstion-details"
              onChange={handleChangeSearchParticipants}
              prefix={<SearchOutlined className="text-gray text-20" />}
              placeholder="Search by submission details"
            />
            <Button size="large" className="search-gallery-btn">
              Search
            </Button>
            <div className="decor-svg">
              <svg width="50" viewBox="0 0 62 48" fill="none" className="styles_vortexBackground__gaJqK"><path d="M13 0H3V10H13V0Z" fill="#1D2048"></path><path d="M28 0H20V8H28V0Z" fill="#1D2048"></path><path d="M25 13H20V17H25V13Z" fill="#1D2048"></path><path d="M29 24H21V32H29V24Z" fill="#1D2048"></path><path d="M40 32H32V40H40V32Z" fill="#1D2048"></path><path d="M17 37H0V48H17V37Z" fill="#1D2048"></path><path d="M50 10H46V14H50V10Z" fill="#1D2048"></path><path d="M39 17H35V21H39V17Z" fill="#1D2048"></path><path d="M48 39H44V43H48V39Z" fill="#1D2048"></path><path d="M62 43H59V46H62V43Z" fill="#1D2048"></path><path d="M58 32H55V35H58V32Z" fill="#1D2048"></path><path d="M49 24H46V27H49V24Z" fill="#1D2048"></path><path d="M29 43H26V46H29V43Z" fill="#1D2048"></path><path d="M23 36H20V39H23V36Z" fill="#1D2048"></path><path d="M55 2H51V6H55V2Z" fill="#1D2048"></path><path d="M39 5H36V8H39V5Z" fill="#1D2048"></path></svg>
            </div>
          </Space>
        </div>

        <div className="project-gallery-content mt-32">
          <Likes/>
        </div>
      </div>
    </div>
  )
}

export default ProjectGallery