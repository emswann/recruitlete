import React from "react";
import { Col, Row, Container } from "../Grid";

const CoachProfile = props => (

<Container fluid>
    <Row>
      <Col size="md=12">
        <p>Coach Profile</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        {props.coach.name ? (
        <p>{props.coach.name.first}{props.coach.name.middle} {props.coach.name.last}</p>
        ) : (
          <p>No Results to Display</p>
        )}
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
      {props.coach.address ? (
        <p>Address: 
          {props.coach.address.street1}
          {props.coach.address.city}, {props.coach.address.state}, {props.coach.address.zip}
        </p>
      ) : (
        <p>No Results to Display</p>
      )}
      {props.coach.contact ? (
        <p>
          Phone: {props.coach.contact.phone}
          Email: {props.coach.contact.email}
        </p>
      ) : (
        <p>No Results to Display</p>
      )}
      </Col>
      <Col size="md-4">
        <p>PROFILE PICTURE HERE</p>
        <p>Position: {props.coach.position}</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <p>Accomplishments: {props.coach.accomplishments}</p>
      </Col>
    </Row>
  </Container>
);

export default CoachProfile;