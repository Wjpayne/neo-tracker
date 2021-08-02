import { React, useState, useEffect } from "react";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { HeaderForData } from "./HeaderForData";
import axios from "axios";

const styles = makeStyles((theme) => ({
  paper: {
    width: "1000px",
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
}));

export const NeoData = () => {
  const date = new Date();

  const initialDate =
    date.getFullYear() +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + date.getDate()).slice(-2);
  const [data, setData] = useState([]);

  const [startDate, setStartDate] = useState(initialDate);

  useEffect(() => {
    const fetchData = async () => {
      const neoDate = await axios.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${process.env.REACT_APP_NASA_KEY}`
      );

      setData((result) => [...result, neoDate.data]);
    };

    fetchData();
  }, [startDate]);

  console.log(data);

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
          <Grid item>
            <HeaderForData
              startDate={startDate}
              setStartDate={setStartDate}
              setData={setData}
            />
          </Grid>
          <div key={element.near_earth_objects}>
            {element.near_earth_objects[startDate].map((neo) => (
              <Paper key={neo.id} className={classes.paper}>
                <Grid item style={{ margin: "1em" }}>
                  <Typography key={neo.id}>NEO_Reference_ID: {neo.id}</Typography>
                  <Typography key={neo.name}>Name: {neo.name}</Typography>
                  <Typography key={neo.is_potentially_hazardous_asteroid}>
                    Potentially Hazardous:{" "}
                    {String(neo.is_potentially_hazardous_asteroid)}
                  </Typography>
                  <Typography>
                    Estimated Diameter Minimum:{" "}
                    {neo.estimated_diameter.feet.estimated_diameter_min} ft
                  </Typography>
                  <Typography>
                    Estimated Diameter Max:{" "}
                    {neo.estimated_diameter.feet.estimated_diameter_max} ft
                  </Typography>
                  <div>
                    {neo.close_approach_data.map((approach) => (
                      <div key={approach.epoch_date_close_approach}>
                        <Typography key={approach.epoch_date_close_approach}>
                          Approach Date: {approach.close_approach_date}
                        </Typography>
                      </div>
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
