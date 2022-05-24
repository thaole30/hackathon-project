import React, { useState } from "react";
import "../SignUpPage.scss";
import { Form, Input, Button, Checkbox } from "antd";
import CustomButton from "../../../../components/CustomButton/CustomButton";
import MyInput from "../../../../components/MyInput/MyInput";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { signUpThunk } from "../../../../redux/userSlice";

const SignUpForm = () => {

  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onFinish = (values) => {
    console.log("formData", formData);
    dispatch(signUpThunk(formData));
    navigate('/hackathon-recommendations');
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
        className="sign-up-form"
      >
        <Form.Item
        >
          <MyInput
            name="firstName"
            placeholder="Enter your first name"
            size="large"
            handleChange={handleChange}
          />
        </Form.Item>
        <Form.Item
        >
          <MyInput
            name="lastName"
            placeholder="Enter your last name"
            size="large"
            handleChange={handleChange}
          />
        </Form.Item>
        <Form.Item
        >
          <MyInput
            name="email"
            placeholder="Enter your email"
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
            placeholder="Enter your password"
            handleChange={handleChange}
          />
        </Form.Item>

      <Form.Item name="subscribe" valuePropName="checked" >
        <Checkbox className="subscribe-checkbox">Subscribe me to Hackahon's weekly newsletter</Checkbox>
      </Form.Item>

        <Form.Item>
          <CustomButton type="submit" addedClass="w-100">
            Sign Up
          </CustomButton>
        </Form.Item>
      </Form>
  );
};

export default SignUpForm;
