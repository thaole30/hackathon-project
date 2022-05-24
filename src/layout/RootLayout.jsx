import React, { useEffect } from 'react';
import Header from './Header/Header';
import { Layout } from 'antd';
import Footer from './Footer/Footer';
import { Outlet, useLocation } from "react-router-dom";
import AntdDrawer from '../components/AntdDrawer/AntdDrawer';
import "./RootLayout.scss";

const RootLayout = () => {

  const location = useLocation();
  console.log("hash", location.hash);
  useEffect(() => {
    if(!location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const element = document.querySelector(location.hash);
      console.log("element", element);
      element.scrollIntoView({
          behavior: "smooth",
      });
    }
  }, [location])


  return (
    <>
    <Layout className="root-layout">
        <Header/>
        <main className="main-page-content">
          <Outlet />
        </main>
        <Footer/>
    </Layout>
    {/* <AntdDrawer/> */}

    </>
  )
}

export default RootLayout