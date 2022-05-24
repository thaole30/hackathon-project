import React, { useEffect, useState } from 'react';
import { Tabs } from "antd";
import { useLocation, useNavigate } from 'react-router-dom';

const { TabPane } = Tabs;


const MainTab = ({currentTab, hackathonId}) => {
  const navigate = useNavigate();

  function handleChangeTab(key) {
    // selectActiveTab(key);
    console.log("key", key);
    navigate(`/hackathon/manage/${hackathonId}/${key}`);
  }


  return (
    <div className="main-tab">
         <div className="container">
          <Tabs
            className="challenges-tab"
            defaultActiveKey={currentTab}
            onChange={handleChangeTab}
          >
            <TabPane
              tab={<h3 className="m-0 bold text-16">Update</h3>}
              key="update"
            >
            </TabPane>
            <TabPane
              tab={<h3 className="m-0 bold text-16">Discussion</h3>}
              key="discussion"
            >
            </TabPane>
            <TabPane
              tab={<h3 className="m-0 bold text-16">Edit Hackathon</h3>}
              key="edit"
            >
            </TabPane>
         
          </Tabs>
        </div>
    </div>
  )
}

export default MainTab