import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { connect } from "react-redux";
import { add } from "./actions";

let mapStateToProps = store => {
  return {
    count: store.length
  };
};

class App extends Component {
  loadMore() {
    this.props.dispatch(add(1));
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.loadMore.bind(this)}>Add</button>
        <p className="App-intro">Redux store: {count} </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
