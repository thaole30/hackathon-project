import React from 'react';
import { Table, Tag, Space } from 'antd';
import { myHackathons } from '../../data/data';
import {
    EditOutlined,
    EyeOutlined
  } from '@ant-design/icons';
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { NavLink } from 'react-router-dom';

const columns = [
    {
      title: 'Hackathon',
      dataIndex: '',
      key: '',
      render: (field, record, index) => {
          return (
            <Space>
                <img className="mr-8" style={{width: '50px', height: '50px'}} src={record.img} alt="" />
                <div className="f f-column">
                    <h3 className="m-0">{record.creator}</h3>
                    <p className="desc-time m-0 text-16 mr-8">Last updated about 6 days ago</p>
                </div>
                <div className="f-between" style={{marginLeft: '10px'}}>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-8"><path d="M10.0001 18.3333C5.39758 18.3333 1.66675 14.6025 1.66675 9.99996C1.66675 5.39746 5.39758 1.66663 10.0001 1.66663C14.6026 1.66663 18.3334 5.39746 18.3334 9.99996C18.3334 14.6025 14.6026 18.3333 10.0001 18.3333ZM8.09175 16.3891C7.26959 14.6452 6.79331 12.7585 6.68925 10.8333H3.38508C3.54724 12.1157 4.07835 13.3234 4.91389 14.3097C5.74943 15.296 6.85343 16.0184 8.09175 16.3891ZM8.35841 10.8333C8.48425 12.8658 9.06508 14.775 10.0001 16.46C10.9603 14.7304 11.5213 12.8079 11.6417 10.8333H8.35841ZM16.6151 10.8333H13.3109C13.2069 12.7585 12.7306 14.6452 11.9084 16.3891C13.1467 16.0184 14.2507 15.296 15.0863 14.3097C15.9218 13.3234 16.4529 12.1157 16.6151 10.8333ZM3.38508 9.16663H6.68925C6.79331 7.24145 7.26959 5.3547 8.09175 3.61079C6.85343 3.98153 5.74943 4.70392 4.91389 5.69021C4.07835 6.67649 3.54724 7.88421 3.38508 9.16663ZM8.35925 9.16663H11.6409C11.5207 7.19213 10.9601 5.26957 10.0001 3.53996C9.03982 5.2695 8.47888 7.19206 8.35841 9.16663H8.35925ZM11.9084 3.61079C12.7306 5.3547 13.2069 7.24145 13.3109 9.16663H16.6151C16.4529 7.88421 15.9218 6.67649 15.0863 5.69021C14.2507 4.70392 13.1467 3.98153 11.9084 3.61079Z" fill="#00A3FF"></path></svg>
                    </span>
                    <p className="m-0 text-20">Online</p>
                </div>
            </Space>
          )
      },
      width: '60%',
    },
    {
      title: 'Status',
      dataIndex: 'progress',
      key: 'progress',
      render: (field, record, index) => {
          return (
                <button className="status-btn">
                    {record.progress}
                </button>
          )
      }
    },
    {
        title: "Action",
        dataIndex: "",
        key: "",
        render: (field, record, index) => {
          return (
            <div className="f f-center">
                <NavLink to="/" className="action-btn mr-8">
                    <EyeOutlined />
                </NavLink>
                <NavLink to="/" className="action-btn">
                    <EditOutlined />
                </NavLink>
            </div>
          );
        },
    },
    
  ];
  


  const data = myHackathons;

const HackathonTable = () => {
  return (
    <Table className="hackathon-table" columns={columns} dataSource={data} />
  )
}

export default HackathonTable