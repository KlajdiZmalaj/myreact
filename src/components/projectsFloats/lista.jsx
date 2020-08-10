import React from "react";
const ListaTech = ({ tech }) =>
  tech && tech.split(",").map((el, index) => <li key={index}>{el}</li>);
export default ListaTech;
