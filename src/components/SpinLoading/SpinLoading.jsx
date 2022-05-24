import { Spin } from 'antd';
import React from 'react';
import "./SpinLoading.scss";

const SpinLoading = () => {
  return (
    <div className="spin-loading f-center">
        <Spin size="large" />
    </div>
  )
}

export default SpinLoading