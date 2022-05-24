import React from "react";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const { TabPane } = Tabs;

const PortfolioTab = ({ activeTab, selectActiveTab }) => {


  function callback(key) {
    selectActiveTab(key);
  }

  return (
    <div className="portfolio-tab-wrapper">
      <div className="container">
        <Tabs
          className="portfolio-tab"
          defaultActiveKey="projects"
          onChange={callback}
        >
          <TabPane
            tab={<HeaderTab title="Projects" count="1" />}
            key="projects"
          >
            {/* Content of Tab Pane 1 */}
          </TabPane>
          <TabPane
            tab={<HeaderTab title="Hackathon" count="3" />}
            key="hackathon"
          >
            {/* Content of Tab Pane 2 */}
          </TabPane>
          <TabPane
            tab={<HeaderTab title="Followers" count="5" />}
            key="followers"
          >
            {/* Content of Tab Pane 3 */}
          </TabPane>
          <TabPane
            tab={<HeaderTab title="Following" count="4" />}
            key="following"
          >
            {/* Content of Tab Pane 3 */}
          </TabPane>
          <TabPane tab={<HeaderTab title="Likes" count="7" />} key="likes">
            {/* Content of Tab Pane 3 */}
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default PortfolioTab;

const HeaderTab = ({ title, count }) => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="m-0 portfolio-tab-header text-center relative"
      onClick={() => {
        navigate(`/portfolio/${userInfo.name}?tab=${title.toLowerCase()}`);
    
      }}
    >
      <h2 className="count m-0">{count}</h2>
      <h1 className="m-0 bold text-24">{title}</h1>
    </div>
  );
};
