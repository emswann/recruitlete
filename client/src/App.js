import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";
import PropsRoute from "./components/PropsRoute";
import LoggedOutRoute from "./components/LoggedOutRoute";
import Nav from "./components/Nav";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Athlete from "./pages/Athlete";
import Coach from "./pages/Coach";
import Auth from "./utils/Auth";

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
      <Router className="container">
        <div>
          {/* <div className="top-bar">
            <div className="top-bar-left">
              <Link to="/">React App</Link>
            </div>
            {this.state.authenticated ? (
              <div className="top-bar-right">
                <Link to="/logout">Log out</Link>
              </div>
            ) : (
              <div className="top-bar-right">
                <Link to="/login">Log in</Link>
              </div>
            )}
          </div> */}

          <Nav />
          <PropsRoute exact path="/" component={Home} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />

          <PrivateRoute path="/athlete" component={Athlete} />

          <PrivateRoute path="/coach" component={Coach} />

          <LoggedOutRoute path="/login" component={Login} toggleAuthenticateStatus={this.toggleAuthenticateStatus} />

          <Route path="/logout" component={Logout}/>
        </div>
      </Router>
    )
  }
}

export default App;
