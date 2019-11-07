import React, { Component } from "react";
import mac from "../../images/mac.png";
import ListaTech from "./lista";

class WorkProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"container-fluid " + this.props.side + "Project"}>
        <div className="row">
          <div className="col-md-6 leftimgs">
            <img src={mac} className="img-fluid mac" alt="" />
            <img className="img-fluid gif" src={this.props.proIMG} alt="" />
          </div>
          <div className="col-md-6 infoProject">
            <h2>{this.props.title}</h2>
            <h4>Description:</h4>
            <p>{this.props.desc}</p>
            <a href={this.props.link} target="_blank">
              View Project
            </a>
            <div className="techUsed">
              <h4>Technologies Used :</h4>
              <ul>
                <ListaTech tech={this.props.tech} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkProjects;
