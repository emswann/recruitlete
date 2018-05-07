import React, { Component } from "react";

class AthleteProfile extends Component {
  render() {
    return (
      <div className="container">
        <h3>We have a value from props: {this.props.athleteDoc.email}</h3>
      </div>
    );
  };
}

export default AthleteProfile;
