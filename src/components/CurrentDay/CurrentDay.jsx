import React from "react";
import PropTypes from "prop-types";
import locationIcon from "./assets/location-pin.png";
import styles from "./CurrentDay.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Card from "../ui/Card";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperature,
  weatherIcon,
  weatherDescription,
}) => (
  <div className="d-flex">
    <div className={styles.colour}>
      <div
        className={`${styles.cardInner} d-flex flex-column justify-content-center pt-3 pb-2 pl-2`}
      >
        <Card className="p-5">
          <Container className="p-3">
            <Row className="pb-3">
              <Col>
                <div>
                  <h2 className="font-weight-bold mb-2">{weekday}</h2>
                  <p className="mb-0 ">{date}</p>
                  <p className="f-flex align-items-baseline font-weight-lighter mb-1 ">
                    <img
                      src={locationIcon}
                      width="10"
                      height="15"
                      alt="location pin icon"
                    />
                    <span>{location}</span>
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <h2 className="font-weight-bold mb-1">
                    <span>{temperature}</span>*C
                  </h2>
                  <h5 className="font-weight-lighter">{weatherDescription}</h5>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  </div>
);

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  tempreture: PropTypes.string.isRequired,
  weatherIcon: PropTypes.number.isRequired,
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDay;
