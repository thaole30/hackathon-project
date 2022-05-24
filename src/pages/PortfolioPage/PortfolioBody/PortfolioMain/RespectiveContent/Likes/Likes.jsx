import React from 'react';
import { Row, Col, Divider } from 'antd';
import { myProjects } from '../Projects/data';
import LikedCard from './LikedCard';

const Likes = () => {
  return (
    <div className="likes">
        <Row gutter={[20, 16]}>
        {
              myProjects.map((project, index) => {
                return (
                  <Col xs={24} sm={12} lg={8} key={index}>
                      <LikedCard project={project}/>
                  </Col>
                )
              })
            }
        </Row>
    </div>
  )
}

export default Likes