import { makeStyles } from "@material-ui/core";
import React from "react";
const usestyles = makeStyles((theme) => ({
  slideMenu: {
    position: "fixed",
    minHeight: "100vh",
    width: "300px",
    top: 0,
    left: 0,
    backgroundColor: "#1d223e",
  },
}));
const SlideMenu = () => {
  const classes = usestyles();
  return <div className={classes.slideMenu}></div>;
};

export default SlideMenu;
