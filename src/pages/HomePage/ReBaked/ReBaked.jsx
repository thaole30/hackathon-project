import React from 'react';
import { Row, Col } from 'antd';
import { NavLink } from "react-router-dom";
import "./ReBaked.scss";
import CustomButton from '../../../components/CustomButton/CustomButton';

const ReBaked = () => {
  return (
    <div className="rebaked-section">
        <div className="container-lg">
        <Row>
            <Col xs={24} md={14} lg={12} className="relative">
                <img src="https://crowdhack.io/images/landing/rectangle_2.png" alt="" className="absolute-img" />
                <div className="content">
                    <h1>Do More With ReBaked</h1>
                    <p>CrowdHack is a part of ReBaked portfolio of products. Go Beyond Hackathon with Build Pioneers and Playshare</p>
                </div>

                <NavLink to="https://www.rebaked.com/" className="relative" target="_blank">
                    <CustomButton name="primary" size="middle">ReBaked projects</CustomButton>
                </NavLink>

            </Col>
            <Col xs={24} md={10} lg={12}>
                <img className="w-100" src="https://crowdhack.io/images/landing/rebaked_project.png" alt="" />
            </Col>
        </Row>
        </div>
    </div>
  )
}

export default ReBaked