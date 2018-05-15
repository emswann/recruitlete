import React from "react";
import { Panel } from "react-bootstrap";

const AthleteProfileDoc = props => (
  <Panel>
    <Panel.Heading className="text-center mb-3">
      <Panel.Title>
        <h4>
          {props.user.name.first} {props.user.name.middle} {props.user.name.last} #{props.user.jerseyNum}
        </h4>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
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
              <br />
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
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12 text-center">
              <img 
                src="http://via.placeholder.com/200x150" alt="profile" 
              />
              <h6>
                Class of {props.user.gradYear}
              </h6>
              <h6>
                {props.user.position}
              </h6>
              <h6>
                NCAA ID: {props.user.ncaaId}
              </h6>
              <h6>
                {props.user.club.name}
              </h6>
              <h6>
                {props.user.club.team}
              </h6>
              <br />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
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
      <div className="row">
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-12">
              <h6 style={{textDecorationLine: "underline"}}>
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
              <h6 style={{textDecorationLine: "underline"}}>
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
              <h6 style={{textDecorationLine: "underline"}}>
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
      <div className="row">
        <div className="col-md-12">
          <h6>
            Athletic Accomplishments:
          </h6>
          <h6>
            {props.user.athleteAccomps}
          </h6>
          <br />

          <h6>
            Academic/Community Achievements:
          </h6>
          <h6>
            {props.user.schoolAccomps}
          </h6>
          <br />

          <h6>
            Video Links:
          </h6>
          {props.user.videoLinks && 
          props.user.videoLinks.split(";").map((video, index) => (
            <h6 key={index}>
              {video}
            </h6>
          ))}
        </div>
      </div>
    </Panel.Body>
  </Panel>
);

export default AthleteProfileDoc;

