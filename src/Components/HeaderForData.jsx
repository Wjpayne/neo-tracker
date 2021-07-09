import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import StarGazer from "../utils/Images/star-gazing.jpg";
import DateRangeIcon from '@material-ui/icons/DateRange'
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


const styles = makeStyles((theme) => ({
  container: {
    color: "black",
    width: "1000px",
    backgroundColor: "#d3d3d3",
    backgroundImage: "url(" + StarGazer + ")",
    height: "600px",
    backgroundSize: "cover",
    position: "relative",
    [theme.breakpoints.down('lg')]: {
      width: "1000px"
    },
    [theme.breakpoints.down('md')]: {
      width: "800px"
    },
    [theme.breakpoints.down('sm')]: {
      width: "600px"
    },
    [theme.breakpoints.down('xs')]: {
      width: "350px"
    },
    
  },

  button: {
    color: "white",
    textDecoration: "underline"
  
    
    
  },

  text: {
    color: "white",
    fontSize: "40px",
    [theme.breakpoints.down('xs')]: {
      fontSize: "30px"
    },
  },

  textContainer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    [theme.breakpoints.down('xs')]: {
      bottom: 10,
      left: 30,
    },

  


  
  
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
        <Button endIcon = {<DateRangeIcon/>} disableRipple className={classes.button}>Change Date</Button>

      </div>
      
    </div>
  );
};
