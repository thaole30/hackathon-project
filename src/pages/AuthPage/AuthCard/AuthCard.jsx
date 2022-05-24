import React from "react";
import "./AuthCard.scss";

const AuthCard = ({children, title}) => {
  return (
    <div className="auth-card content">
      <h2>{title}</h2>
        {
            children
        }
    </div>
  );
};

export default AuthCard;
