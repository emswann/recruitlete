import React, { Component } from "react";
import Auth from "../../utils/Auth";

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.deauthenticateUser = this.deauthenticateUser.bind(this);
    
    this.deauthenticateUser();
  }

  deauthenticateUser() {
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
