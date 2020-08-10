import React from "react";
const Wigle = (props) => (
  <div className="wigle">
    <img src={props.wigIMG} alt="" className="wigleimg" />
    <span className="wigletxt">{props.wigTXT}</span>
  </div>
);

export default Wigle;
