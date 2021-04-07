import { makeStyles } from "@material-ui/core";
import React from "react";
 import Navbar from "../components/Navbar";
 import FormAddMeal from '../components/FormAddMeal'
import SlideMenu from "../components/SlideMenu";
const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },  
}));
const AddOrder = () => {
  const classes = useStyles();
  return (
    <>
      <SlideMenu />
      <div className={classes.appMain}>
        <Navbar />
        <FormAddMeal />
        </div>
    </>
  );
};

export default AddOrder;
