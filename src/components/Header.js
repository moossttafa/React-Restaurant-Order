import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    backgroundColor: "#fff",
    "& .MuiCard-root": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      marginRight: 12,
    },
    "& .MuiSvgIcon-root": {
      display: "block",
      color: "#3c4b9e",
    },
    "& .MuiTypography-subtitle2": {
      opacity: 0.6,
    },
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Grid item>
          <Card>
            <PeopleAltIcon />
          </Card>
        </Grid>
        <Grid item>
          <Typography variant="h6">Restaurant Order</Typography>
          <Typography variant="subtitle2">
            Lorem ipsum dolor sit amet.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
