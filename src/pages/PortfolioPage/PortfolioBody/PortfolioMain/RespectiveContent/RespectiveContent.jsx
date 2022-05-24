import React, { useCallback, useEffect } from 'react';
import { Tabs } from 'antd';
import Projects from './Projects/Projects';
import Hackathon from './Hackathon/Hackathon';
import Followers from './Followers';
import Following from './Following';
import Likes from './Likes/Likes';
import "./RespectiveContent.scss";


const { TabPane } = Tabs;


const RespectiveContent = ({activeTab}) => {

  const renderRespectiveContent = useCallback(() => {
    switch (activeTab) {
      case "projects": {
        return <Projects/>
      }
      case "hackathon": {
        return <Hackathon/>
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

  }, [activeTab])
  
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