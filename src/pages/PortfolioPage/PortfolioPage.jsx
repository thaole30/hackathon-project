import React from 'react';
import PortfolioBody from './PortfolioBody/PortfolioBody';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';



const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <PortfolioHeader/>
      <PortfolioBody/>
    </div>
  )
}

export default PortfolioPage