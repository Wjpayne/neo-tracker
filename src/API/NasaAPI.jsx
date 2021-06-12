import React, { useEffect, useState } from "react";
import axios from "axios";
import { NeoData } from "../Components/NeoData";

export const NasaAPI = () => {
  const [data, setData] = useState([]);

  const startDate = "2021-05-21";

  const fetchData = async () => {
    const neoDate = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${startDate}&api_key=${process.env.REACT_APP_NASA_KEY}`
    );

    setData((result) => [...result, neoDate.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <NeoData data={data} startDate={startDate} />
    </div>
  );
};
