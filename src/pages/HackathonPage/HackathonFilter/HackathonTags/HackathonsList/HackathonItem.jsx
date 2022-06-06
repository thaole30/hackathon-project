import React from 'react';
import {Row, Col, Space, Tag} from "antd";
import { NavLink } from "react-router-dom";

const HackathonItem = ({item}) => {
  return (
    <Col xs={24} md={12} lg={8}>
    <NavLink to={`/challenges/overview/${item._id}`} className="hackathon-item">
      <div className="hackathon-card">
        <img
          className="mb-20 card-img"
          src={item.img}
          alt={item.title}
        />
        <div className="hackathon-card-content">
          <Space>
            <span>${item.prize}</span>
            <p>in prizes - 3 participants</p>
          </Space>
          <h3 className="mt-24 mb-16 text-20 medium tint poppins">
            {item.title}
          </h3>
          <p className="tint-3 mb-16">
            {item.desc}
            <br />
            <span className="success-2">{item.gmail}</span>
          </p>
          <Row gutter={[16, 16]}>
            <Col xs={12}>
              <Space>
                <span className="hackathon-card-icon f-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.3337 13.9996V12.6663C13.3337 11.9591 13.0527 11.2808 12.5526 10.7807C12.0525 10.2806 11.3742 9.99963 10.667 9.99963H5.33366C4.62641 9.99963 3.94814 10.2806 3.44804 10.7807C2.94794 11.2808 2.66699 11.9591 2.66699 12.6663V13.9996"
                      stroke="#080A25"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M7.99967 7.33297C9.47243 7.33297 10.6663 6.13906 10.6663 4.6663C10.6663 3.19354 9.47243 1.99963 7.99967 1.99963C6.52692 1.99963 5.33301 3.19354 5.33301 4.6663C5.33301 6.13906 6.52692 7.33297 7.99967 7.33297Z"
                      stroke="#080A25"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
                <span>{item.owner}</span>
              </Space>
            </Col>
            <Col xs={12}>
              <Space className="f f-center">
                <span className="hackathon-card-icon f-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_229_1463)">
                      <path
                        d="M7.99967 14.6663C11.6816 14.6663 14.6663 11.6816 14.6663 7.99967C14.6663 4.31778 11.6816 1.33301 7.99967 1.33301C4.31778 1.33301 1.33301 4.31778 1.33301 7.99967C1.33301 11.6816 4.31778 14.6663 7.99967 14.6663Z"
                        stroke="#080A25"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M8 4.79962V8.79962L10.6667 10.133"
                        stroke="#080A25"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_229_1463">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0 -0.000366211)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span>{item.time}</span>
                <div className="hackathon-timezone">GMT-05:00</div>
              </Space>
            </Col>
            <Col xs={12}>
              <Space className="f">
                <span className="hackathon-card-icon f-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_229_1479)"><path d="M14 6.66629C14 11.333 8 15.333 8 15.333C8 15.333 2 11.333 2 6.66629C2 5.07499 2.63214 3.54887 3.75736 2.42365C4.88258 1.29843 6.4087 0.66629 8 0.66629C9.5913 0.66629 11.1174 1.29843 12.2426 2.42365C13.3679 3.54887 14 5.07499 14 6.66629Z" stroke="#080A25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 8.66629C9.10457 8.66629 10 7.77086 10 6.66629C10 5.56172 9.10457 4.66629 8 4.66629C6.89543 4.66629 6 5.56172 6 6.66629C6 7.77086 6.89543 8.66629 8 8.66629Z" stroke="#080A25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_229_1479"><rect width="16" height="16" fill="white" transform="translate(0 -0.000366211)"></rect></clipPath></defs></svg>
                </span>
                <span className="address">United States of America</span>
              </Space>
            </Col>
            <Col xs={12}>
              <Space className="f f-center">
                <span className="hackathon-card-icon f-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_229_1448)"><path d="M12.6667 2.66629H3.33333C2.59695 2.66629 2 3.26324 2 3.99962V13.333C2 14.0693 2.59695 14.6663 3.33333 14.6663H12.6667C13.403 14.6663 14 14.0693 14 13.333V3.99962C14 3.26324 13.403 2.66629 12.6667 2.66629Z" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10.6667 1.33298V3.99964" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.33325 1.33298V3.99964" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M2 6.66629H14" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_229_1448"><rect width="16" height="16" fill="white" transform="translate(0 -0.000366211)"></rect></clipPath></defs></svg>
                </span>
                <span>{item.date}</span>
              </Space>
            </Col>
          </Row>

          <Space className="mt-24">
            <span className="nowrap tint medium">Tags:</span>
            <Space className="tags-list">
              {
                item.tags?.map((tag) => (
                  <Tag key={tag} className="tag-item">{tag}</Tag>
                ))
              }
            </Space>
          </Space>
        </div>
      </div>
    </NavLink>
  </Col>
  )
}

export default HackathonItem