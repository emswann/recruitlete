import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PropsRoute from "./components/PropsRoute";
import LoggedOutRoute from "./components/LoggedOutRoute";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Athlete from "./pages/Athlete";
import Coach from "./pages/Coach";
import Profile from "./pages/Profile";
import Auth from "./utils/Auth";

class App extends Component {

  state = {
    authenticated: false,
    role: ""
  };

  componentDidMount() {
    // check if user is logged in on refresh
    this.toggleAuthenticateStatus();
  };

  toggleAuthenticateStatus = () => {
    // check authenticated status and toggle state based on that
    this.setState({ authenticated: Auth.isUserAuthenticated() });
  };

  handleRoleChange = role => {
    this.setState({ role });
  }

  render() {
    return (
      <Router className="container">
        <div>
          <Nav 
            toggleAuthenticateStatus={this.toggleAuthenticateStatus} 
            role={this.state.role}
          />

          <PropsRoute exact path="/" component={Home} 
            toggleAuthenticateStatus={this.toggleAuthenticateStatus} 
          />

          <PrivateRoute path="/athlete" component={Athlete} />

          <PrivateRoute path="/coach" component={Coach} />

          <PrivateRoute path="/profile" component={Profile} 
            role={this.state.role} 
          />

          <LoggedOutRoute path="/login" component={Login} 
            toggleAuthenticateStatus={this.toggleAuthenticateStatus}
            handleRoleChange={this.handleRoleChange} 
          />

          <Route path="/logout" component={Logout}/>
        </div>
      </Router>
    )
  }
}

export default App;
