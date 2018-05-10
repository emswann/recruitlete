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

  componentWillUnmount() {
    this.setState({
      errors: {}
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const userObj = this.state.user;

    const APIfunction = 
      event.target.value === "login" ? API.login : API.signup;

    APIfunction(userObj).then(res => {
      Auth.authenticateUser(res.data.token, userObj.role);

      this.props.toggleAuthenticateStatus();

      this.props.history.push(
        userObj.role === "athlete" ? "/athlete" : "/coach");
    }).catch( ({ response }) => {
      const errors = response.data.errors ? response.data.errors : {};
      errors.summary = response.data.message;

      this.setState({
        errors
      });
    });   
  };


  handleInputChange = event => {
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
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          errors={this.state.errors}
          successMessage={this.state.successMessage}
          user={this.state.user}
        />
      </div>
    );
  };
}

export default Login;