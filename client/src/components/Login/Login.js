import React from "react";
import PropTypes from "prop-types";
import { Button, Input } from "mdbreact";

class Login extends React.Component {
  render() {
    return (
      <form>
        <p className="h5 text-center justify-center mb-4">Sign in</p>
        <div className="radio">
          <label>
            <input type="radio" value="athlete" checked={true} />
            Athlete
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="coach" />
            Coach
          </label>
        </div>
        <br />
        <Input
          label="E-mail"
          icon="envelope"
          group type="email"
          validate error="wrong"
          success="right"
        />
        <Input
          label="Password"
          icon="lock"
          group type="password"
          validate
        />
        <div className="text-center">
          <Button block color="danger">
            Login
          </Button>
          <Button block color="secondary">
            Register
          </Button>
        </div>
      </form>
    );
  }
}

export default Login;
