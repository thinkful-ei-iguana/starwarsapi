import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Context from "./Context";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  render() {
    const contextValue = {
      results: this.state.results
    };
    return (
      <Context.Provider value={contextValue}>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
