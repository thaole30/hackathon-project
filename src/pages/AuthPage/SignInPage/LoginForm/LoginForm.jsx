import React, { useState } from "react";
import "../SignInPage.scss";
import { Form, Input, Button, Checkbox } from "antd";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import MyInput from "../../../../components/MyInput/MyInput";
import { signInThunk } from "../../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const { isError } = useSelector((state) => state.user);


  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log("formData", formData);
    dispatch(signInThunk(formData));
    navigate('/');

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
   
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
         
        >
          <MyInput
            name="email"
            placeholder="enter your email"
            size="large"
            handleChange={handleChange}
          />
        </Form.Item>

        <Form.Item
        
        >
          <MyInput
            name="password"
            type="password"
            size="large"
            placeholder="enter your password"
            handleChange={handleChange}
          />
        </Form.Item>

        <Form.Item>
          <CustomButton type="submit" addedClass="w-100">
            Log in
          </CustomButton>
        </Form.Item>
      </Form>
  );
};

export default LoginForm;
