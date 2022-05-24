import React from "react";
import "./TabButton.scss";

const TabButton = ({children, svgIcon, active, onClick}) => {
  return (
    <button className={`tab-btn f a-center ${active ? "active-tab" : ""}`}
    onClick={onClick}
    >
      <span className="f-center">
        {svgIcon}
      </span>
      {children}
    </button>
  );
};

export default TabButton;
