import React, { Component } from "react";
import loader from "../images/loader.gif";
import $ from "jquery";
class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="kz7Loader">
        <img src={loader} alt="" className="loader" />
      </div>
    );
  }
}

export default Loader;
