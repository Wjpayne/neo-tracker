import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";

const styles = makeStyles(() => ({
  container: {
    marginTop: "80px",
  },
}));

export const NeoData = (props) => {
  const { data, startDate } = props;

  const classes = styles();
  return (
    <div className={classes.container}>
      {data.map((element) => (
        <Grid
          key={element.near_earth_objects}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div key={element.near_earth_objects}>
            {element.near_earth_objects[startDate].map((neo) => (
              <Paper key={neo.id}>
                <Grid item style={{ margin: "1em" }}>
                  <div key={neo.id}>NEO_Reference_ID: {neo.id}</div>
                  <div key={neo.name}>Name: {neo.name}</div>
                  <div key={neo.is_potentially_hazardous_asteroid}>
                    Potentially Hazardous:{" "}
                    {String(neo.is_potentially_hazardous_asteroid)}
                  </div>
                  <div>
                    Estimated Diameter Minimum:{" "}
                    {neo.estimated_diameter.feet.estimated_diameter_min} ft
                  </div>
                  <div>
                    Estimated Diameter Max:{" "}
                    {neo.estimated_diameter.feet.estimated_diameter_max} ft
                  </div>
                  <div>
                    {neo.close_approach_data.map((approach) => (
                      <React.Fragment key={approach.epoch_date_close_approach}>
                        <div key={approach.epoch_date_close_approach}>
                          Approach Date: {approach.close_approach_date}
                        </div>
                      </React.Fragment>
                    ))}
                  </div>
                </Grid>
              </Paper>
            ))}
          </div>
        </Grid>
      ))}
    </div>
  );
};
