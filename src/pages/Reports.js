import { makeStyles } from "@material-ui/core";
import React from "react";
 import Navbar from "../components/Navbar";
import SlideMenu from "../components/SlideMenu";
const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },  
}));
const Reports = () => {
  const classes = useStyles();
  return (
    <>
      <SlideMenu />
      <div className={classes.appMain}>
        <Navbar />
        </div>
    </>
  );
};

export default Reports;
