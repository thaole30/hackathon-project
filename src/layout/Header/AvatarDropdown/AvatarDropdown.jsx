import { Menu, Progress } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { logOut } from '../../../redux/userSlice';
import "./AvatarDropdown.scss";

const AvatarDropdown = () => {

  const {userInfo} = useSelector(state => state.user);
  const navigate = useNavigate();


  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
  }

  return (
    <div className="avatar-dropdown">
        <div className="dropdown-top-info content">
            <h2>{userInfo.name}</h2>
            <CustomButton size="middle" addedClass="connect-wallet-btn text-24 white">Connect Wallet</CustomButton>
        </div>
        <div className="progress-wrapper">
            <h2>Complete your profile</h2>
            <Progress percent={80} />
        </div>

        <ul className="menu-items-list">
            <li>
                <NavLink to="/hackathon/list">Manage Hackathon</NavLink>
            </li>
            <li>
                <NavLink to="/payment">Payment History</NavLink>
            </li>
            <li>
                <NavLink to={`/portfolio/${userInfo.name}`}>Profile</NavLink>
            </li>
            <li>
                <NavLink to="/settings">Setting</NavLink>
            </li>
            <li>
                <NavLink to="/help">Help</NavLink>
            </li>
        </ul>;
        <div className="log-out-wrapper error">
            <h3 className="cursor" onClick={handleLogOut}>Log Out</h3>
        </div>
    </div>
  )
}

export default AvatarDropdown