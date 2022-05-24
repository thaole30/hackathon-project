import React from 'react';
import { Row, Col} from "antd";
import { NavLink } from "react-router-dom";
import "./ExploreAndBuild.scss";
import CustomButton from '../../../components/CustomButton/CustomButton';

const ExploreAndBuild = () => {
  return (
    <div className="explore-and-build">
        <img src="https://crowdhack.io/images/landing/rectangle.svg" alt="" className="img-bg" />
        <div className="container-lg">
            <h1 className="text-center">Explore and BUILD - It’s that Simple!</h1>
            <Row gutter={[0, 52]}>
                <Col xs={24} md={10}>
                    <div className="card-item card-explore w-100">
                        <img src="https://crowdhack.io/images/landing/explore_icon.svg" alt="" />
                        <h3>Explore hackathons</h3>
                        <p>Find hackathons you wish to join & projects you can fail in love with</p>
                        <NavLink to="/hackathon">
                            <CustomButton size='middle'>
                                Explore hackathons
                            </CustomButton>
                        </NavLink>
                    </div>
                </Col>
                <Col xs={24} md={4} className="f-center">
                    <img className="arrow-img" src="https://crowdhack.io/images/landing/arrow.svg" alt="arrow" />
                </Col>
                <Col xs={24} md={10}>
                    <div className="card-item card-build w-100">
                        <img src="https://crowdhack.io/images/landing/build_icon.svg" alt="" />
                        <h3>Buidl</h3>
                        <p>Create or joins Projects, Find mentors, validate ideas & even get investor support</p>
                        <NavLink to="/software">
                            <CustomButton name='secondary' size='middle'>
                                Explore Projects
                            </CustomButton>
                        </NavLink>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default ExploreAndBuild