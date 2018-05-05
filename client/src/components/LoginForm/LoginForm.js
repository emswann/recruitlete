import React from 'react';
import { Button, Input } from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

const LoginForm = ({
  handleFormSubmit,
  handleInputChange,
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
              <input type="radio" 
                name="role"
                value="athlete" 
                checked={user.role === "athlete"}
                onChange={handleInputChange}/>
                Athlete
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio" 
                name="role"
                value="coach"
                checked={user.role === "coach"} 
                onChange={handleInputChange}/>
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
            onChange={handleInputChange}
            value={user.email}
          />
          <Input
            label="Password"
            icon="lock"
            group type="password"
            name="password"
            onChange={handleInputChange}
            errortext={errors.password}
            value={user.password}
          />
          <div className="text-center">
            <Button block color="danger"
              type="submit" 
              name="action"
              value="login" 
              onClick={handleFormSubmit}>
              Login
            </Button>
            <Button block color="secondary"
              type="submit" 
              name="action"
              value="signup"
              onClick={handleFormSubmit}>
              Register
            </Button>
          </div>
        </form>
      </SimpleCard>
    </div>
  </div>
);

export default LoginForm;
