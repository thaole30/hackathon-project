import { Space } from 'antd';
import React from 'react';
import { myHackathons } from '../../../../../HackathonPage/data/data';
import MyHackathonCard from './MyHackathonCard';

const Hackathon = () => {
  return (
    <div className="hackathon">
      <div className="container">
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          {
            myHackathons.map((item, index) => {
              return (
                <MyHackathonCard key={item.id} item={item}/>
              )
            })
          }
        </Space>
      </div>
    </div>
  )
}

export default Hackathon