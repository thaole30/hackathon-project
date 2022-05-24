import React from "react";
import { Space, Button } from "antd";
import { Row, Col } from "antd";
import "./BannerInfo.scss";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { NavLink } from "react-router-dom";

const BannerInfo = () => {
  return (
    <section className="banner-info">
      <div className="container-lg">
        <Row>
          <Col className="banner-info-top text-center" span={24}>
            <Space size={[8, 16]} wrap>
              <img
                src="https://crowdhack.io/images/landing_v2/puzzle.png"
                alt=""
              />
              <h1 className="info-text build">Build, &nbsp;</h1>
            </Space>
            <Space size={[8, 16]} wrap>
              <img
                src="https://crowdhack.io/images/landing_v2/chat-bubble.png"
                alt=""
              />
              <h1 className="info-text network">Network</h1>
              <h1 className="info-text gray-text">&nbsp;&amp;&nbsp;</h1>
            </Space>
            <Space size={[8, 16]} wrap>
              <img
                src="https://crowdhack.io/images/landing_v2/rocket.png"
                alt=""
              />
              <h1 className="info-text earn">Earn</h1>
            </Space>
            <div className="text-center">
              <h1 className="info-text gray-text">
                With <b>CrowdHack</b>
              </h1>
            </div>
            <div className="text-center mx-auto">
              <h4 className="desc">
                A decentralized hackathon platform where you{" "}
                <span className="purple">build cool stuff,</span>{" "}
                <span className="green">
                  support the open source ecosystem,{" "}
                </span>
                <span className="orange"> earn rewards,</span> and{" "}
                <span className="lightGreen">get sweet prizes.</span>
              </h4>
            </div>

            <div className="text-center">
              <NavLink to="/hackathon">
                <CustomButton>Join The Community</CustomButton>
              </NavLink>
            </div>
          </Col>
          <Col span={24} className="cards-list">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12} lg={6}>
                <div className="card">
                  <div className="card-content">
                    <img src="https://crowdhack.io/images/landing_v2/tool.png" alt="BUIDL" />
                    <h4>BUIDL</h4>
                    <p>
                      Create or join projects, Find collaborators and just{" "}
                      <b>BUIDL!</b>
                    </p>
                  </div>
                  <div className="card-layout"></div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
              <div className="card">
                  <div className="card-content">
                    <img src="https://crowdhack.io/images/landing_v2/network.png" alt="BUIDL" />
                    <h4>NETWORK</h4>
                    <p>
                      Create or join projects, Find collaborators and just{" "}
                      <b>BUIDL!</b>
                    </p>
                  </div>
                  <div className="card-layout"></div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
              <div className="card">
                  <div className="card-content">
                    <img src="https://crowdhack.io/images/landing_v2/portfolio.png" alt="BUIDL" />
                    <h4>PORTFOLIO</h4>
                    <p>
                      Create or join projects, Find collaborators and just{" "}
                      <b>BUIDL!</b>
                    </p>
                  </div>
                  <div className="card-layout"></div>
                </div>
              </Col>
              <Col xs={24} md={12} lg={6}>
              <div className="card">
                  <div className="card-content">
                    <img src="	https://crowdhack.io/images/landing_v2/funding.png" alt="BUIDL" />
                    <h4>FUNDING</h4>
                    <p>
                      Create or join projects, Find collaborators and just{" "}
                      <b>BUIDL!</b>
                    </p>
                  </div>
                  <div className="card-layout"></div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default BannerInfo;
