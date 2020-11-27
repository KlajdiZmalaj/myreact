import React from "react";
import mac from "../../images/mac.png";
import ListaTech from "./lista";
const WorkProjects = (props) =>
  props.proIMG && (
    <div className={"container-fluid " + props.side + "Project"}>
      <div className="row">
        <div className="col-md-6 leftimgs">
          <img src={mac} className="img-fluid mac" alt="" />
          <img
            className="img-fluid gif"
            src={props.proIMG}
            alt={props.proIMG}
          />
        </div>
        <div className="col-md-6 infoProject">
          <h2>{props.title}</h2>
          <h4>Description:</h4>
          <p>{props.desc}</p>
          <a href={props.link} target="_blank">
            View Project
          </a>
          <div className="techUsed">
            <h4>Technologies Used :</h4>
            <ul>
              <ListaTech tech={props.tech} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
export default WorkProjects;
