import React from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import "./PortfolioBody.scss";
import PortfolioMain from './PortfolioMain/PortfolioMain';

const PortfolioBody = ({userInfo}) => {
  console.log("userInfo", userInfo);
  return (
    <div className="portfolio-body">
        <PersonalInfo userInfo={userInfo}/>
        <PortfolioMain userInfo={userInfo}/>
    </div>
  )
}

export default PortfolioBody