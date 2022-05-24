import React, { useState } from "react";
import "./ExploreHackathon.scss";
import { Row, Empty} from "antd";
import CustomButton from "./../../../components/CustomButton/CustomButton";
import TabButton from "../../../components/TabButton/TabButton";
import MedalSvg from "./svg/MedalSvg";
import { hackathons } from "../BannerInfo/data";
import DesignItem from "./DesignItem";
import { NavLink } from "react-router-dom";

const ExploreHackathon = () => {
  const [activeTab, setActiveTab] = useState("coming-soon");

  return (
    <section className="explore-hackathon">
      <div className="container-lg">
        <Row className="f-between mb-48">
          <div className="explore-title">
            <h1>Explore Hackathons</h1>
          </div>
          <div className="explore-tabs f-between">
            <TabButton
              active={activeTab === "coming-soon"}
              svgIcon={<MedalSvg></MedalSvg>}
              onClick={() => setActiveTab("coming-soon")}
            >
              Coming Soon
            </TabButton>
            <TabButton
              active={activeTab === "ongoing"}
              svgIcon={<MedalSvg></MedalSvg>}
              onClick={() => setActiveTab("ongoing")}
            >
              Ongoing
            </TabButton>
            <TabButton
              active={activeTab === "completed"}
              svgIcon={<MedalSvg></MedalSvg>}
              onClick={() => setActiveTab("completed")}
            >
              Completed
            </TabButton>
          </div>
        </Row>

        <Row gutter={[16, 16]} className="hackathon-list f-between">
          {
            hackathons.filter((item) => item.status === activeTab).map((item) => {
              return (
                <DesignItem key={item.id} item={item}/>
              )
            })
          }

          {
             hackathons.filter((item) => item.status === activeTab).length === 0 && (
                <Empty className="w-100"/>
             )
          }
         
        </Row>

        <div className="f-center">
          <NavLink to="/hackathon" className="explore-btn-wrap">
            <CustomButton addedClass="w-100">Explore More</CustomButton>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default ExploreHackathon;
