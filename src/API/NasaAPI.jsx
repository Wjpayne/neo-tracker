import React, { useEffect, useState } from "react";
import axios from "axios";
import { NeoData } from "../Components/NeoData";

export const NasaAPI = () => {
  const [data, setData] = useState([]);

  const date = new Date();

  const [startDate, setStartDate] = useState(
    date.getFullYear() +
      "-" +
      ("0" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + date.getDate()).slice(-2)
  );

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

  return (
    <div>
      <NeoData data={data} startDate={startDate} />
    </div>
  );
};
