import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  Input
} from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

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
          <br />
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
          Password must be 8 chars and contain lowercase letter, uppercase letter, numeric char, special char.
          </div>
          <br />
          <div className="text-center">
            <Button 
              block 
              color="#EE5B4F"
              type="submit" 
              name="action"
              value="login"
              onClick={handleFormSubmit}
            >
              Login
            </Button>
            <Button
              block
              color="secondary"
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
