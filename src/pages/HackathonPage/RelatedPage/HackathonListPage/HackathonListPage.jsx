import React from 'react';
import { Space } from 'antd';
import "./HackathonListPage.scss";
import CustomButton from '../../../../components/CustomButton/CustomButton';
import HackathonTable from './HackathonTable';
import { useMyHackathonQuery } from '../../../../query/useHackathonQuery';
import SpinLoading from '../../../../components/SpinLoading/SpinLoading';

const HackathonListPage = () => {

  const {data: myHackathons, isFetching, isLoading} = useMyHackathonQuery();
  console.log("myHackathons data", myHackathons)

  if (isLoading) {
    return (
      <>
        {/* <ProgressLoading/> */}
        <SpinLoading />
      </>
    );
  }

  return (
    <div className="hackathon-list-page">
      <div className="container">
        <div className="hackathon-list-content">
          <Space>
            <h1 className="m-0">Manage your hackathons</h1>
          </Space>
          <div className="hackathon-table-container content">
            <h2>{myHackathons.length} hackathons</h2>
            <HackathonTable myHackathons={myHackathons}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonListPage