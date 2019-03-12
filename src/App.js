import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Market from "./components/Market";
import Faq from "./components/Faq";
import Asset from "./components/Asset";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Info />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Market" component={Market} />
            <Route path="/Faq" component={Faq} />
            <Route path="/Asset/:asset_id" component={Asset} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
