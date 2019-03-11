import React, { Component } from "react";
import { Card, Row, Col } from "antd";

const gridStyle = {
  width: "100%",
  textAlign: "center"
};

class Asset extends Component {
  render() {
    return (
      <Card>
        <Card.Grid style={gridStyle}>
          <Row gutter={16}>
            <Col span={8}>
              <h4>{this.getAssetID()}</h4>
            </Col>
            <Col span={8}>
              <h4>{this.getAssetRate()}%</h4>
            </Col>
            <Col span={8}>
              <h4>{this.getAssetBalance()}</h4>
            </Col>
          </Row>
        </Card.Grid>
      </Card>
    );
  }
  getAssetID() {
    var id = this.props.asset.id;
    return id;
  }
  getAssetRate() {
    var rate = this.props.asset.rate;
    return rate;
  }
  getAssetBalance() {
    var balance = this.props.asset.balance;
    return balance;
  }
}

export default Asset;
