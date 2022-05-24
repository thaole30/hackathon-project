import React from 'react';
import { NavLink } from "react-router-dom";
import { Row, Col } from 'antd';
import CustomButton from '../../../components/CustomButton/CustomButton';
import "./LookingMore.scss";

const LookingMore = () => {
  return (
    <div className="looking-more">
        <div className="container-lg">
            <h1 className="title text-center">Looking for more?</h1>
            <Row gutter={[8, 24]}>
                <Col xs={24} md={8}>
                    <div className="looking-card f f-column a-center text-center">
                        <img src="https://crowdhack.io/images/hackathon/explore_project.png" alt="" />
                        <h3 className="card-title text-center">Projects</h3>
                        <p className="text-center">Create or Join Projects, Find Collaborators and just BUIDL!</p>
                        <NavLink to="/software">
                            <CustomButton size="middle" name="outlined">Explore Project</CustomButton>
                        </NavLink>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className="looking-card f f-column a-center text-center">
                        <img src="https://crowdhack.io/images/hackathon/explore_team.png" alt="" />
                        <h3 className="card-title text-center">Teams</h3>
                        <p className="text-center">Find Like Minded People to Create, Buidl, and Network with!</p>
                        <CustomButton size="middle" name="primary">Explore Teams</CustomButton>
                    </div>
                </Col>
                <Col xs={24} md={8}>
                    <div className="looking-card f f-column a-center text-center">
                        <img src="https://crowdhack.io/images/hackathon/explore_project.png" alt="" />
                        <h3 className="card-title text-center">Portfolio</h3>
                        <p className="text-center">Show off your skills! Easily create and share your portfolio!</p>
                        <NavLink to="/software">
                            <CustomButton size="middle" name="outlined">Explore Portfolio</CustomButton>
                        </NavLink>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default LookingMore