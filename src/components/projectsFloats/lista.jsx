import React, { Component } from "react";
class ListaTech extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.tech
      .split(",")
      .map((el, index) => <li key={index}>{el}</li>);
  }
}

export default ListaTech;
