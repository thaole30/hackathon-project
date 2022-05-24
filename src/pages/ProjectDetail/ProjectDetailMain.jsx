import React, { useState } from "react";
import { Row, Col, Tag, Space, Avatar, Button } from "antd";
import MyDivider from "./../../components/MyDivider/MyDivider";
import IconButton from "../../components/IconButton/IconButton";
import ProjectDetailComments from "./ProjectDetailComments";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { PlusOutlined, CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ProjectDetailMain = ({ projectDetail }) => {
  const { userInfo } = useSelector((state) => state.user);
  const [ isYellow, setIsYellow ] = useState(true);

  return (
    <div className="project-detail-main">
      <div className="container">
        <h1 className="text-36 mb-24">Story</h1>
        <Row gutter={[20, 20]}>
          <Col xs={24} lg={18}>
            <div className="project-img-wrapper">
              <img src={projectDetail.img} alt="" />
            </div>
            <h3 className="text-20 bold">Inspiration</h3>
            <p className="mb-8">
              I see so many people struggling with using Web3 Platforms and I
              want to build a solution that solves it
            </p>
            <h3 className="text-20 bold">What it does</h3>
            <p className="mb-8">{projectDetail.desc}</p>
            <h3 className="text-20 bold">How I built it</h3>
            <p className="mb-8">I used JS and a lot of hours</p>
            <h3 className="text-20 bold">Challenges I ran into</h3>
            <p className="mb-8">Being able to make it user friendly</p>
            <h3 className="text-20 bold">Accomplishments that I'm proud of</h3>
            <p className="mb-8">
              The final outcome just works! Isn't still not there but i'm happy
              with my baby
            </p>
            <h3 className="text-20 bold">What I learned</h3>
            <p className="mb-8">
              It can be a challenge to make something you think of, but I think
              i'm getting there!
            </p>
            <h3 className="text-20 bold">What's next</h3>
            <p className="mb-8">
              I would continue to release it in a phased manner and improve upon
              it using the Lean methodology to help improve and make it
              something people want.
            </p>
            <div className="project-tags mt-8">
              {projectDetail.tags?.map((tag) => (
                <Tag
                  key={tag}
                  style={{ backgroundColor: "rgba(8, 10, 37, 0.04)" }}
                  className="rounded-tag"
                >
                  {tag}
                </Tag>
              ))}
            </div>

            <h1 className="text-36 mb-24">Try it out</h1>
            <div className="w-100 mt-16">
              <MyDivider />
              <Space>
                <IconButton
                  addedClass="project-detail-banner-btn like-btn"
                  svgIcon={
                    <svg
                      style={{ color: "red" }}
                      width="16"
                      height="16"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="heart"
                      className="svg-inline--fa fa-heart fa-w-16 mr-8"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      color="rgba(255,255,255,0.7)"
                    >
                      <path
                        fill="currentColor"
                        d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                      ></path>
                    </svg>
                  }
                >
                  Like | {projectDetail.likes}
                </IconButton>
                <Space>
                  <p>{projectDetail.likes} person like this:</p>
                  <Avatar
                    style={{ backgroundColor: "#ddd" }}
                    src="https://joeschmoe.io/api/v1/random"
                  />
                </Space>
              </Space>
              <MyDivider />
            </div>
            <h1 className="text-36 mb-24">Updates</h1>
            <ProjectDetailComments />
          </Col>
          <Col xs={24} lg={6}>
            <h1 className="text-36 mb-24">CREATED BY</h1>
            <Space className="a-start mb-24">
              <Avatar
                style={{ backgroundColor: "#ddd", width: 70, height: 70 }}
                src={userInfo.img}
              />
              <Space>
                <NavLink to={`/portfolio/${userInfo.name}`}>
                  {userInfo.name}
                </NavLink>

                {
                  (isYellow) ? (
                    <Button
                      onClick={() => {
                        setIsYellow((prevState) => !prevState);
                      }}
                      style={{ backgroundColor: "orange", padding: '1px 9px', color: 'white', border: 'none'}}
                      icon={<PlusOutlined style={{ fontSize: "12px" }} />}
                    />
                  ) : (
                     <Button
                     onClick={() => {
                      setIsYellow((prevState) => !prevState);
                    }}
                    className="switch-btn"
                     style={{ backgroundColor: "#3f8ef7", padding: '1px 10px', color: 'white', border: 'none'}}
                    
                   >
                     <div className="f">
                       <div className="check-icon">
                        <CheckOutlined style={{ fontSize: "12px" }} />
                       </div>
                       <div className="close-icon">
                        <CloseOutlined style={{ fontSize: "12px" }} />
                       </div>
                     </div>
                    </Button>
                  )
                }
              </Space>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProjectDetailMain;