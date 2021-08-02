import { React, useState } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import StarGazer from "../utils/Images/star-gazing.jpg";
import DateRangeIcon from "@material-ui/icons/DateRange";
import DateFnsUtils from "@date-io/date-fns";
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
    [theme.breakpoints.down("lg")]: {
      width: "1000px",
    },
    [theme.breakpoints.down("md")]: {
      width: "800px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "600px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "350px",
    },
  },

  button: {
    color: "white",
  },

  text: {
    color: "white",
    fontSize: "40px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },

  textContainer: {
    position: "absolute",
    bottom: 30,
    left: 50,
    [theme.breakpoints.down("xs")]: {
      bottom: 10,
      left: 30,
    },
  },

  datePicker: {
    backgroundColor: "white",
  },
}));

export const HeaderForData = (props) => {
  const classes = styles();

  const { startDate, setStartDate } = props;

  const [open, setOpen] = useState(false);

  const newDate = new Date(startDate + "T00:00:00").toDateString();

  const [newSelectedDate, setNewDate] = useState(new Date());

  return (
    <div className={classes.container}>
      <div className={classes.textContainer}>
        <Typography className={classes.text}>{newDate}</Typography>
        {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <form>
          <DatePicker
            className={classes.datePicker}
            value={newSelectedDate}
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            onChange={(newValue) => {
              setNewDate(newValue);
              setStartDate(newValue)
            }}
            format="yyyy-MM-dd"
          />
    
          </form>
        </MuiPickersUtilsProvider> */}
      </div>
    </div>
  );
};
