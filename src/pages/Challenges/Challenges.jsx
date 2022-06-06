import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import ProgressLoading from "../../components/ProgressLoading/ProgressLoading";
import SpinLoading from "../../components/SpinLoading/SpinLoading";
import { fetchHackathonDetail } from "../../redux/hackathonSlice";
import { Tabs } from "antd";
import "./Challenges.scss";
import { useHackathonByIdQuery } from "../../query/useHackathonQuery";

const { TabPane } = Tabs;

  const hackathonDetail  =    {
    img: "https://tedu.com.vn/uploaded/images/path/102020/nodejs.png",
    _id: 1,
    prize: 1500,
    title: "Learn Nodejs",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit pariatur magni voluptas rerum facilis magnam, ratione corporis laboriosam, nihil blanditiis nemo delectus eum voluptatem, corrupti quam quidem recusandae dolorum at!",
    gmail: "mnq@gmail.com",
    owner: "Apple",
    address: "USA",
    time: "8:30",
    date: "Feb 15, 2022",
    tags: ["Web", "Productivity","Music"],
    status: "ongoing"
}


const Challenges = () => {
  // const { isLoading, hackathonDetail } = useSelector(
  //   (state) => state.hackathon
  // );

  const [activeTab, setActiveTab] = useState("projects")

  // console.log("hackathonDetail", hackathonDetail);
  const { hackathonId } = useParams();
  const {pathname} = useLocation();
  console.log("pathname", pathname);

  const dispatch = useDispatch();

  useEffect(() => {
    if (hackathonId) {
      dispatch(fetchHackathonDetail(hackathonId));
    }
  }, [hackathonId]);


  useEffect(() => { 
    setActiveTab(pathname.split('/')[2]);
  }, [pathname])

  const {data: projectDetailInfo, isFetching, isLoading} = useHackathonByIdQuery(hackathonId);
  console.log("project detail data", projectDetailInfo)

  if (isLoading) {
    return (
      <>
        {/* <ProgressLoading/> */}
        <SpinLoading />
      </>
    );
  }

  function handleChangeTab(key) {
    // selectActiveTab(key);
    console.log("key", key);
  }




  return (
    <div className="challenges-page">
      <div className="challenge-banner" style={{ padding: "48px 0" }}>
        <div className="container">
          <NavLink
            to={`/challenges/overview/${hackathonId}`}
            onClick={() => dispatch(fetchHackathonDetail(hackathonId))}
            className="hackathon-item"
          >
            <img src={hackathonDetail?.img} className="w-100" alt="" />
          </NavLink>
        </div>
      </div>

      <div className="challenges-tab-section">
        <div className="container">
          <Tabs
            className="challenges-tab"
            // defaultActiveKey="projects"
            activeKey={activeTab}
            onChange={handleChangeTab}
          >
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Overiew" link="overview" count="1" />}
              key="overview"
            >
              {/* Content of Tab Pane 1 */}
            </TabPane>
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="My projects" link="my-project" count="3" />}
              key="my-project"
            >
              {/* Content of Tab Pane 2 */}
            </TabPane>
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Participants" link="participants" count="5" />}
              key="participants"
            >
              {/* Content of Tab Pane 3 */}
            </TabPane>
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Rules" link="rules" count="4" />}
              key="rules"
            >
              {/* Content of Tab Pane 3 */}
            </TabPane>
           
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Project Gallery" link="project-gallery" count="1" />}
              key="project-gallery"
            >
              {/* Content of Tab Pane 3 */}
            </TabPane>
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Updates" link="updates" count="3" />}
              key="updates"
            >
              {/* Content of Tab Pane 3 */}
            </TabPane>
            <TabPane
              tab={<HeaderTab hackathonId={hackathonId} title="Discussions" link="discussions" count="2" />}
              key="discussions"
            >
              {/* Content of Tab Pane 3 */}
            </TabPane>
          </Tabs>
        </div>
      </div>

      <div className="challenges-main-content container">
        <Outlet context={[projectDetailInfo]}/>
      </div>
    </div>
  );
};


const HeaderTab = ({ title, link, count, hackathonId }) => {
  const { userInfo } = useSelector((state) => state.user);
  const navigate = useNavigate();

  return (
    <div className="m-0 portfolio-tab-header text-center relative"
      onClick={() => {
        navigate(`/challenges/${link}/${hackathonId}`);
    
      }}
    >
      <h1 className="m-0 bold text-16">{title}({count})</h1>
    </div>
  );
};


export default Challenges;
