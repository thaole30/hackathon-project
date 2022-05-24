import React, { useEffect, useRef } from 'react';
import "./BlogSection.scss";
import { NavLink } from "react-router-dom";
import CustomButton from '../../../components/CustomButton/CustomButton';


const BlogSection = () => {

   

  return (
    <div id="blog" className="blog-section">
        <div className="container-lg">
            <div className="looking-for-hackathon f-between">
                <h3>Are you looking to host an exclusive Hackathon on CrowdHack?</h3>
                <NavLink to="/hackathon/new">
                    <CustomButton size="middle" addedClass="looking-for-hackathon-btn">
                        Get In Touch
                    </CustomButton>
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default BlogSection