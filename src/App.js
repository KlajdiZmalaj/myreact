import React, { Component } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./css/main.scss";
import Homepage from "./components/homepage.jsx";
import Work from "./components/work.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Data from "./components/data.jsx";
//
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDark: false };
  }
  setTheme = (isDark) => {
    this.setState({ isDark });
  };
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact>
            <Homepage isDark={this.state.isDark} setTheme={this.setTheme} />
          </Route>
          <Route path="/about">
            <About isDark={this.state.isDark} setTheme={this.setTheme} />
          </Route>
          <Route path="/work">
            <Work isDark={this.state.isDark} setTheme={this.setTheme} />
          </Route>
          <Route path="/contact">
            <Contact isDark={this.state.isDark} setTheme={this.setTheme} />
          </Route>
          <Route path="/data">
            <Data isDark={this.state.isDark} setTheme={this.setTheme} />
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
