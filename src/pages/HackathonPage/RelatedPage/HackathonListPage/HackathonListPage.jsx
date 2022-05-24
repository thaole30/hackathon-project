import React from 'react';
import { Space } from 'antd';
import "./HackathonListPage.scss";
import CustomButton from '../../../../components/CustomButton/CustomButton';
import HackathonTable from './HackathonTable';

const HackathonListPage = () => {
  return (
    <div className="hackathon-list-page">
      <div className="container">
        <div className="hackathon-list-content">
          <Space>
            <h1 className="m-0">Manage your hackathons</h1>
            <CustomButton addedClass="manage-hkt-icon" size="small">
              <svg style={{width: '12px'}} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plug" className="svg-inline--fa fa-plug fa-w-12 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" color="#fff"><path fill="currentColor" d="M320,32a32,32,0,0,0-64,0v96h64Zm48,128H16A16,16,0,0,0,0,176v32a16,16,0,0,0,16,16H32v32A160.07,160.07,0,0,0,160,412.8V512h64V412.8A160.07,160.07,0,0,0,352,256V224h16a16,16,0,0,0,16-16V176A16,16,0,0,0,368,160ZM128,32a32,32,0,0,0-64,0v96h64Z"></path></svg>
            </CustomButton>
          </Space>
          <div className="hackathon-table-container content">
            <h2>2 hackathons</h2>
            <HackathonTable/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HackathonListPage