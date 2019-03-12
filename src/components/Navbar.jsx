import React, { Component } from "react";
import { Menu, Button } from "antd";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {
    current: "home"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };
  render() {
    const account =
      this.props.accountID.length !== 2 && this.props.accountID.length !== 0 ? (
        <Button style={{ textAlign: "left" }} type="primary" size="small">
          {this.props.accountID}
        </Button>
      ) : null;
    return (
      <React.Fragment>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="home">
            <NavLink to="/">APP</NavLink>
          </Menu.Item>
          <Menu.Item key="market">
            <NavLink to="/Market">MARKETS</NavLink>
          </Menu.Item>
          <Menu.Item key="faq">
            <NavLink to="/Faq">FAQ</NavLink>
          </Menu.Item>
          <Menu.Item disabled>{account}</Menu.Item>
        </Menu>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    accountID: state.accountID
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
