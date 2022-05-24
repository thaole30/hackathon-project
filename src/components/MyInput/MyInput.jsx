import React from "react";
import { Input } from "antd";
import "./MyInput.scss";

const MyInput = ({ name, placeholder, type = "normal", size, handleChange }) => {
  return type === "normal" ? (
    <Input className="custom-input" name={name} size={size} placeholder={placeholder} onChange={handleChange} />
  ) : (
    <Input.Password
      className="custom-input"
      name={name}
      size={size}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default MyInput;
