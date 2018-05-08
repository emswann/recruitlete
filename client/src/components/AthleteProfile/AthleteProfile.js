import React from "react";
import { Col, Row, Container } from "../Grid";

const AthleteProfile = props => (
  // <div className="container">
  //   <p>We have a value from props: {props.athlete.email}</p>
  // </div>
  <Container fluid>
    <Row>
      <Col size="md=12">
        <p>Player Profile</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
        <p>{props.athlete.name.first}{props.athlete.name.middle} {props.athlete.name.last}</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-4">
        <p>Address: 
          {props.athlete.address.street1}
          {props.athlete.address.city}, {props.athlete.address.state}, {props.athlete.address.zip}
        </p>
        <p>Phone: {props.athlete.contact.phone}</p>
        <p>Email: {props.athlete.contact.email}</p>
        <br></br>
        <p>High School Contact Info:</p>
        <p>Coach Name: 
          {props.athlete.highSchool.coach.first}
          {props.athlete.highSchool.coach.middle}
          {props.athlete.highSchool.coach.last}
        </p>
        <p>Address: 
          {props.athlete.highSchool.address.street1}
          {props.athlete.highSchool.address.city}, {props.athlete.highSchool.address.state}, {props.athlete.highSchool.address.zip}
        </p>
        <p>Phone: {props.athlete.highSchool.contact.phone}</p>
        <p>Email: {props.athlete.highSchool.contact.email}</p>
      </Col>
      <Col size="md-4">
        <p>PROFILE PICTURE HERE</p>
        <p>Class of {props.athlete.gradYear}</p>
        <p>Positions: {props.athlete.positions}</p>
        <p>NCAA ID: {props.athlete.ncaaId}</p>
        <p>Club Name: {props.athlete.club.name}</p>
        <p>Club Team: {props.athlete.club.team}</p>
        <br></br>
        <p>Club Director: {props.athlete.club.director.first}{props.athlete.club.director.middle}{props.athlete.club.director.last}</p>
        <p>Club Coach: {props.athlete.club.coach.first}{props.athlete.club.coach.middle}{props.athlete.club.coach.last}</p>
        <p>Address: 
          {props.athlete.club.address.street1}
          {props.athlete.club.address.city}, {props.athlete.club.address.state}, {props.athlete.club.address.zip}
        </p>
        <p>Phone: {props.athlete.club.contact.phone}</p>
        <p>Email: {props.athlete.club.contact.email}</p>
        <p>Website: {props.athlete.club.contact.url}</p>
      </Col>
      <Col size="md-4">
        <p>DOB: {props.athlete.birthDate}</p>
        <p>Height: {props.athlete.statistics.height}</p>
        <p>Weight: {props.athlete.statistics.weight}</p>
        <p>Handed: {props.athlete.statistics.handed}</p>
        <p>Standing Reach: {props.athlete.statistics.standReach}</p>
        <p>Approach Touch: {props.athlete.statistics.approachTouch}</p>
        <p>Block Jump: {props.athlete.statistics.blockJump}</p>
        <br></br>
        <p>Weighted GPA: {props.athlete.scholastic.weightGPA}</p>
        <p>Unweighted GPA: {props.athlete.scholastic.unweightGPA}</p>
        <p>Class Rank: {props.athlete.scholastic.classRank} out of {props.athlete.scholastic.classSize}</p>
        <p>SAT: {props.athlete.scholastic.scoreSAT}</p>
        <p>ACT: {props.athlete.scholastic.scoreACT}</p>
        <p>Major: {props.athlete.scholastic.major}</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <p>Athletic Accomplishments: {props.athlete.athleteAccomps}</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <p>Academic/Community Accomplishments: {props.athlete.schoolAccomps}</p>
      </Col>
    </Row>
    <Row>
      <Col size="md-12">
      <p>Video Highlights: {props.athlete.videoLinks}</p>
      </Col>
    </Row>
  </Container>
);

export default AthleteProfile;
