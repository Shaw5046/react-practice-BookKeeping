import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Panel({totalC, totalD}) {
  return (
    <Row>
      <Col md={4}>
        <Card
          bg="primary"
          text="white"
          className="mb-2"
        >
          <Card.Header>Credit</Card.Header>
          <Card.Body>
            <Card.Text>{totalC}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card
          bg="secondary"
          text="white"
          className="mb-2"
        >
          <Card.Header>Debit</Card.Header>
          <Card.Body>
            <Card.Text>{totalD}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card
          bg="danger"
          text="white"
          className="mb-2"
        >
          <Card.Header>Balance</Card.Header>
          <Card.Body>
            <Card.Text>{totalC-totalD}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
