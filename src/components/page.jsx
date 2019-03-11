import React, { Component } from "react";
import { Menu, Button } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Balance from "./balance";
import "../App.css";

class Page extends Component {
  state = {
    current: "apps"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  getAccountID() {
    var id = this.props.account.accountID;
    return id;
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="apps">
                <Link to="/apps">APP</Link>
              </Menu.Item>
              <Menu.Item key="markets">
                <Link to="/markets">MARKETS</Link>
              </Menu.Item>
              <Menu.Item key="faqs" to="/faqs">
                <Link to="/faqs">FAQ</Link>
              </Menu.Item>
              <Button type="primary" size="small">
                {this.getAccountID()}
              </Button>
            </Menu>
            <Route path="/apps" component={Apps} />
            <Route path="/markets" component={Markets} />
            <Route path="/faqs" component={Faqs} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

function Apps() {
  return <Balance />;
}

function Markets() {
  return (
    <div>
      <h2>Markets</h2>
    </div>
  );
}

function Faqs() {
  return (
    <div>
      <h2>Faqs</h2>
    </div>
  );
}

export default Page;
