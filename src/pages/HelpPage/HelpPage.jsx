import React from 'react';
import HelpBanner from './HelpBanner/HelpBanner';
import "./HelpPage.scss";
import { Outlet } from "react-router-dom";
import HelpBody from './HelpBody/HelpBody';

const HelpPage = () => {
  return (
      <>
        <Outlet />  
        <div className="help-page">
            <HelpBanner/>
            <HelpBody/>
        </div>
      </>
  )
}

export default HelpPage