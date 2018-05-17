import React from "react";
import {
  Button,
  Card,
  CardImage,
  Input
} from "mdbreact";

const styles = {
  error: {
    color: "#EE5B4F"
  },
  header: {
    backgroundColor: "#EE5B4F",
    padding: 20,
    margin: 0
  },
  h3: {
    color: "#ffffff"
  },
  athlete: {
    border: 2,
    borderColor: "#000000"
  },
  body:{
    padding: 20
  },
  success: {
    backgroundColor: "#5CB85C",
    color          : "#FFFFFF",
    width          : "10rem"    
  }
};

const LoginForm = ({
  handleFormSubmit,
  handleInputChange,
  errors,
  successMessage,
  user
}) => (
  <div className="row">
    <div className="offset-md-4 col-md-4">
      <Card>
        <form>
          <CardImage tag="div">
            <div className="header" style={styles.header}>
              <p className="h3 text-center justify-content" style={styles.h3}>
                SIGN IN
              </p>
            </div>
          </CardImage>
          <br />
          {successMessage && (
            <p className="success-message">{successMessage}</p>
          )}
          {errors.summary && (
            <p className="error-message text-center" style={styles.error}>
              {errors.summary}
            </p>
          )}
          <div  className="body" style={styles.body}>
          <div className="row">
            <div className="col text-center athlete">
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="athlete"
                    checked={user.role === "athlete"}
                    onChange={handleInputChange}
                  />
                  Athlete
                </label>
              </div>
              <div className="col text-center">
                <label>
                  <input
                    type="radio"
                    name="role"
                    value="coach"
                    checked={user.role === "coach"}
                    onChange={handleInputChange}
                  />
                  Coach
                </label>
              </div>
            </div>
          </div>
          <Input
            label="E-mail"
            icon="envelope"
            group
            type="email"
            name="email"
            onChange={handleInputChange}
            value={user.email}
          />
          <Input
            label="Password"
            icon="lock"
            group
            type="password"
            name="password"
            onChange={handleInputChange}
            value={user.password}
          />
          <div className="text-center">
          <p className="grey-text font-italic"><small>Password must meet the following requirements: <br /> 1. Minimum of 8 Characters <br /> 2. Contain a lowercase letter<br /> 3. Contain a uppercase letter<br /> 4. Contain a numeric character <br /> 5. Contain a special character</small></p>
          </div>
          <br />
          <div className="text-center">
            <Button 
              block 
              className="red lighten-1"
              type="submit" 
              name="action"
              value="login"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
            <Button
              block
              className="blue lighten-1"
              type="submit"
              name="action"
              value="signup"
              onClick={handleFormSubmit}
            >
              Register
            </Button>
          </div>
          </div>
        </form>
      </Card>
    </div>
  </div>
);

export default LoginForm;
