import React from 'react';
import { Button, Input } from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

const LoginForm = ({
  handleFormLogin,
  handleFormSignup,
  onChange,
  errors,
  successMessage,
  user,
  toggleAuthenticateStatus
}) => (
  <div className="row">
    <div className="offset-md-4 col-md-4">
      <SimpleCard>
        <form>
          <p className="h5 text-center justify-center mb-4">Sign in</p>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div className="radio">
            <label>
              <input type="radio" value="athlete" defaultChecked={true} />
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
            name="email"
            errortext={errors.email}
            onChange={onChange}
            value={user.email}
          />
          <Input
            label="Password"
            icon="lock"
            group type="password"
            name="password"
            onChange={onChange}
            errortext={errors.password}
            value={user.password}
          />
          <div className="text-center">
            <Button block color="danger"
              type="submit" 
              name="login" 
              onClick={handleFormLogin}>
              Login
            </Button>
            <Button block color="secondary"
              type="submit" 
              value="signup"
              onClick={handleFormSignup}>
              Register
            </Button>
          </div>
        </form>
      </SimpleCard>
    </div>
  </div>
);

export default LoginForm;
