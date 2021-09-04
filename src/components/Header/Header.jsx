import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardHeader from "../../components/ui/CardHeader";

import styles from "./Header.module.css";

const Header = () => (
  <h1 className={styles.heading}>
    <span className={styles.light}>Weather</span> Forecast Api
    <div className="mt-5">
      <CardHeader>
        <Container>
          <Row>
            <Col>
              <div className={styles.light}>
                <h5 className="mt-2">Example </h5>
                <h5>
                  - Enter London in Location Prompt, Select Enter & wait for
                  loading
                </h5>
                <h5>- Inspect the page, go to console and view Api Data</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </CardHeader>
    </div>
  </h1>
);

export default Header;
