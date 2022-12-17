import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Panel() {
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
            <Card.Text>111</Card.Text>
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
            <Card.Text>111</Card.Text>
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
            <Card.Text>111</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
