import React from "react";
import classes from "./Logo.module.css";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    X/O
  </div>
);

export default logo;
