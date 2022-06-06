import React, { useState } from 'react'
import PortfolioTab from './PortfolioTab/PortfolioTab'
import RespectiveContent from './RespectiveContent/RespectiveContent'
import "./PortfolioMain.scss";


const PortfolioMain = ({userInfo}) => {

    const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="portfolio-main">
        <PortfolioTab userInfo={userInfo} activeTab={activeTab} selectActiveTab={(selectedTab) => setActiveTab(selectedTab)}/>
        <RespectiveContent userInfo={userInfo} activeTab={activeTab}/>
    </div>
  )
}

export default PortfolioMain