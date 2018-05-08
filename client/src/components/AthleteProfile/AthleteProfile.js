import React from "react";
import { Col, Row, Container } from "../Grid";

const AthleteProfile = props => (
  // <div className="container">
  //   <h3>We have a value from props: {props.athlete.email}</h3>
  // </div>
  <Container fluid>
    <Row>
      <Col size="md=12">
        <h3>Player Profile</h3>
      </Col>
    </Row>
    <Row>{props.athlete.name.first}{props.athlete.name.middle}{props.athlete.name.last}</Row>
    <Row>
      <Col size="md-4">
        <h3>Address: 
          {props.athlete.address.street1}
          {props.athlete.address.city},{props.athlete.address.state},{props.athlete.address.zip}
        </h3>
        <h3>Phone: {props.athlete.contact.phone}</h3>
        <h3>Email: {props.athlete.contact.email}</h3>
        <br></br>
        <h3>High School Contact Info:</h3>
        <h3>Coach Name: 
          {props.athlete.highSchool.coach.first}
          {props.athlete.highSchool.coach.middle}
          {props.athlete.highSchool.coach.last}
        </h3>
        <h3>Address: 
          {props.athlete.highSchool.address.street1}
          {props.athlete.highSchool.address.city}, {props.athlete.highSchool.address.state}, {props.athlete.highSchool.address.zip}
        </h3>
        <h3>Phone: {props.athlete.highSchool.contact.phone}</h3>
        <h3>Email: {props.athlete.highSchool.contact.email}</h3>
      </Col>
      <Col size="md-4">
        <h3>PROFILE PICTURE HERE</h3>
        <h3>Class of {props.athlete.gradyear}</h3>
        <h3>Positions: {props.athlete.positions}</h3>
        <h3>NCAA ID: {props.athlete.ncaaId}</h3>
        <h3>Club Name: {props.athlete.club.name}</h3>
        <h3>Club Team: {props.athlete.club.team}</h3>
        <br></br>
        <h3>Club Director: {props.athlete.club.director.first}{props.athlete.club.director.middle}{props.athlete.club.director.last}</h3>
        <h3>Club Coach: {props.athlete.club.coach.first}{props.athlete.club.coach.middle}{props.athlete.club.coach.last}</h3>
        <h3>Address: 
          {props.athlete.club.address.street1}
          {props.athlete.club.address.city},{props.athlete.club.address.state},{props.athlete.club.address.zip}
        </h3>
        <h3>Phone: {props.athlete.club.contact.phone}</h3>
        <h3>Email: {props.athlete.club.contact.email}</h3>
        <h3>Website: {props.athlete.club.contact.url}</h3>
      </Col>
      <Col size="md-4">
        <h3>DOB: {props.athlete.birthDate}</h3>
        <h3>Height: {props.athlete.statistics.height}</h3>
        <h3>Weight: {props.athlete.statistics.weight}</h3>
        <h3>Handed: {props.athlete.statistics.handed}</h3>
        <h3>Standing Reach: {props.athlete.statistics.standReach}</h3>
        <h3>Approach Touch: {props.athlete.statistics.approachTouch}</h3>
        <h3>Block Jump: {props.athlete.statistics.blockJump}</h3>
        <br></br>
        <h3>Weighted GPA: {props.athlete.scholastic.weightGPA}</h3>
        <h3>Unweighted GPA:: {props.athlete.scholastic.unweightGPA}</h3>
        <h3>Class Rank: {props.athlete.scholastic.classRank} out of {props.athlete.scholastic.classSize}</h3>
        <h3>SAT: {props.athlete.scholastic.scoreSAT}</h3>
        <h3>ACT: {props.athlete.scholastic.scoreACT}</h3>
        <h3>Major: {props.athlete.scholastic.major}</h3>
      </Col>
    </Row>
  </Container>
);

export default AthleteProfile;
