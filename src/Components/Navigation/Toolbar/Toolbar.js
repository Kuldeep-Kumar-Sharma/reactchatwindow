import React from "react";

import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.Logo}>
      <Logo />
      <h6 className={classes.title}>Tic Tac Toe</h6>
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
