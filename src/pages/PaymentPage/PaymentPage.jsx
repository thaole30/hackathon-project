import React, { useState } from 'react';
import { Tabs } from 'antd';
import "./PaymentPage.scss";

const { TabPane } = Tabs;

const PaymentPage = () => {

    const [activeTab, setActiveTab] = useState("earnings");

    function callback(key) {
        console.log(key);
        setActiveTab(key);
    }
      

  return (
    <div className="payment-page">
        <div className="history-wrapper">
            <div className="container">
                <h1 className="text-36 m-0">History</h1>
            </div>
        </div>
        <div className="payment-content">
            <div className="container">
                <div className="tab-container">
                <Tabs defaultActiveKey="earnings" onChange={callback}>
                    <TabPane className="tab-item" tab={<h1 className="m-0">EARNINGS</h1>} key="earnings">
                        Earning content
                    </TabPane>
                    <TabPane className="tab-item" tab={<h1 className="m-0">PAYMENT</h1>} key="payment">
                        Payment content
                    </TabPane>
                </Tabs>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PaymentPage