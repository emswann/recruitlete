import React, { Component } from "react";

class CoachProfile extends Component {
  render() {
    return (
      <div className="container">
        <h3>We have a value from props: {this.props.coachDoc.email}</h3>
      </div>
    );
  };
}

export default CoachProfile;
