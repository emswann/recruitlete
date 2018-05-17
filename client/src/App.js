import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PropsRoute from "./components/PropsRoute";
import LoggedOutRoute from "./components/LoggedOutRoute";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import NoMatch from "./components/NoMatch"

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import User from "./pages/User";
import Profile from "./pages/Profile";
import ProfileDoc from "./pages/ProfileDoc";
import Auth from "./utils/Auth";

import "./App.css";

class App extends Component {

  state = {
    authenticated: false
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  };

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  };

  render() {
    return (
      <Router >
        <div id="application">
          <Nav toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
          <Switch>
            <PropsRoute path="/" exact component={Home} 
              toggleAuthenticateStatus={this.toggleAuthenticateStatus} 
            />
            <PrivateRoute path="/user" component={User} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/profile/doc" component={ProfileDoc} />
            <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />
            <Route path="/logout" component={Logout} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
