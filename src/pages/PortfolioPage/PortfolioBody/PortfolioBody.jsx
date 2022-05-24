import React from 'react';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import "./PortfolioBody.scss";
import PortfolioMain from './PortfolioMain/PortfolioMain';

const PortfolioBody = () => {
  return (
    <div className="portfolio-body">
        <PersonalInfo/>
        <PortfolioMain/>
    </div>
  )
}

export default PortfolioBody