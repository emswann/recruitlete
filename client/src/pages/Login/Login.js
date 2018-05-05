import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Login extends Component {
  // set the initial component state
  state = {
    errors: {},
    successMessage: "",
    user: {
      email   : "",
      password: "",
      role    : "athlete"
    }
  };
  
  componentDidMount(){
    const storedMessage = localStorage.getItem("successMessage");
    let successMessage = "";

    if (storedMessage) {
      successMessage = storedMessage;
      localStorage.removeItem("successMessage");
    }
    this.setState({ successMessage });
  }

  handleFormLogin = event => {
    event.preventDefault();

    const userObj = this.state.user;

    API.login(userObj).then(res => {
      Auth.authenticateUser(res.data.token);

      this.props.toggleAuthenticateStatus()

      this.props.history.push(
        userObj.role === "athlete" ? "/athlete" : "/coach");

      this.setState({
        errors: {}
      });
    }).catch(response => {
      const errors = response.data.errors ? response.data.errors : {};
      errors.summary = response.data.message;

      this.setState({
        errors
      });
    });   
  };

  handleFormSignup = event => {
    event.preventDefault();

    const userObj = this.state.user;

    API.signup(userObj).then(res => {
      Auth.authenticateUser(res.data.token);

      this.props.toggleAuthenticateStatus()

      this.props.history.push(
        userObj.role === "athlete" ? "/athlete" : "/coach");
        
      this.setState({
        errors: {}
      });
    }).catch(response => {
      const errors = response.data.errors ? response.data.errors : {};
      errors.summary = response.data.message;

      this.setState({
        errors
      });
    });   
  };

  changeUser = event => {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  };

  render() {
    return (
      <div className="container">
        <LoginForm
          handleFormLogin={this.handleFormLogin}
          handleFormSignup={this.handleFormSignup}
          onChange={this.changeUser}
          errors={this.state.errors}
          successMessage={this.state.successMessage}
          user={this.state.user}
        />
      </div>
    );
  };
}

export default Login;