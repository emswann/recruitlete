import React from "react";
import { Col, Row, Container } from "../Grid";

// const AthleteProfile = props => (
//   // <div className="container">
//   //   <p>We have a value from props: {props.athlete.email}</p>
//   // </div>
//   <Container fluid>
//     <Row>
//       <Col size="md=12">
//         <p>Player Profile</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//         {props.athlete.name ? (
//         <p>{props.athlete.name.first}{props.athlete.name.middle} {props.athlete.name.last}</p>
//       ) : (
//       <p>No Results to Display</p>
//       )}
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-4">
//         {props.athlete.address ? ( 
//         <p>
//           Address: 
//           {props.athlete.address.street1}
//           {props.athlete.address.city}, {props.athlete.address.state}, {props.athlete.address.zip}
//         </p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//         {props.athlete.contact ? (
//         <p>
//           Phone: {props.athlete.contact.phone}
//           Email: {props.athlete.contact.email}
//         </p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//         <br></br>
//         <p>High School Contact Info:</p>
//         {props.athlete.highSchool ? (
//         <p>
//           Coach Name: 
//             {props.athlete.highSchool.coach.first}
//             {props.athlete.highSchool.coach.middle}
//             {props.athlete.highSchool.coach.last}
        

//           Address: 
//             {props.athlete.highSchool.address.street1}
//             {props.athlete.highSchool.address.city}, {props.athlete.highSchool.address.state}, {props.athlete.highSchool.address.zip}
        
//           Phone: {props.athlete.highSchool.contact.phone}
//           Email: {props.athlete.highSchool.contact.email}</p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//       </Col>
//       <Col size="md-4">
//         <p>PROFILE PICTURE HERE</p>
//         <p>Class of {props.athlete.gradYear}</p>
//         <p>Positions: {props.athlete.positions}</p>
//         <p>NCAA ID: {props.athlete.ncaaId}</p>
//         {props.athlete.club ? (
//         <p>
//           Club Name: {props.athlete.club.name}
//           Club Team: {props.athlete.club.team}
//         <br></br>
//           Club Director: {props.athlete.club.director.first}{props.athlete.club.director.middle}{props.athlete.club.director.last}
//           Club Coach: {props.athlete.club.coach.first}{props.athlete.club.coach.middle}{props.athlete.club.coach.last}
//           Address: 
//           {props.athlete.club.address.street1}
//           {props.athlete.club.address.city}, {props.athlete.club.address.state}, {props.athlete.club.address.zip}
//           Phone: {props.athlete.club.contact.phone}
//           Email: {props.athlete.club.contact.email}
//           Website: {props.athlete.club.contact.url}
//         </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//       </Col>
//       <Col size="md-4">
//         <p>DOB: {props.athlete.birthDate}</p>
//         {props.athlete.statistics ? (
//         <p>
//           Height: {props.athlete.statistics.height}
//           Weight: {props.athlete.statistics.weight}
//           Handed: {props.athlete.statistics.handed}
//           Standing Reach: {props.athlete.statistics.standReach}
//           Approach Touch: {props.athlete.statistics.approachTouch}
//           Block Jump: {props.athlete.statistics.blockJump}
//         </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//         <br></br>
//         {props.athlete.scholastic ? (
//         <p>
//           Weighted GPA: {props.athlete.scholastic.weightGPA}
//           Unweighted GPA: {props.athlete.scholastic.unweightGPA}
//           Class Rank: {props.athlete.scholastic.classRank} out of {props.athlete.scholastic.classSize}
//           SAT: {props.athlete.scholastic.scoreSAT}
//           ACT: {props.athlete.scholastic.scoreACT}
//           Major: {props.athlete.scholastic.major}
//           </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Athletic Accomplishments: {props.athlete.athleteAccomps}</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Academic/Community Accomplishments: {props.athlete.schoolAccomps}</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Video Highlights: {props.athlete.videoLinks}</p>
//       </Col>
//     </Row>
//   </Container>
// );

// export default AthleteProfile;
