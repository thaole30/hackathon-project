import React, { useState } from "react";
import { Space, Tag } from "antd";
import TabButton from "../../../../components/TabButton/TabButton";
import HackathonsList from "./HackathonsList/HackathonsList";
import {
  filterByPopularTags,
  filterByStatus,
} from "../hackathonReducer/hackathonAction";

const HackathonTags = ({ hackathonState, dispatchHackathon }) => {
  const [activeArrangedTab, setActiveArrangedTab] = useState(1);

  return (
    <div className="hackathon-tags container-lg">
      <div className="popular-tags f-center">
        <h3 className="tags-title">Popular Tags:</h3>
        <Space>
          {hackathonState.popularTags.map((tag, index) => (
            <Tag
              className={`tag-item ${tag.isSelected ? "selected" : ""}`}
              key={index}
              onClick={() => dispatchHackathon(filterByPopularTags(tag.label))}
            >
              <svg
                style={{ marginRight: "4px" }}
                width="6"
                height="7"
                viewBox="0 0 6 7"
                fill="none"
              >
                <circle
                  cx="3"
                  cy="3.5"
                  r="3"
                  fill="#080A25"
                  fillOpacity="0.7"
                ></circle>
              </svg>
              {tag.label}
            </Tag>
          ))}
        </Space>
      </div>

      <div className="status-tabs f a-center">
        <Space className="status-left-tabs">
          {hackathonState.statuses.map((tab, index) => (
            <TabButton
              key={index}
              svgIcon={tab.svgIcon}
              active={tab.isSelected}
              onClick={() => dispatchHackathon(filterByStatus(tab.value))}
            >
              {tab.label}
            </TabButton>
          ))}
        </Space>
        <div className="status-btn-group f-end">
          <button 
          className={`f-center ${activeArrangedTab === 1 && "active"}`}
          onClick={() => setActiveArrangedTab(1)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3H3V10H10V3Z" fill="#080A25"></path>
              <path d="M21 3H14V10H21V3Z" fill="#080A25"></path>
              <path d="M21 14H14V21H21V14Z" fill="#080A25"></path>
              <path d="M10 14H3V21H10V14Z" fill="#080A25"></path>
            </svg>
          </button>
          <button 
          className={`f-center ${activeArrangedTab === 2 && "active"}`}
          onClick={() => setActiveArrangedTab(2)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 6H21"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 12H21"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 18H21"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 6H3.01"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 12H3.01"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M3 18H3.01"
                stroke="#080A25"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="list-hkt" className="hackathons-list">
        <HackathonsList hackathonState={hackathonState} />
      </div>
    </div>
  );
};

export default HackathonTags;
