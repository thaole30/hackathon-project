import React from 'react'
import { connectAppContext } from '../../../../../contexts/appContext/appContext';
import HackathonItem from './HackathonItem';
import {Row} from "antd";


const HackathonsList = ({ appContext, hackathonState }) => {
    // console.log("appContext", appContext);
    console.log("hackathonState", hackathonState);
  return (
    <div className="hackathons-list">
        <Row gutter={[16, 16]} className="hackathon-list f-between">

          {
            hackathonState.filteredHackathons?.map((item) => {
              return (
                <HackathonItem key={item.id} item={item}/>
              )
            })
          }
          </Row>
    </div>
  )
}

export default connectAppContext(HackathonsList);