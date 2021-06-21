import {
  AppBar,
  makeStyles,
  Toolbar,
  Typography,
  CssBaseline,
} from "@material-ui/core";
import React, { useContext } from "react";
import DarkModeContext from "../utils/DarkModeContext/DarkModeContext";

const styles = makeStyles(() => ({
  appBarDark: {
    alignItems: "center",
    position: "static",
    maxWidth: "1200px",
    margin: "1em",
    backgroundColor: "black",
  },

  appBarLight: {
    alignItems: "center",
    position: "static",
    maxWidth: "1200px",
    margin: "1em",
    backgroundColor: "blue",
  },

  container: {
    justifyContent: "center",
    display: "flex",
  },
}));

export const NavBar = () => {
  const classes = styles();

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar className={darkMode ? classes.appBarLight : classes.appBarDark}>
        <Toolbar>
          <img
            alt="nasa logo"
            src="	https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg"
          />

          <Typography style={{ fontSize: "24px" }}>
            Near-Earth-Object Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
