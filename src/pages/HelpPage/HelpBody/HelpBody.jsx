import React from 'react';
import { Row, Col, Space } from 'antd';
import { NavLink, useNavigate } from 'react-router-dom';
import { promotedArticles } from '../data/data';

const HelpBody = () => {

  const navigate = useNavigate();

  return (
    <div className="help-body container">
      <div className="help-tags mb-24">
        <Row gutter={[12, 12]}>
            <Col xs={24} md={12} lg={8}>
                <div className="help-tag"
                    onClick={() => navigate('/help/categories/General')}              
                  >
                  General
                </div>
            </Col>
            <Col xs={24} md={12} lg={8}>
                <div className="help-tag"
                    onClick={() => navigate('/help/categories/Hackathon_Participants')}              
                  >
                  Hackathon Participants
                </div>
            </Col>
            <Col xs={4} md={12} lg={8}>
              <div className="help-tag"
                    onClick={() => navigate('/help/categories/Hackathon_Managers')}            
                >   
                Hackathon Managers 
              </div>
            </Col>
        </Row>
      </div>

      <div className="promotedArticles mb-24">
        <h2 className="m-0 mb-24">Promoted articles</h2>
        <Row>
          <Col xs={12} lg={8}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <NavLink className="text-18 secondary underline" to={`/help/article/General/Managing_your_account/${promotedArticles[0]}`}>{promotedArticles[0]}</NavLink>
              <NavLink className="text-18 secondary underline" to={`/help/article/Hackathon_Managers/Managing_your_hackathon_page/${promotedArticles[1]}`}>{promotedArticles[1]}</NavLink>
            </Space>
          </Col>
          <Col xs={12} lg={8}>
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
              <NavLink className="text-18 secondary underline" to={`/help/article/Hackathon_Participants/Submitting_to_a_hackathon/${promotedArticles[2]}`}>{promotedArticles[2]}</NavLink>
              <NavLink className="text-18 secondary underline" to={`/help/article/Hackathon_Managers/Managing_your_hackathon_page/${promotedArticles[3]}`}>{promotedArticles[3]}</NavLink>
              <NavLink className="text-18 secondary underline" to={`/help/article/Hackathon_Managers/Judging_&_Announcing_Winners/${promotedArticles[4]}`}>{promotedArticles[4]}</NavLink>
            </Space>
          </Col>
          <Col xs={12} lg={8}>
            <NavLink NavLink className="text-18 secondary underline" to={`/help/article/Hackathon_Participants/Your_portfolio/${promotedArticles[5]}`}>{promotedArticles[5]}</NavLink>
          </Col>
        </Row>
        <div className="center mt-24 mb-24">Have more question? &nbsp;<NavLink to="mailto:team@rebaked.com">Submit a request</NavLink></div>
      </div>
    </div>
  )
}

export default HelpBody