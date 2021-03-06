import React from "react";
import { NavLink, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { Row, Col, Button, Space, Tag } from 'antd';
import { useSelector } from "react-redux";
import MyDivider from "../../../components/MyDivider/MyDivider";
import {
  CalendarOutlined,
  FlagOutlined,
  UsergroupDeleteOutlined
} from '@ant-design/icons';
import CustomButton from "../../../components/CustomButton/CustomButton";


const Overview = () => {
  // const {hackathonId} = useParams();

  // console.log("hackathonId in Overview", hackathonId);
  // const { hackathonDetail } = useSelector((state) => state.hackathon);
  // console.log("hackathonDetail in overview", hackathonDetail);

  const [projectDetailInfo] = useOutletContext();
  console.log("projectDetailInfo", projectDetailInfo);

  const navigate = useNavigate();

  const hackathonDetail  =    {
    img: "https://tedu.com.vn/uploaded/images/path/102020/nodejs.png",
    _id: 1,
    prize: 1500,
    title: "Learn Nodejs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur magni voluptas rerum facilis magnam, ratione corporis laboriosam, nihil blanditiis nemo delectus eum voluptatem, corrupti quam quidem recusandae dolorum at!",
    gmail: "mnq@gmail.com",
    owner: "Apple",
    address: "USA",
    time: "8:30",
    date: "Feb 15, 2022",
    tags: ["Web", "Productivity","Music"],
    status: "ongoing",
    participants: 3,
}

  return <div className="overview-section">
        <Row gutter={[16,16]}>
          <Col xs={24} lg={16}>
            <div className="overview-content-left">
              <h1 className="text-36 bold mb-24">{projectDetailInfo.name}</h1>
              <p className="text-20 text-gray mb-24">{projectDetailInfo.desc}</p>
              <h2 className="m-0 text-24 bold mb-16">This hackathon has ended</h2>

              <Space>
                <NavLink to="/https://crowdhack.io/hackathon">
                  <CustomButton name="primary" size="large" addedClass="overview-btn">Find more hackathons</CustomButton>
                </NavLink>
                <NavLink to={`/challenges/project-gallery/${projectDetailInfo._id}`}>
                  <CustomButton name="primary" size="large" addedClass="overview-btn">View the winner</CustomButton>
                </NavLink>
              </Space>
              <h1 className="text-24 bold mb-16 mt-24">Who can participate</h1>

              <ul className="participate-rules">
                <li className="mb-16 bold">Above legal age of majority in country of residence</li>
                <li className="bold">Only specific <span className="underline">standard exceptions</span></li>
              </ul>

              <div className="link-wrapper mt-24 mb-24 view-rule-text">
                <NavLink className="underline text-16" to={`/challenges/rules/${hackathonDetail._id}`}>View all rules</NavLink>
              </div>

            </div>

          </Col>
          <Col xs={24} lg={8}>
            <div className="overview-content-right">
              <div className="overview-card time-card w-100">
                <div className="link-wrapper mb-8">
                  <NavLink to="/" className="white text-12">View schedule</NavLink>
                </div>
                  <Space>
                    <CalendarOutlined className="bold"/>
                    <h3 className="text-light text-14 m-0 bold">
                      {hackathonDetail.date}
                    </h3>
                  </Space>
                  <div className="custom-my-divider"></div>
              </div>
              <div className="center mb-16">
                <img src="https://web3discovery.crowdhack.io/images/hkt/deadline.png" alt="deadline"/>
              </div>

              <Row className="overview-card time-detail-card" gutter={[12, 12]}>
                <Col xs={6}>
                  <span className="nowrap text-14 rubik secondary">Submissions</span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary">February 01, 6:00 am </span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary">February 15, 10:00 am </span>
                </Col>
                <Col xs={6}>
                  <span className="nowrap text-14 rubik secondary">Judging</span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary">February 16, 10:00 am</span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary">February 16, 10:00 am</span>
                </Col>
                <Col xs={6}>
                  <span className="nowrap text-14 rubik secondary">Winners</span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary"></span>
                </Col>
                <Col xs={9}>
                  <span class="text-14 medium rubik secondary">February 16, 10:00 am</span>
                </Col>
               
              </Row>
                <div className="link-wrapper text-center">
                  <NavLink className="underline text-16 orange" to={`/challenges/rules/${hackathonDetail._id}`}>View all rules</NavLink>
                </div>
              <div className="custom-my-divider"></div>

                <div className="overview-card hackathon-detail-card">
                      <Row gutter={[16,16]}>
                          <Col span={13}>
                              <Space>
                                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.3033 14.041L10 19.1666L4.69667 14.041C3.64779 13.0272 2.93349 11.7356 2.64411 10.3295C2.35473 8.92337 2.50326 7.4659 3.07092 6.14137C3.63858 4.81684 4.59987 3.68475 5.83323 2.88825C7.0666 2.09175 8.51664 1.66663 10 1.66663C11.4834 1.66663 12.9334 2.09175 14.1668 2.88825C15.4001 3.68475 16.3614 4.81684 16.9291 6.14137C17.4967 7.4659 17.6453 8.92337 17.3559 10.3295C17.0665 11.7356 16.3522 13.0272 15.3033 14.041ZM10 12.137C10.8841 12.137 11.7319 11.7975 12.357 11.1934C12.9821 10.5892 13.3333 9.76974 13.3333 8.9153C13.3333 8.06086 12.9821 7.24142 12.357 6.63724C11.7319 6.03306 10.8841 5.69364 10 5.69364C9.11595 5.69364 8.2681 6.03306 7.64298 6.63724C7.01786 7.24142 6.66667 8.06086 6.66667 8.9153C6.66667 9.76974 7.01786 10.5892 7.64298 11.1934C8.2681 11.7975 9.11595 12.137 10 12.137ZM10 10.5261C9.55797 10.5261 9.13405 10.3564 8.82149 10.0543C8.50893 9.75224 8.33333 9.34252 8.33333 8.9153C8.33333 8.48808 8.50893 8.07836 8.82149 7.77627C9.13405 7.47418 9.55797 7.30447 10 7.30447C10.442 7.30447 10.8659 7.47418 11.1785 7.77627C11.4911 8.07836 11.6667 8.48808 11.6667 8.9153C11.6667 9.34252 11.4911 9.75224 11.1785 10.0543C10.8659 10.3564 10.442 10.5261 10 10.5261Z" fill="black"></path></svg>
                                  <div className="medium secondary text-14">{hackathonDetail.address}</div>
                              </Space>
                          </Col>
                          <Col span={11} className="f a-center">
                              <Space>
                                <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="landmark" className="black svg-inline--fa fa-landmark fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--text-dark)"><path fill="currentColor" d="M501.62 92.11L267.24 2.04a31.958 31.958 0 0 0-22.47 0L10.38 92.11A16.001 16.001 0 0 0 0 107.09V144c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-36.91c0-6.67-4.14-12.64-10.38-14.98zM64 192v160H48c-8.84 0-16 7.16-16 16v48h448v-48c0-8.84-7.16-16-16-16h-16V192h-64v160h-96V192h-64v160h-96V192H64zm432 256H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                                <div className="medium secondary text-14">Public</div>
                              </Space>
                          </Col>
                          <Col span={13}>
                            <Space>  
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7029 16.2578L15.488 11.4062C15.6638 11.0195 15.8044 10.9141 16.2966 10.4219C16.5427 10.1758 16.7537 9.68359 16.7537 9.29688C16.7537 9.19141 16.7185 9.01562 16.6834 8.91016C16.4021 7.82031 16.4021 7.96094 16.6834 6.87109C16.7185 6.76562 16.7537 6.58984 16.7537 6.48438C16.7537 6.09766 16.5427 5.60547 16.2966 5.35938C15.488 4.55078 15.5584 4.69141 15.2771 3.60156C15.1365 3.10938 14.6443 2.61719 14.1521 2.47656C13.0623 2.19531 13.2029 2.26562 12.4294 1.49219C12.1482 1.21094 11.656 1 11.3044 1C11.199 1 10.9881 1.03516 10.8826 1.07031C9.79277 1.35156 9.96855 1.35156 8.87871 1.07031C8.77324 1.03516 8.5623 1 8.45683 1C8.10527 1 7.61308 1.21094 7.36699 1.49219C6.5584 2.26562 6.69902 2.19531 5.60918 2.47656C5.11699 2.61719 4.6248 3.10938 4.48418 3.60156C4.20293 4.69141 4.27324 4.55078 3.46465 5.35938C3.07793 5.74609 2.90215 6.34375 3.07793 6.87109C3.35918 7.96094 3.35918 7.82031 3.07793 8.91016C3.04277 9.01562 3.00762 9.19141 3.00762 9.29688C3.00762 9.68359 3.21855 10.1758 3.46465 10.4219C3.99199 10.9492 4.09746 11.0195 4.27324 11.4062L2.0584 16.2578C1.84746 16.7148 2.23418 17.207 2.79668 17.207L5.36308 17.1367L7.1209 18.7891C7.29668 18.9297 7.50762 19 7.71855 19C7.9998 19 8.28105 18.8594 8.42168 18.5781L9.89824 15.3789L11.3396 18.5781C11.4802 18.8594 11.7615 19 12.0779 19C12.2537 19 12.4646 18.9297 12.6404 18.7891L14.3982 17.1367L16.9646 17.207C17.5271 17.207 17.9138 16.7148 17.7029 16.2578ZM7.40215 16.7148L6.03105 15.4141L4.27324 15.4844L5.32793 13.1641C5.39824 13.1992 5.50371 13.2695 5.60918 13.2695C6.48808 13.5156 6.52324 13.4805 7.1209 14.043C7.40215 14.3594 7.82402 14.5 8.21074 14.5C8.28105 14.5 8.35136 14.5 8.42168 14.5L7.40215 16.7148ZM8.2459 12.8125C7.47246 12.0391 7.05058 11.9336 6.10136 11.6875C5.71465 10.1758 5.50371 10.0703 4.69512 9.26172C5.11699 7.75 4.97636 7.53906 4.69512 6.51953C5.78496 5.42969 5.82012 5.18359 6.10136 4.09375C7.1209 3.8125 7.40215 3.8125 8.49199 2.72266C10.0037 3.10938 10.2147 3.00391 11.2693 2.72266C12.0076 3.46094 12.1834 3.70703 13.6599 4.09375C14.0466 5.60547 14.2576 5.71094 15.0662 6.51953C14.6443 7.99609 14.7498 8.20703 15.0662 9.26172C14.2927 10.0352 14.0818 10.1758 13.6599 11.6875C12.7459 11.9336 12.324 12.0039 11.5154 12.8125C10.4256 12.1445 9.15996 12.25 8.2459 12.8125ZM14.4334 15.4492L13.7302 15.4141L12.3591 16.7148L11.3396 14.5C11.4099 14.5 11.4802 14.5 11.5505 14.5C11.9373 14.5 12.3591 14.3594 12.6404 14.043C13.238 13.4805 13.2732 13.5156 14.1521 13.2695C14.2576 13.2695 14.363 13.1992 14.4334 13.1641L15.488 15.4844L14.4334 15.4492ZM13.2732 7.75C13.2732 5.88672 11.7615 4.375 9.89824 4.375C7.9998 4.375 6.52324 5.88672 6.52324 7.75C6.52324 9.64844 7.9998 11.125 9.89824 11.125C11.7615 11.125 13.2732 9.64844 13.2732 7.75ZM9.89824 9.4375C8.94902 9.4375 8.21074 8.69922 8.21074 7.75C8.21074 6.83594 8.94902 6.0625 9.89824 6.0625C10.8123 6.0625 11.5857 6.83594 11.5857 7.75C11.5857 8.69922 10.8123 9.4375 9.89824 9.4375Z" fill="black"></path></svg>
                                <div className="medium secondary text-14">${hackathonDetail.prize} </div>
                            </Space>
                          </Col>
                          <Col span={11}>
                            <Space>  
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 11C6.40905 11 5.82389 10.8836 5.27792 10.6575C4.73196 10.4313 4.23588 10.0998 3.81802 9.68198C3.40016 9.26412 3.06869 8.76804 2.84254 8.22208C2.6164 7.67611 2.5 7.09095 2.5 6.5C2.5 5.90905 2.6164 5.32389 2.84254 4.77792C3.06869 4.23196 3.40016 3.73588 3.81802 3.31802C4.23588 2.90016 4.73196 2.56869 5.27792 2.34254C5.82389 2.1164 6.40905 2 7 2C8.19347 2 9.33807 2.47411 10.182 3.31802C11.0259 4.16193 11.5 5.30653 11.5 6.5C11.5 7.69347 11.0259 8.83807 10.182 9.68198C9.33807 10.5259 8.19347 11 7 11V11ZM17.5 15C16.4391 15 15.4217 14.5786 14.6716 13.8284C13.9214 13.0783 13.5 12.0609 13.5 11C13.5 9.93913 13.9214 8.92172 14.6716 8.17157C15.4217 7.42143 16.4391 7 17.5 7C18.5609 7 19.5783 7.42143 20.3284 8.17157C21.0786 8.92172 21.5 9.93913 21.5 11C21.5 12.0609 21.0786 13.0783 20.3284 13.8284C19.5783 14.5786 18.5609 15 17.5 15ZM17.5 16C18.6935 16 19.8381 16.4741 20.682 17.318C21.5259 18.1619 22 19.3065 22 20.5V21H13V20.5C13 19.3065 13.4741 18.1619 14.318 17.318C15.1619 16.4741 16.3065 16 17.5 16V16ZM7 12C7.65661 12 8.30679 12.1293 8.91342 12.3806C9.52004 12.6319 10.0712 13.0002 10.5355 13.4645C10.9998 13.9288 11.3681 14.48 11.6194 15.0866C11.8707 15.6932 12 16.3434 12 17V21H2V17C2 15.6739 2.52678 14.4021 3.46447 13.4645C4.40215 12.5268 5.67392 12 7 12V12Z" fill="black"></path></svg>
                                <div className="medium secondary text-14">{hackathonDetail.participants} </div>
                            </Space>
                          </Col>
                      </Row>
                </div>
                <div className="custom-my-divider"></div>


                <div className="overview-card tags-card">
                  <Row gutter={[16,16]}>
                    <Col span={24}>
                      <Space>  
                        <FlagOutlined style={{fontSize: '20px'}} />
                        <Tag>{hackathonDetail.owner}</Tag>
                      </Space>
                    </Col>
                    <Col span={24}>
                      <Space>  
                        <svg width="20" height="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tag" className="black svg-inline--fa fa-tag fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" color="var(--text-dark)"><path fill="currentColor" d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path></svg>
                        {
                          hackathonDetail.tags && hackathonDetail?.tags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                          ))
                        }
                      </Space>
                    </Col>
                    </Row>
                </div>
            </div>

          </Col>
        </Row>
  </div>;
};

export default Overview;
