import { Space } from 'antd';
import React from 'react';
import { myHackathons } from '../../../../../HackathonPage/data/data';
import MyHackathonCard from './MyHackathonCard';

const Hackathon = ({userData}) => {
  return (
    <div className="hackathon">
      <div className="container">
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {
            userData?.myHackathons?.map((item, index) => {
              return (
                <MyHackathonCard key={item._id} creatorName={userData.name} item={item}/>
              )
            })
          }
        </Space>
      </div>
    </div>
  )
}

export default Hackathon