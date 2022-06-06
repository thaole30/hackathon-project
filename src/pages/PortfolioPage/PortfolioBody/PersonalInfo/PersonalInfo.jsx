import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Row, Col, Avatar, Space, Tag, Radio, Form, Input } from "antd";
import IconButton from "../../../../components/IconButton/IconButton";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import { useSelector } from "react-redux";
import MyModal from "../../../../components/MyModal/MyModal";
import MyInput from "./../../../../components/MyInput/MyInput";
import { showMessage } from "../../../../utils/showMessage";
import uuid from 'react-uuid';
import { createProjectApi } from "../../../../api/project";

const PersonalInfo = ({userInfo}) => {
  // const { userInfo } = useSelector((state) => state.user);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [projectType, setProjectType] = useState("");

  const navigate = useNavigate();

  function onChangeRadio(e) {
    console.log(`radio checked:${e.target.value}`);
    setProjectType(e.target.value);
  }

  const createNewProject = async (data) => {
    const {data: newProject} = await createProjectApi(data);
    console.log("newProject", newProject);
    navigate(`/project/edit/${newProject._id}`, {state: newProject});

  }

  const onFinish = (values) => {
    console.log('Success:', values);
    showMessage("success", "Submit success!");
    setIsOpenModal(false);
    createNewProject({...values, creatorName: userInfo?.name});

  };

  const onFinishFailed = () => {
    showMessage("error", "Submit failed!");
  };

  return (
    <>
      <div className="personal-info">
        <div className="relative container">
          <NavLink to="/settings" className="edit-profile-btn">
            <IconButton
              svgIcon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-8"
                >
                  <path
                    d="M4.16667 15.8333H5.345L13.1067 8.07161L11.9283 6.89328L4.16667 14.6549V15.8333ZM17.5 17.4999H2.5V13.9641L13.6958 2.76828C13.8521 2.61205 14.064 2.52429 14.285 2.52429C14.506 2.52429 14.7179 2.61205 14.8742 2.76828L17.2317 5.12578C17.3879 5.28205 17.4757 5.49398 17.4757 5.71495C17.4757 5.93592 17.3879 6.14784 17.2317 6.30411L7.7025 15.8333H17.5V17.4999ZM13.1067 5.71495L14.285 6.89328L15.4633 5.71495L14.285 4.53661L13.1067 5.71495Z"
                    fill="black"
                  ></path>
                </svg>
              }
            >
              Edit Profile
            </IconButton>
          </NavLink>
          <Row gutter={[24, 16]}>
            <Col xs={24} lg={5}>
              <div className="f f-column a-center">
                <div className="avatar-container relative">
                  <Avatar className="avatar" src={userInfo?.img} />
                  <div className="avatar-badge">
                    <NavLink
                      to="/settings"
                      className="w-100 h-100 f-center white"
                    >
                      <svg
                        style={{ width: "20px" }}
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="camera"
                        className="svg-inline--fa fa-camera fa-w-16 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M512 144v288c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h88l12.3-32.9c7-18.7 24.9-31.1 44.9-31.1h125.5c20 0 37.9 12.4 44.9 31.1L376 96h88c26.5 0 48 21.5 48 48zM376 288c0-66.2-53.8-120-120-120s-120 53.8-120 120 53.8 120 120 120 120-53.8 120-120zm-32 0c0 48.5-39.5 88-88 88s-88-39.5-88-88 39.5-88 88-88 88 39.5 88 88z"
                        ></path>
                      </svg>
                    </NavLink>
                  </div>
                </div>
                <CustomButton
                  name="orange"
                  size="middle"
                  onClick={() => {
                    setIsOpenModal(true);
                  }}
                >
                  Add a new Project
                </CustomButton>
              </div>
            </Col>
            <Col xs={24} lg={19}>
              <h1 className="text-30 bold m-0">{userInfo?.name}</h1>
              <Space>
                <svg
                  className="mr-16"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3033 14.041L10 19.1666L4.69667 14.041C3.64779 13.0272 2.93349 11.7356 2.64411 10.3295C2.35473 8.92337 2.50326 7.4659 3.07092 6.14137C3.63858 4.81684 4.59987 3.68475 5.83323 2.88825C7.0666 2.09175 8.51664 1.66663 10 1.66663C11.4834 1.66663 12.9334 2.09175 14.1668 2.88825C15.4001 3.68475 16.3614 4.81684 16.9291 6.14137C17.4967 7.4659 17.6453 8.92337 17.3559 10.3295C17.0665 11.7356 16.3522 13.0272 15.3033 14.041ZM10 12.137C10.8841 12.137 11.7319 11.7975 12.357 11.1934C12.9821 10.5892 13.3333 9.76974 13.3333 8.9153C13.3333 8.06086 12.9821 7.24142 12.357 6.63724C11.7319 6.03306 10.8841 5.69364 10 5.69364C9.11595 5.69364 8.2681 6.03306 7.64298 6.63724C7.01786 7.24142 6.66667 8.06086 6.66667 8.9153C6.66667 9.76974 7.01786 10.5892 7.64298 11.1934C8.2681 11.7975 9.11595 12.137 10 12.137ZM10 10.5261C9.55797 10.5261 9.13405 10.3564 8.82149 10.0543C8.50893 9.75224 8.33333 9.34252 8.33333 8.9153C8.33333 8.48808 8.50893 8.07836 8.82149 7.77627C9.13405 7.47418 9.55797 7.30447 10 7.30447C10.442 7.30447 10.8659 7.47418 11.1785 7.77627C11.4911 8.07836 11.6667 8.48808 11.6667 8.9153C11.6667 9.34252 11.4911 9.75224 11.1785 10.0543C10.8659 10.3564 10.442 10.5261 10 10.5261Z"
                    fill="black"
                  ></path>
                </svg>
                <p className="mr-16 text-20">Viet Nam</p>
                <svg
                  style={{ width: "20px" }}
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="github"
                  className="black svg-inline--fa fa-github fa-w-16 fa-lg black mr-8"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  ></path>
                </svg>
                <p className="mr-16 text-20">Github</p>
              </Space>
              <div style={{ minHeight: "70px" }}></div>
              <Space>
                <p className="bold text-16">Interested:</p>
                <Tag>Web</Tag>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
      <MyModal
        addedClass="add-new-project-modal"
        isOpenModal={isOpenModal}
        titleModal={
          <h2 className="text30 black text-center m-0">
            Is this project part of a hackathon?
          </h2>
        }
        onCloseModal={() => setIsOpenModal(false)}
      >
        <div className="add-new-project-modal-content">
          <div className="f-center">
            <Radio.Group
              onChange={onChangeRadio}
              className="mb-24"
              defaultValue="a"
            >
              <Space className="add-project-btn-wrapper ">
                <Radio.Button
                  className="add-project-radio-label"
                  value="hackathon"
                >
                  <h1 className="success text-40 mb-24">Yes,</h1>
                  <span className="secondary">
                    I'm submitting to a hackathon
                  </span>
                </Radio.Button>
                <Radio.Button
                  className="add-project-radio-label"
                  value="portfolio"
                >
                  <h1 className="info text-40 mb-24">No,</h1>
                  <span className="secondary">
                    I'm just adding it to my portfolio
                  </span>
                </Radio.Button>
              </Space>
            </Radio.Group>
          </div>
          <div>
            {projectType &&
              (projectType === "hackathon" ? (
                <div className="center">
                  <h2 className="uppercase bold">Select a hackathon</h2>
                  <p className="text-16 mb-24">
                    You can keep editing your project after you submit it, but
                    you must submit to demo / be eligible for prizes.
                  </p>
                </div>
              ) : (
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item 
                    name="name"
                    label="What's your project called?"
                    rules={[
                        {
                          required: true,
                          message: "Please input your project name"
                        },
                    ]}
                    >
                    {/* <MyInput
                      type="normal"
                      placeholder="Enter your project name"
                    /> */}
                    <Input className="custom-input" placeholder="Enter your project name" />
                  </Form.Item>
                  <Form.Item>
                    <CustomButton
                      name="orange"
                      size="middle"
                      type="submit"
                    //   onClick={() => {
                    //     setIsOpenModal(false);

                    //   }}
                    >
                      Save and Continue
                    </CustomButton>
                  </Form.Item>
                </Form>
              ))}
          </div>
        </div>
      </MyModal>
    </>
  );
};

export default PersonalInfo;
