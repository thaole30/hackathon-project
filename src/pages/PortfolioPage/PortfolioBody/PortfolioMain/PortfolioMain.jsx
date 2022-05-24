import React, { useState } from 'react'
import PortfolioTab from './PortfolioTab/PortfolioTab'
import RespectiveContent from './RespectiveContent/RespectiveContent'
import "./PortfolioMain.scss";


const PortfolioMain = () => {

    const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="portfolio-main">
        <PortfolioTab activeTab={activeTab} selectActiveTab={(selectedTab) => setActiveTab(selectedTab)}/>
        <RespectiveContent activeTab={activeTab}/>
    </div>
  )
}

export default PortfolioMain