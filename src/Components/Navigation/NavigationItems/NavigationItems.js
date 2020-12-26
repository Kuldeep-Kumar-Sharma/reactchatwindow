import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Tic Tac Toe
    </NavigationItem>
    <NavigationItem link="/players">Players</NavigationItem>
  </ul>
);

export default navigationItems;
