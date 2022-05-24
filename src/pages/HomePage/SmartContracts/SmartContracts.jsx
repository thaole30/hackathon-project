import React from 'react';
import "./SmartContracts.scss";
import { Row, Col } from 'antd';

const SmartContracts = () => {
  return (
    <section className="smart-contracts">
        <div className="container-lg">
        <Row className="f-between">
            <Col xs={24} md={12}>
                <div className="content">
                    <h2>A Web 3.0 infrastructure powered by Smart Contracts you can trust</h2>
                    <p>CrowdHack is powered by smart contracts, which help us distribute project rewards in a fair and transparent fashion, while keeping the whole process transparent, fast and sceure</p>
                </div>
            </Col>
            <Col xs={24} md={12} className="f-end">
                <img className="infrastructure-img" src="https://crowdhack.io/images/landing/infrastructure.svg" alt="infrastructure" />
            </Col>
        </Row>
        </div>
    </section>
  )
}

export default SmartContracts