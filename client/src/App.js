import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Background from "../public/assets/images/backgroung"

import PrivateRoute from "./components/PrivateRoute";
import PropsRoute from "./components/PropsRoute";
import LoggedOutRoute from "./components/LoggedOutRoute";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import User from "./pages/User";
import Profile from "./pages/Profile";
import Auth from "./utils/Auth";

class App extends Component {

  state = {
    authenticated: false
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  };

  // backgroundImage: `url(${Background})`

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  };

  render() {
    var background = {backgroundSize : 'cover', url: ("../public/assets/images/background")};
    return (
      <Router className="container" style={{background}}>
        <div>
          <Nav toggleAuthenticateStatus={this.toggleAuthenticateStatus} />

          <PropsRoute exact path="/" component={Home} 
            toggleAuthenticateStatus={this.toggleAuthenticateStatus} 
          />

          <PrivateRoute path="/user" component={User} />

          <PrivateRoute path="/profile" component={Profile} />

          <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />

          <Route path="/logout" component={Logout} />

          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
