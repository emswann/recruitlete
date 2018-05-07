import React from "react";

const AthleteProfile = props => (
  <div className="container">
    <h3>We have a value from props: {props.athlete.email}</h3>
  </div>
);

export default AthleteProfile;
