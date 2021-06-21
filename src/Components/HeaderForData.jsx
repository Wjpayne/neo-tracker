import React from "react";
import { Typography, Button, makeStyles, Grid } from "@material-ui/core";
import StarGazer from "../utils/Images/star-gazing.jpg";

const styles = makeStyles(() => ({
  container: {
    color: "black",
    width: "1200px",
    backgroundColor: "#d3d3d3",
    backgroundImage: "url(" + StarGazer + ")",
    height: "600px",
    backgroundSize: "cover",
    position: "relative",
    margin: 20
  },

  button: {
    color: "white",
  },

  text: {
    color: "white",
    fontSize: "40px"
  },

  textContainer: {
    position: "absolute",
    bottom: 30,
    left: 50
  
  },
}));

export const HeaderForData = (props) => {
  const classes = styles();

  const { startDate } = props;

  const newDate = new Date(startDate + "T00:00:00").toDateString();
  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>{newDate}</Typography>
        <Button className={classes.button}>Change Date</Button>
      </div>
    </div>
  );
};
