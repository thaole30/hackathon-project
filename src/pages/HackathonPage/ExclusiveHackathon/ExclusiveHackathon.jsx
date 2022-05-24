import React from "react";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import "./ExclusiveHackathon.scss";

const ExclusiveHackathon = () => {
  return (
    <div className="exclusive-hackathon">
      <div className="container-lg">
        <div className="content f-between">
            <img src="https://crowdhack.io/images/hackathon/dollar-dollar-color.png" alt="dollar" />
            <h3>Want to host an exclusive hackathon on CrowdHack?</h3>
            <NavLink to="/hackathon/new">
                <CustomButton name="primary" size="large">
                    Get In Touch
                </CustomButton>
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveHackathon;
