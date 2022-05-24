import React from 'react';
import { Row, Col } from 'antd';
import "./HomePage.scss";
import BannerInfo from './BannerInfo/BannerInfo';
import ExploreHackathon from './ExploreHackathon/ExploreHackathon';
import Partner from './Partner/Partner';
import ExploreAndBuild from './ExploreAndBuild/ExploreAndBuild';
import SmartContracts from './SmartContracts/SmartContracts';
import BlogSection from './BlogSection/BlogSection';
import ReBaked from './ReBaked/ReBaked';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <BannerInfo/>
      <ExploreHackathon/>
      <Partner/>
      <ExploreAndBuild/>
      <SmartContracts/>
      <BlogSection/>
      <ReBaked/>
    </div>
  )
}

export default HomePage