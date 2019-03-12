import React, { Component } from "react";
import { Alert } from "antd";
import { connect } from "react-redux";
import "../App.css";
import {
  changeIsLogin,
  changeIsAvailableNet,
  changeIsTestNet,
  changeAccountID,
  changeAccountBalance
} from "../actions/accountActions";

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

  componentWillMount() {
    this.interval = setInterval(() => this.accountInterval(), 100);
    this.checkUserMode();
  }

  accountInterval() {
    //Get accountID
    window.web3.eth.getAccounts(
      function(error, result) {
        if (!error) {
          var account = JSON.stringify(result);
          account = account.substring(2, account.length - 2);
          this.props.changeIsLogin(result.length === 0 ? false : true);
          this.props.changeAccountID(account);
        } else console.error(error);
      }.bind(this)
    );

    //Get account balance
    if (this.props.account.isLogin === false) return;
    window.web3.eth.getBalance(
      this.props.account.accountID,
      function(error, result) {
        if (!error) {
          this.props.changeAccountBalance(JSON.stringify(result));
        } else console.error(error);
      }.bind(this)
    );
  }

  checkUserMode = () => {
    window.addEventListener(
      "load",
      function() {
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== "undefined") {
          // Use Mist/MetaMask's provider
          window.web3js = new window.Web3(window.web3.currentProvider);
          console.log(window.web3.version);
          //Checking the netId that currently used
          window.web3.version.getNetwork((err, netId) => {
            switch (netId) {
              case "1":
                console.log("This is mainnet");
                this.props.changeIsAvailableNet(true);
                break;
              case "4":
                console.log("This is the Rinkeby test network.");
                this.props.changeIsAvailableNet(true);
                this.props.changeIsTestNet(true);
                break;
              case "2":
                console.log("This is the deprecated Morden test network.");
                this.props.changeIsAvailableNet(false);
                break;
              case "3":
                console.log("This is the ropsten test network.");
                this.props.changeIsAvailableNet(false);
                break;
              case "42":
                console.log("This is the Kovan test network.");
                this.props.changeIsAvailableNet(false);
                break;
              default:
                console.log("This is an unknown network.");
                this.props.changeIsAvailableNet(false);
            }
          });
        } else {
          console.log("No web3? You should consider trying MetaMask!");
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          window.web3js = new window.Web3(
            new window.Web3.providers.HttpProvider("http://localhost:8545")
          );
        }
      }.bind(this)
    );
  };
}

const mapStateToProps = state => {
  return {
    account: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeIsLogin: para => {
      dispatch(changeIsLogin(para));
    },
    changeIsAvailableNet: para => {
      dispatch(changeIsAvailableNet(para));
    },
    changeIsTestNet: para => {
      dispatch(changeIsTestNet(para));
    },
    changeAccountID: para => {
      dispatch(changeAccountID(para));
    },
    changeAccountBalance: para => {
      dispatch(changeAccountBalance(para));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Info);
