import React, { Component } from "react";
import { Statistic, Col, Row } from "antd";

class Balance extends Component {
  render() {
    return (
      <div style={{ background: "#00000", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Statistic title="Supply Balance" value={0.1466} />
          </Col>
          <Col span={8}>
            <Statistic title="Borrow Balance" value={0.3512} />
          </Col>
          <Col span={8}>
            <Statistic title="Available to Borrow" value={0.0698} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Balance;
