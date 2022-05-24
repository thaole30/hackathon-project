import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const CreateHackathonTab = () => {
  function callback(key) {
    console.log(key);
  }

  return (
    <div className="hackathon-tab">
        <div className="container h-100">
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab={<h2 className="text-36 bold info">Create a new hackathon</h2>} key="1">
                </TabPane>
            </Tabs>
        </div>
    </div>
  );
};

export default CreateHackathonTab;
