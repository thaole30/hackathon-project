import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AntdButton from "../../components/CustomButton/CustomButton";
import CustomButton from "../../components/CustomButton/CustomButton";
import { FaBars } from "react-icons/fa";
import { connectAppContext } from "../../contexts/appContext/appContext";
import { openDrawer } from "../../contexts/appContext/appActions";
import AntdDrawer from "../../components/AntdDrawer/AntdDrawer";
import { useSelector } from "react-redux";
import { Badge, Button, Dropdown, Menu, Avatar, Popover } from "antd";
import AvatarDropdown from "./AvatarDropdown/AvatarDropdown";
import "./Header.scss";
import MyPopover from "../../components/MyPopover/MyPopover";
import NotifyPopover from "./NotifyPopover/NotifyPopover";
import useResize from '../../hooks/useResize';

const Header = ({ dispatch }) => {
  // console.log("dispatch func in Header", dispatch);

  const { isLogin, userInfo } = useSelector((state) => state.user);
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  // const windowWidth = useResize();
  // console.log("windowWidth", windowWidth)

  // const showDrawer = () => {
  //   dispatch(openDrawer());
  // };


  const {windowWidth} = useResize();

  useEffect(() => {
    if(windowWidth > 768) {
      setIsOpenDrawer(false);
    }
  }, [windowWidth])


  return (
    <>
      <div className="header-container">
        <div className="container-lg f-between h-100">
          <div className="header-left header-links-list">
            <NavLink to="/hackathon">Hackathons</NavLink>
            <NavLink to="/#blog">Blog</NavLink>
            <NavLink to="/software">Projects</NavLink>
          </div>

          <div className="header-logo">
            <NavLink to="/">
              <img src="https://crowdhack.io/images/logo.svg" alt="" />
            </NavLink>
          </div>

          <div className="header-right header-links-list f-center">
            {!isLogin ? (
              <>
                <NavLink to="/user/sign-in">Login</NavLink>
                <NavLink className="sign-up-link f-center" to="/user/sign-up">
                  Sign Up
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/hackathon/new">Host a Hackathon</NavLink>
                <Badge className="f-center cursor" count={5}>
                  <MyPopover content={<NotifyPopover/>}>
                    <button
                      className="notify-icon cursor"
                      type="primary"
                      shape="circle"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z"
                          fill="#FCC300"
                        ></path>
                      </svg>
                    </button>
                  </MyPopover>
                </Badge>
                <Dropdown
                  overlay={<AvatarDropdown />}
                  placement="bottomRight"
                  arrow
                >
                  <Avatar
                    style={{ width: "40px", height: "40px" }}
                    src={userInfo.img}
                  />
                </Dropdown>
              </>
            )}
            <CustomButton
              addedClass="bar-btn"
              // onClick={showDrawer}
              onClick={() => setIsOpenDrawer(true)}
            >
              <FaBars />
            </CustomButton>
          </div>
        </div>
      </div>
      
      <AntdDrawer
        title="Header title"
        isOpenDrawer={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
      >
        <ul className="mobile-links-list mt-32">
          {!isLogin ? (
            <>
              <li>
                <NavLink to="/user/sign-in">Login</NavLink>
              </li>
              <li>
                <NavLink className="sign-up-link" to="/user/sign-up">
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/hackathon">Hackathons</NavLink>
              </li>
              <li>
                <NavLink to="/#blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/software">Projects</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <Dropdown
                  overlay={<AvatarDropdown />}
                  placement="bottomLeft"
                  arrow
                >
                  <Avatar
                    style={{ width: "40px", height: "40px" }}
                    src={userInfo.img}
                  />
                </Dropdown>
              </li>
              <li>
                <NavLink to="/hackathon">Hackathons</NavLink>
              </li>
              <li>
                <NavLink to="/#blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/software">Projects</NavLink>
              </li>
            </>
          )}
        </ul>
      </AntdDrawer> 
     
    </>
  );
};

export default connectAppContext(Header);
