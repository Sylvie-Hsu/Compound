import React, { Component } from "react";
import Balance from "./Balance";
import { Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const gridStyle = {
  width: "100%",
  textAlign: "center"
};

class Home extends Component {
  render() {
    console.log(this.props);
    const { assets } = this.props;
    const assetList = assets.length ? (
      assets.map(asset => {
        return (
          <Card key={asset.id}>
            <Card.Grid style={gridStyle}>
              <Link to={"/Asset/" + asset.id}>
                <Row gutter={16}>
                  <Col span={8}>
                    <h4>{asset.name}</h4>
                  </Col>
                  <Col span={8}>
                    <h4>{asset.rate}%</h4>
                  </Col>
                  <Col span={8}>
                    <h4>{asset.balance}</h4>
                  </Col>
                </Row>
              </Link>
            </Card.Grid>
          </Card>
        );
      })
    ) : (
      <div className="center">No assets yet</div>
    );
    return (
      <React.Fragment>
        <Balance />
        {assetList}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    assets: state.assets
  };
};

export default connect(mapStateToProps)(Home);
