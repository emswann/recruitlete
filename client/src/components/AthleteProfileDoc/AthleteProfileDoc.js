import React from "react";
import { Panel } from "react-bootstrap";

const styles = {
  panelHeading: {
    backgroundColor: "#EE5B4F",
    color: "#FFFFFF",
    padding: 20
  },

}

const AthleteProfileDoc = props => (

  <Panel>
    <Panel.Heading className="text-center mb-3" style={styles.panelHeading}>
      <Panel.Title>
        <h1>
          {props.user.name.first} {props.user.name.middle} {props.user.name.last} #{props.user.jerseyNum}
        </h1>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <br />
              <h6>
                Address: {props.user.address.street1}
              </h6>
              {props.user.address.street2 && (
                <h6>
                  {props.user.address.street2}
                </h6>
              )}
              {props.user.address.street2 && (
                <h6>
                  {props.user.address.city}, {props.user.address.state} {props.user.address.zip}
                </h6>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6>
                Phone: {props.user.contact.phone}
              </h6>
              <h6>
                Email: {props.user.email}
              </h6>
              <h6>
                Website: {props.user.contact.url}
              </h6>
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h6>
                Parents: {props.user.parentNames}
              </h6>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-4" style={{ border: "4px solid #EE5B4F", background: "#F5F5F5", paddingTop: 10 }}>
          <div className="row">
            <div className="col-md-12 text-center">
              <img
                src="https://via.placeholder.com/200x150" alt="profile"
              />
              <div style={{ fontWeight: "bold" }}>
                <h4>
                  Class of {props.user.gradYear}
                </h4>
                <h4>
                  {props.user.position}
                </h4>
                <h4>
                  NCAA ID: {props.user.ncaaId}
                </h4>
                <h4>
                  {props.user.club.name}
                </h4>
                <h4>
                  {props.user.club.team}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <br />
              <h6>
                DOB: {props.user.birthDate}
              </h6>
              <h6>
                Height: {props.user.statistics.height}
              </h6>
              <h6>
                Weight: {props.user.statistics.weight}
              </h6>
              <h6>
                Handed: {props.user.statistics.handed}
              </h6>
              <h6>
                Standing Reach: {props.user.statistics.standReach}
              </h6>
              <h6>
                Approach Touch: {props.user.statistics.approachTouch}
              </h6>
              <h6>
                Block Jump: {props.user.statistics.blockJump}
              </h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ textDecorationLine: "underline" }}>
                High School Contact Info
              </h6>
              <h6>
                Name: {props.user.highSchool.name}
              </h6>
              <h6>
                Coach: {props.user.highSchool.coach.first} {props.user.highSchool.coach.middle} {props.user.highSchool.coach.last}
              </h6>
              <h6>
                Address: {props.user.highSchool.address.street1}
              </h6>
              {props.user.highSchool.address.street2 && (
                <h6>
                  {props.user.highSchool.address.street2}
                </h6>
              )}
              {props.user.highSchool.address.city && (
                <h6>
                  {props.user.highSchool.address.city}, {props.user.highSchool.address.state} {props.user.highSchool.address.zip}
                </h6>
              )}
              <h6>
                Email: {props.user.highSchool.contact.email}
              </h6>
              <h6>
                Website: {props.user.highSchool.contact.url}
              </h6>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ textDecorationLine: "underline" }}>
                Club Contact Info
              </h6>
              <h6>
                Director: {props.user.club.director.first} {props.user.club.director.middle} {props.user.club.director.last}
              </h6>
              <h6>
                Coach: {props.user.club.coach.first} {props.user.club.coach.middle} {props.user.club.coach.last}
              </h6>
              <h6>
                Address: {props.user.club.address.street1}
              </h6>
              {props.user.club.address.street2 && (
                <h6>
                  {props.user.club.address.street2}
                </h6>
              )}
              {props.user.club.address.street2 && (
                <h6>
                  {props.user.club.address.city}, {props.user.club.address.state} {props.user.club.address.zip}
                </h6>
              )}
              <h6>
                Email: {props.user.club.contact.email}
              </h6>
              <h6>
                Website: {props.user.club.contact.url}
              </h6>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{ textDecorationLine: "underline" }}>
                Academic Info
              </h6>
              <h6>
                W-GPA: {props.user.scholastic.weightGPA}
              </h6>
              <h6>
                UW-GPA: {props.user.scholastic.unweightGPA}
              </h6>
              <h6>
                Class Rank: {props.user.scholastic.classRank} of {props.user.scholastic.classSize}
              </h6>
              <h6>
                SAT: {props.user.scholastic.scoreSAT}
              </h6>
              <h6>
                ACT: {props.user.scholastic.scoreACT}
              </h6>
              <h6>
                Major: {props.user.scholastic.major}
              </h6>
              <br />
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingLeft: 40, paddingRight: 40 }}>
        <div className="col-md-12">
          <br />
          <h6 style={{ textDecorationLine: "underline" }}>
            Athletic Accomplishments:
          </h6>
          <h6>
            {props.user.athleteAccomps}
          </h6>
          <br />

          <h6 style={{ textDecorationLine: "underline" }}>
            Academic/Community Achievements:
          </h6>
          <h6>
            {props.user.schoolAccomps}
          </h6>
          <br />

          <h6 style={{ textDecorationLine: "underline" }}>
            Video Links:
          </h6>
          {props.user.videoLinks &&
            props.user.videoLinks.split(";").map((video, index) => (
              <h6 key={index}>
                {video}
              </h6>
            ))}
          <br />
        </div>
      </div>
    </Panel.Body>
  </Panel>
);

export default AthleteProfileDoc;

