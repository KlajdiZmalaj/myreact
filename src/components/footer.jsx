import React, { Component } from "react";
import imglogo from "../images/logokwhite.png";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer>
        <div className="mylogo">
          <img src={imglogo} alt="" />
        </div>
        {/* <div id="me"></div> */}
      </footer>
    );
  }
}

export default Footer;
