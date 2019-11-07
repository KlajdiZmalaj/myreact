import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./css/main.scss";
import Homepage from "./components/homepage.jsx";
import Work from "./components/work.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";

// import $ from "jquery";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
