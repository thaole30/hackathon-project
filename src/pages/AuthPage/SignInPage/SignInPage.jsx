import React from 'react';
import { Row, Col, Space } from 'antd';
import "./SignInPage.scss";
import LoginForm from './LoginForm/LoginForm';
import { NavLink, useNavigate } from 'react-router-dom';
import MyDivider from '../../../components/MyDivider/MyDivider';
import CustomButton from '../../../components/CustomButton/CustomButton';
import AuthCard from '../AuthCard/AuthCard';
import { GoogleLogin } from '@react-oauth/google';
import { signInWithhGoogleApi } from '../../../api/auth';
import { signInWithGoogleCall } from '../../../api/call/authCall';
import { useDispatch } from 'react-redux';

const SignInPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  return (
    <div className="sign-in-page">
        <div className="container">
            <Row gutter={[12, 12]}>
                <Col xs={24} lg={10}>
                    <div className="sign-in-left f f-column">
                        <img style={{width: '32px', height: '32px'}} src="	https://crowdhack.io/images/icon/pub.png" alt="" />
                        <div className="description mt-16 mb-24">
                            <p>In 2021 alone, more than $300 million have been procured as bounties or hackathon rewards from blockchain projects.</p>
                        </div>
                        <h2>You are just ONE step away from start Building & Earning!</h2>
                    </div>
                </Col>
                <Col xs={24} lg={14}>
                    <AuthCard title="Log in">
                        <LoginForm/>
                        <div className="sign-in-action f-between">
                            <NavLink className="text-16 underline" to="/user/reset-password">Forgot your password?</NavLink>
                            <div>New to CrowdHack&nbsp;<NavLink className="text-16 underline black" to="/user/sign-up">Sign Up.</NavLink></div>
                        </div>
                        <MyDivider className="text-20">or</MyDivider>
                        <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log("credentialResponse", credentialResponse);
                            signInWithGoogleCall(credentialResponse.credential, dispatch);
                            navigate('/');

                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        />;
                        <NavLink to="/user/sign-up">
                            <CustomButton addedClass="auth-github">
                                <Space>
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16 fa-lg " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                                    <span className="text-16 black">Login with Github</span>
                                </Space>
                            </CustomButton>
                        </NavLink>
                    </AuthCard>
                </Col>
            
            </Row>
        </div>
    </div>
  )
}

export default SignInPage