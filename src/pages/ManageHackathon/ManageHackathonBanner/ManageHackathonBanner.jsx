import { Input, Space, Tag } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import CustomButton from '../../../components/CustomButton/CustomButton'

const ManageHackathonBanner = () => {
  return (
    <div className="manage-hackathon-banner">
        <div className="left-banner-content container h-100 f-center f-column a-start">
            <Space style={{alignItems: 'flex-start'}}>
                <h2 className="white text-60 m-0">check hkt</h2>
                <Tag className="hkt-type-tag">Draft</Tag>
            </Space>
            <Space>
                <NavLink to="/">
                    <CustomButton size="middle" name="secondary">Preview draft site</CustomButton>
                </NavLink>
                <NavLink to="/">
                    <CustomButton size="middle" name="secondary">Publish</CustomButton>
                </NavLink>
            </Space>
        </div>
        <div className="right-banner-content">
            <div className="note-section f-center">
                <Space>
                    <div className="red-dot"></div>
                    <p className="m-0 white">Item with a red dot still need work</p>
                </Space>
            </div>
            <div className="private-link-section">
                <Space>
                    <p className="text-14 bold white m-0">Private link</p>
                    <Input addonAfter="Copy Link" defaultValue="mysite" />
                </Space>
                <p className="text-12 white italic mt-16">
                    Use this link to let others preview your hackathon site before you publish it. Once you click the link, a cookie will be stored in your browser — this will allow you to see the site at its "live" url.
                </p>
            </div>
        </div>
        <div className="manage-hackathon-banner-layer">

        </div>
    </div>
  )
}

export default ManageHackathonBanner