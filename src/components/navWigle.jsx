import React, { Component } from "react";
class Wigle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wigle">
        <img src={this.props.wigIMG} alt="" className="wigleimg" />
        <span className="wigletxt">{this.props.wigTXT}</span>
      </div>
    );
  }
}

export default Wigle;
