import React, { Component } from "react";
import Info from "./components/info";
import Page from "./components/page";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      isAvailableNet: false,
      isTestNet: false,
      accountID: "",
      accountBalance: "0",
      assets: [
        {
          id: "Basic Attention Token  BAT",
          rate: 0.44,
          balance: "-"
        },
        {
          id: "DAI  DAI",
          rate: 9.78,
          balance: "-"
        },
        {
          id: "Angur  REP",
          rate: 0.01,
          balance: "-"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <Info account={this.state} />
        <Page account={this.state} />
      </React.Fragment>
    );
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
          this.setState({
            isLogin: result.length === 0 ? false : true,
            accountID: account
          });
        } else console.error(error);
      }.bind(this)
    );

    //Get account balance
    if (this.state.isLogin === false) return;
    window.web3.eth.getBalance(
      this.state.accountID,
      function(error, result) {
        if (!error) {
          this.setState({
            accountBalance: JSON.stringify(result)
          });
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
                this.setState({ isAvailableNet: true });
                break;
              case "4":
                console.log("This is the Rinkeby test network.");
                this.setState({ isAvailableNet: true, isTestNet: true });
                break;
              case "2":
                console.log("This is the deprecated Morden test network.");
                this.setState({ isAvailableNet: false });
                break;
              case "3":
                console.log("This is the ropsten test network.");
                this.setState({ isAvailableNet: false });
                break;
              case "42":
                console.log("This is the Kovan test network.");
                this.setState({ isAvailableNet: false });
                break;
              default:
                console.log("This is an unknown network.");
                this.setState({ isAvailableNet: false });
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

export default App;
