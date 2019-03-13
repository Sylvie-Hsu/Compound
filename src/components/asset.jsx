import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Card } from "antd";
import { Link } from "react-router-dom";

const tabListNoTitle = [
  {
    key: "supply",
    tab: "SUPPLY"
  },
  {
    key: "borrow",
    tab: "BORROW"
  }
];

const contentListNoTitle = {
  supply: <p>article content</p>,
  borrow: <p>app content</p>
};

class Asset extends Component {
  state = {
    key: "tab1",
    noTitleKey: "supply"
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    console.log(this.props.asset);
    return (
      <React.Fragment>
        <br />
        <Row>
          <Col span={1} />
          <Col span={6}>
            <Button type="default">
              <Link to="/">BACK TO OVERVIEW</Link>
            </Button>
          </Col>
          <Col span={8}>
            <Button type="primary">FAUCET</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={1} />
          <Col span={10}>
            <Card title="Card title" bordered={true} style={{ width: 300 }}>
              <h4>
                Balance
                <span style={{ float: "right" }}>
                  {this.props.asset.balance}
                </span>
              </h4>
              <h4>
                Supply Interest Rate
                <span style={{ float: "right" }}>
                  {this.props.asset.supplyInterestRate}%
                </span>
              </h4>
              <h4>
                Borrow Interest Rate
                <span style={{ float: "right" }}>
                  {this.props.asset.borrowInterestRate}%
                </span>
              </h4>
            </Card>
          </Col>
          <Col span={10}>
            <Card
              style={{ width: "100%" }}
              tabList={tabListNoTitle}
              activeTabKey={this.state.noTitleKey}
              onTabChange={key => {
                this.onTabChange(key, "noTitleKey");
              }}
            >
              {contentListNoTitle[this.state.noTitleKey]}
            </Card>
          </Col>
        </Row>

        <br />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.asset_id;
  return {
    asset: state.assets.find(asset => asset.id === id)
  };
};

export default connect(mapStateToProps)(Asset);
