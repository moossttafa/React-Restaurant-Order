import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, IconButton, Badge } from "@material-ui/core"; 
import {Link} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
  title: {
    flexGrow: 1,
    color: "#333",
  },
  icon: {
    color: "#333",
  },
}));
const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link to="/" className="navlink">
               Add Meal
            </Link> 
          </Typography> 
          <Typography className={classes.title} variant="h6">
            <Link to="/addOrder" className="navlink">
               Add Order
            </Link> 
          </Typography> 
          <Typography className={classes.title} variant="h6">
            <Link to="/reports" className="navlink">
               Reports
            </Link> 
          </Typography> 
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
