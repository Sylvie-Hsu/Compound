import React, { Component } from "react";
import { Alert } from "antd";
import "../App.css";

class Info extends Component {
  render() {
    //User doesn't Login account/User doesn't permit web3
    if (this.props.account.isLogin === false) {
      return (
        <Alert
          type="error"
          style={{ textAlign: "center" }}
          message="Please enable MetaMask or visit this page in a Web3 browser to interact with the Compound protocol"
        />
      );
    }
    //User choose unavailable network
    if (this.props.account.isAvailableNet === false) {
      return (
        <Alert
          type="error"
          style={{ textAlign: "center" }}
          message="Compound is currently only available on Mainnet or the Rinkeby Testnet"
        />
      );
    }
    //User choose test network and account balance equal to zero
    if (
      this.props.account.isTestNet === true &&
      this.props.account.accountBalance.length === 3
    ) {
      return (
        <React.Fragment>
          <Alert
            closable
            type="warning"
            style={{ textAlign: "center" }}
            message="Note: You are currently connected to the Rinkeby Testnet"
          />
          <Alert
            type="error"
            style={{ textAlign: "center" }}
            message="Your account does not have any Ether, which is required to interact with Compound"
          />
        </React.Fragment>
      );
    }
    //User choose test network and account balance not equal to zero
    if (this.props.account.isTestNet === true) {
      return (
        <Alert
          closable
          type="warning"
          style={{ textAlign: "center" }}
          message="Note: You are currently connected to the Rinkeby Testnet"
        />
      );
    }
    //User choose main network and account balance equal to zero
    if (this.props.account.accountBalance.length === 3) {
      return (
        <Alert
          type="error"
          style={{ textAlign: "center" }}
          message="Your account does not have any Ether, which is required to interact with Compound"
        />
      );
    } else {
      return null;
    }
  }
}

export default Info;
