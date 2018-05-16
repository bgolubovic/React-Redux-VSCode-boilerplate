import React, { Component } from "react";
import logo from "./logo.svg";
import "./style.css";

import { connect } from "react-redux";
import { add, reset } from "../../actions";

let mapStateToProps = store => {
  return {
    count: store.length
  };
};

class Home extends Component {
  loadMore() {
    this.props.dispatch(add(1));
  }

  resetStore() {
    this.props.dispatch(reset());
  }

  render() {
    const count = this.props.count;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React Redux VSCode boilerplate
          </h1>
          <h2 className="App-heading">Created using create-react-app</h2>
          <h4 className="App-heading-small">Creted by Bojan Golubovic</h4>
        </header>
        <button className="App-button" onClick={this.loadMore.bind(this)}>
          Add
        </button>
        <button className="App-button" onClick={this.resetStore.bind(this)}>
          Reset
        </button>
        <p className="App-intro">Redux store: {count} </p>
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Home);
