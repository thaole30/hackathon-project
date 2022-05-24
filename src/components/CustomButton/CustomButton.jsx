import React from 'react';
import { Button } from 'antd';
import "./CustomButton.scss";

const CustomButton = ({children, addedClass, name='primary', size='large', type='button', ...props}) => {
  return (
    <button type={type} className={`custom-button ${name} ${size} ${addedClass}`}
      {...props}
    >{children}</button>
  )
}

export default CustomButton