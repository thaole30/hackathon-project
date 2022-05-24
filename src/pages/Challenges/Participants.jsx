import React, { useState } from "react";
import {
  Select,
  Space,
  Input,
  Button,
  Row,
  Col,
  Radio,
  Tag,
  Avatar,
} from "antd";
import { SearchOutlined, TagOutlined } from "@ant-design/icons";
import CustomButton from "../../components/CustomButton/CustomButton";
import MyDivider from "../../components/MyDivider/MyDivider";
import { users } from "./data";

const { Option } = Select;
const Participants = () => {
  const [sortValue, setSearchValue] = useState("newest");
  const [searchParticipantsValue, setSearchParticipantsValue] = useState("");
  const [workingStyle, setWorkingStyle] = useState("");

  const handleChangeSortBy = (value) => {
    console.log(`selected ${value}`);
    setSearchValue(value);
  };

  const handleChangeSearchParticipants = (e) => {
    console.log("participant", e.target.value);
    setSearchParticipantsValue(e.target.value);
  };

  const handleChangeTeam = (e) => {
    console.log("radio checked", e.target.value);
    setWorkingStyle(e.target.value);
  };

  return (
    <div className="participants-section">
      <div className="container">
        <div className="f-between f-wrap mb-32" style={{ gap: "20px" }}>
          <Space>
            <h3 className="text-24 bold m-0">Sort by</h3>
            <Select
              size="large"
              className="select-sort"
              defaultValue={sortValue}
              style={{ width: 120 }}
              onChange={handleChangeSortBy}
            >
              <Option value="newest">Newest</Option>
              <Option value="projects">Projects</Option>
              <Option value="followers">Followers</Option>
            </Select>
          </Space>
          <Space>
            <Input
              size="large"
              value={searchParticipantsValue}
              className="input-search-participants"
              onChange={handleChangeSearchParticipants}
              prefix={<SearchOutlined className="text-gray text-20" />}
              placeholder="Search participants by name, skill, role or idea"
            />
            <Button size="large" className="search-participants-btn">
              Search
            </Button>
          </Space>
        </div>

        <Row gutter={[12, 12]}>
          {/* <Col xs={24} sm={12} md={6}>
              Col
            </Col>
            <Col xs={24} sm={12}  md={18}>
              Col
            </Col> */}
          <Col span={6}>
            <Space className="mb-16 f-wrap">
              <h3 className="bold text-16 m-0">Filters</h3>
              <CustomButton
                size="small"
                name="outlined"
                addedClass="text-12 pr-8 pl-8"
              >
                Remove all tags
              </CustomButton>
            </Space>
            <h3 className="bold text-14 m-0 mb-24">Teams</h3>
            <Radio.Group onChange={handleChangeTeam} value={workingStyle}>
              <Space direction="vertical">
                <Radio value={"solo"}>Working solo</Radio>
                <Radio value={"looking-teammates"}>Looking for teammates</Radio>
                <Radio value={"has-a-team"}>Has a team</Radio>
              </Space>
            </Radio.Group>
          </Col>
          <Col span={18}>
            <h3 className="bold text-16 m-0">Participants(3)</h3>
            <Row gutter={[20, 20]}>
              {
                users.map((user) => (
                  <Col key={user.id} span={24}>
                    <div className="user-item">
                      <div className="user-first-section">
                        <Space>
                          <Avatar
                            src={user.img}
                            style={{
                              width: 64,
                              height: 64,
                              backgroundColor: "#ddd",
                            }}
                          />
                          <div className="user-first-section-content">
                            <Row>
                              <Col xs={24} lg={18}>
                                <Space>
                                  <h2 className="text-20 bold m-0">{user.name}</h2>
                                  <Tag className="rounded-tag outlined-tag">
                                    <Space>
                                      <TagOutlined />
                                      <p>{user.job[0].toUpperCase() + user.job.slice(1)}</p>
                                    </Space>
                                  </Tag>
                                </Space>
                              </Col>
                              <Col className="f-end" xs={24} lg={6}>
                                <Tag className="rounded-tag outlined-tag">{user.workingStyle}</Tag>
                              </Col>
                              <Col span={24}>
                                <Space>
                                  <p>{user.projectsQuantity} Project</p>
                                  <p>{user.followersQuantity} Followers</p>
                                </Space>
                              </Col>
                            </Row>
                          </div>
                        </Space>
                      </div>
                      <MyDivider />
                      <div className="user-second-section">
                        <Row>
                          <Col xs={24} md={12}>
                            <h4 className="text-14 bold mb-8">Skills</h4>
                            <Space className="f-wrap">
                              {
                                user.skills.map((skill, index) => (
                                  <Tag className="rounded-tag">{skill}</Tag>
                                ))
                              }
                            </Space>

                          </Col>
                          <Col xs={24} md={12}>
                            <h4 className="text-14 bold mb-8">Interests</h4>
                            <Space className="f-wrap">
                              {
                                user.interests.map((interest, index) => (
                                  <Tag className="rounded-tag">{interest}</Tag>
                                ))
                              }
                            </Space>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Participants;
