import React from "react";
import "./Footer.scss";
import { Row, Col, Space, Input } from "antd";
import { NavLink } from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-lg footer-container">
        <Row>
          <Col xs={12} md={12} lg={5}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <div className="footer-link">
                <NavLink to="/hackathon" className="footer-headline">
                  All Hackathons
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/about" className="text">
                  About
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/software" className="text">
                  Projects
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/contact" className="text">
                  Contact
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/help" className="text">
                  Help
                </NavLink>
              </div>
            </Space>
          </Col>
          <Col xs={12} md={12} lg={5}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <div className="footer-link">
                <NavLink to="/" className="footer-headline">
                  Hackathons
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/hackathon" className="text">
                  Browse hackathons
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/software" className="text">
                  Explore project
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/hackathon/new" className="text">
                  Host a hackathon
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/help" className="text">
                  Guidelines
                </NavLink>
              </div>
            </Space>
          </Col>
          <Col xs={12} md={12} lg={5}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <div className="footer-link">
                <NavLink to="/user/sign-in" className="footer-headline">
                  Portfolio
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/portfolio/thaole30" className="text">
                  Your projects
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink
                  to="/portfolio/thaole30/?tab=hackathon"
                  className="text"
                >
                  Your hackathons
                </NavLink>
              </div>
              <div className="footer-link">
                <NavLink to="/settings" className="text">
                  Settings
                </NavLink>
              </div>
            </Space>
          </Col>
          <Col xs={24} md={12} lg={9}>
            <Space direction="vertical" style={{ display: "flex" }}>
              <div className="footer-link footer-headline">
                  Subscribe to Newsletter
              </div>
              <div className="email-input-group">
                <Input addonAfter={<ArrowRightOutlined />} placeholder="E-mail Address"/>
              </div>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
