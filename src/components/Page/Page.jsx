import React, { Fragment } from "react";
import useForecast from "../../hooks/useForecast";
import Header from "../Header";
import classes from "./Page.module.css";
import Form from "../Form";
import Error from "../Error";
import Loader from "../Loader";
import Forecast from "../Forecast";
import Chart from "../Chart";

const Page = () => {
  const { isError, isLoading, forecast, submitResource, data } = useForecast();

  function onSubmit(value) {
    submitResource(value);
  }

  return (
    <div className="pb-5">
      <Fragment>
        <Header />
        {!forecast && (
          <div className={classes.box}>
            {!isLoading && <Form submitSearch={onSubmit} />}

            {isError && <Error message={isError} />}
            {isLoading && <Loader />}
          </div>
        )}
        {forecast && <Forecast forecast={forecast} />}
      </Fragment>
      <Chart data={data} />
    </div>
  );
};

export default Page;
