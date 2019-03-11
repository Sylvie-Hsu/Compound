import React, { Component } from "react";
import { Card, Col, Row } from "antd";

class Balance extends Component {
  state = {};
  render() {
    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Supply Balance" bordered={false}>
              0.0000
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Borrow Balance" bordered={false}>
              0.0000
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Available to Borrow" bordered={false}>
              0.0000
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Balance;
