import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Asset from "./asset";
import DAI from "./DAI";

class Assets extends Component {
  state = {
    assets: [
      {
        id: "DAI  DAI",
        rate: 9.78,
        balance: "-"
      }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Router>
          <div>
            <Link to="/DAI">
              <Asset
                key={this.state.assets[0].id}
                asset={this.state.assets[0]}
              />
            </Link>
            <Route path="/DAI" component={ToDAI} />
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

function ToDAI() {
  return (
    <div>
      <DAI />
    </div>
  );
}

export default Assets;
