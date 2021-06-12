import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const styles = makeStyles(() => ({
    appBar: {
        alignItems: 'center',
    }
}))

export const NavBar = () => {

    const classes = styles()
    
  return (
    <div>
      <AppBar className = {classes.appBar}>
        <Toolbar>
            <Typography>
                Near-Earth-Object Tracker
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};
