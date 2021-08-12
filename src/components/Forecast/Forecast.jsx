import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Forecast.module.css";
import Card from "../ui/Card";
import CurrentDay from "../CurrentDay";
import CurrentDayDescription from "../CurrentDayDescription";
import UpcomingDaysForecast from "../UpcomingDaysForecast";

const Forecast = ({ forecast }) => (
  <Container className={styles.box}>
    <Row>
      <Col className="d-flex flex-column justify-content-between">
        <CurrentDayDescription forecast={forecast.currentDayDetails} />
        <UpcomingDaysForecast days={forecast.upcomingDays} />
      </Col>
    </Row>
    <Row>
      <Col>
        <Card>
          <CurrentDay {...forecast.currentDay} />
        </Card>
      </Col>
    </Row>
  </Container>
);

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetails: PropTypes.array,
    upcomingDays: PropTypes.array,
  }),
};

export default Forecast;
