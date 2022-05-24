import React from "react";
import "./HackathonBanner.scss";
import { NavLink } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";


const HackathonBanner = () => {
  return (
    <div className="hackathon-banner f-center relative">
        <img
          className="bonus-img-left"
          src="https://crowdhack.io/images/hackathon/left_banner.png"
        />
        <div className="banner-center-content f-column f-center">
          <h1 className="text-center">
            Explore <br /> <strong>Hackathons</strong>
          </h1>
          <p className="text-center">Join One and Start Building</p>
          <NavLink to="/hackathon#list-hkt">
            <CustomButton addedClass="explore-now-btn" name="primary" size="large">Explore Now</CustomButton>
          </NavLink>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M12.9997 16.172L18.3637 10.808L19.7777 12.222L11.9997 20L4.22168 12.222L5.63568 10.808L10.9997 16.172V4H12.9997V16.172Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <img
          className="explore-banner-bg"
          src="	https://crowdhack.io/images/hackathon/bg.png"
        />
        <img
          className="bonus-img-right"
          src="https://crowdhack.io/images/hackathon/right_banner.png"
        />
    </div>
  );
};

export default HackathonBanner;
