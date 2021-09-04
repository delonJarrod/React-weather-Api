import { useState } from "react";
import axios from "axios";
import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getCurrentDayDetailedForecast from "../helpers/getCurrentDayDetailedForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";

const UseForecast = () => {
  const base_url = "https://www.metaweather.com/api/location";
  const cross_domain = "https://the-ultimate-api-challenge.herokuapp.com";
  const request_url = `${cross_domain}/${base_url}`;

  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setforecast] = useState(null);
  const [data, setData] = useState(null);

  //get the WeoID
  const getWoeId = async (location) => {
    const { data } = await axios(`${request_url}/search`, {
      mode: "no-cors", // 'cors' by default
      params: { query: location },
    });

    if (!data || data.length === 0) {
      setError("Location cannot be found");
      setLoading(false);
      return;
    }
    return data[0];
  };

  //Get the forecastData
  const getForecastData = async (woeid) => {
    const { data } = await axios(`${request_url}/${woeid}`);
    if (!data || data.length === 0) {
      setError("Something Went Wrong");
      setLoading(false);
      return;
    }
    return data;
  };

  //get all forecastdata
  const getAllForecastData = (data) => {
    const currentDay = getCurrentDayForecast(
      data.consolidated_weather[0],
      data.title
    );
    const currentDayDetails = getCurrentDayDetailedForecast(
      data.consolidated_weather[0]
    );
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather);

    setforecast({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  };

  const submitResource = async (location) => {
    setLoading(true);
    setError(false);
    const response = await getWoeId(location);
    if (!response || response.length === 0) return;

    const data = await getForecastData(response.woeid);
    if (!data) return;
    getAllForecastData(data);
    setData({ data });
  };

  return { isError, isLoading, forecast, submitResource, data };
};

export default UseForecast;
