import React from "react";

const CoachProfile = props => (
  <div className="container">
    <h3>We have a value from props: {props.coach.email}</h3>
  </div>
);

export default CoachProfile;