import React, { Component } from "react";
import Auth from "../../utils/Auth";

class Logout extends Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    // change the current URL to / after logout
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Logout;
