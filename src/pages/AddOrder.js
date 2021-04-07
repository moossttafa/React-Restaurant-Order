import { makeStyles } from "@material-ui/core";
import React from "react";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SlideMenu from "../components/SlideMenu";
const useStyles = makeStyles((theme) => ({
  appMain: {
    paddingLeft: "300px",
    width: "100%",
  },  
}));
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <SlideMenu />
      <div className={classes.appMain}>
        <Navbar />
        <Header />
        <FormContainer />
      </div>
    </>
  );
};

export default Home;

