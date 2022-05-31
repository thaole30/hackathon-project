import React, { useState, useCallback } from "react";
import { Row, Col } from "antd";
import "./SettingPage.scss";
import ProfileInfo from "./RelativeRightContent/ProfileInfo/ProfileInfo";
import Preferences from "./RelativeRightContent/Preferences";
import Email from "./RelativeRightContent/Email";
import Account from "./RelativeRightContent/Account";
import Password from "./RelativeRightContent/Password";

const SettingPage = () => {
  const [activeSeting, setActiveSetting] = useState(1);

  const renderRightContent = useCallback(() => {
    switch (activeSeting) {
      case 1: {
        return <ProfileInfo/>
      }

      case 2: {
        return <Preferences/>
      }

      case 3: {
        return <Email/>
      }

      case 4: {
        return <Account/>
      }

      case 5: {
        return <Password/>
      }

      default:
        break;
    } 
  }, [activeSeting])



  return (
    <div className="setting-page">
      <div className="container">
        <h1 className="text-36 bold">Edit your setting</h1>
        <Row gutter={[20, 20]}>
          <Col xs={12} lg={6}>
            <div className="setting-left">
              <h3 className="default m-0 mt-16 uppercase text-24">portfolio</h3>
              <ul className="settings-list">
                <li
                  className={`setting-item ${activeSeting === 1 ? "active" : ""}`}
                  onClick={() => setActiveSetting(1)}
                >
                  Profile info
                </li>
              </ul>
              <h3 className="default m-0 mt-16 uppercase text-24">
                hackathon recommendations
              </h3>
              <ul className="settings-list">
                <li 
                  className={`setting-item ${activeSeting === 2 ? "active" : ""}`}
                  onClick={() => setActiveSetting(2)}>
                  Preferences & Eligibility
                </li>
              </ul>
              <h3 className="default m-0 mt-16 uppercase text-24">Account Management</h3>
              <ul className="settings-list">
                <li 
                  className={`setting-item ${activeSeting === 3 ? "active" : ""}`}
                  onClick={() => setActiveSetting(3)}>
                  Email notifications
                </li>
                <li 
                  className={`setting-item ${activeSeting === 4 ? "active" : ""}`}
                  onClick={() => setActiveSetting(4)}>
                  Account & privacy
                </li>
                <li 
                  className={`setting-item ${activeSeting === 5 ? "active" : ""}`}
                  onClick={() => setActiveSetting(5)}>
                  Password
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} lg={18}>
            <div className="setting-right">
              {
                renderRightContent()
              }
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SettingPage;
