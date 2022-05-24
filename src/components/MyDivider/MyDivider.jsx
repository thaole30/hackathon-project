import React from 'react';
import { Divider } from 'antd';
import "./MyDivider.scss";

const MyDivider = ({children, addedClass}) => {
  return (
    <Divider className={`custom-divider ${addedClass}`}>{children}</Divider>
  )
}

export default MyDivider