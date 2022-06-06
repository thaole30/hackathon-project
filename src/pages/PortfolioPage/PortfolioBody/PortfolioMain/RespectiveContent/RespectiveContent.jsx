import React, { useCallback, useEffect } from 'react';
import { Tabs } from 'antd';
import Projects from './Projects/Projects';
import Hackathon from './Hackathon/Hackathon';
import Followers from './Followers';
import Following from './Following';
import Likes from './Likes/Likes';
import "./RespectiveContent.scss";


const { TabPane } = Tabs;


const RespectiveContent = ({activeTab, userInfo}) => {
  // console.log("userInfo123", userInfo)

  const renderRespectiveContent = useCallback(() => {
    switch (activeTab) {
      case "projects": {
        return <Projects userData={userInfo}/>
      }
      case "hackathon": {
        return <Hackathon userData={userInfo}/>
      }
      case "followers": {
        return <Followers/>
      }
      case "following": {
        return <Following/>
      }
      case "likes": {
        return <Likes/>
      }
      default:
        break;
    }

  }, [activeTab, userInfo])
  
  // const renderRespectiveContent = () => {
  //   switch (activeTab) {
  //     case "projects": {
  //       return <Projects/>
  //     }
  //     case "hackathons": {
  //       return <Hackathons/>
  //     }
  //     case "followers": {
  //       return <Followers/>
  //     }
  //     case "following": {
  //       return <Following/>
  //     }
  //     case "likes": {
  //       return <Likes/>
  //     }
  //     default:
  //       break;
  //   }

    
  // }

  return (
    <div className="respective-content">
      <div className="container">
        {
          renderRespectiveContent()
        }
      </div>
    </div>
  )
}

export default RespectiveContent