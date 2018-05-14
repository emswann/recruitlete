import React, { Component } from "react";
import LoginForm from "../../components/LoginForm";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.checkSuccessMessage = this.checkSuccessMessage.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = {
      errors: {},
      successMessage: "",
      user: {
        email   : "",
        password: "",
        role    : "athlete"
      }
    };

    this.checkSuccessMessage();
  }
  
  checkSuccessMessage(){
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

      this.props.history.push(this.props.history.push("/user"));
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
    const user = {...this.state.user} // Shallow copy is okay here.
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
