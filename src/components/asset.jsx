import React, { Component } from "react";
import { connect } from "react-redux";

class Asset extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.asset_id;
  return {
    asset: state.assets.find(asset => asset.id === id)
  };
};

export default connect()(Asset);
