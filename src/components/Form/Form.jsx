import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Form.module.css";
import { Row, Container, Col } from "react-bootstrap";
import { MDBInput } from "mdbreact";

const Form = ({ submitSearch }) => {
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!location || location === "") return;
    submitSearch(location);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container fluid className=" d-flex justify-content-center ">
        <Row>
          <Col>
            <MDBInput
              aria-label="location"
              className="form-control mb-3 mt-3 w-100"
              placeholder="Search for location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              label="Material input"
            />

            <button
              type="submit"
              className="btn btn-outline-light w-100"
              onClick={handleSubmit}
            >
              SEARCH
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
};

Form.propTypes = {
  submitSearch: PropTypes.func.isRequired,
};

export default Form;
