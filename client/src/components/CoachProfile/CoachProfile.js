import React, { Component } from "react";
import AthleteForm from "../../components/CoachForm";

export default class CoachProfile extends Component {
  constructor(props) {
    super(props)

    // During registration, the app creates empty objects for the profile 
    // related subschemas so do not have to work about undefined values. Can do 
    // straight assignement.
    this.state = {
      email: this.props.user.email,
      // contact email is not used for user (there because of contact.schema)
      phone: this.props.user.contact.phone,
      url: this.props.user.contact.url,
      firstName: this.props.user.name.first,
      middleName: this.props.user.name.middle,
      lastName: this.props.user.name.last,
      street1: this.props.user.address.street1,
      street2: this.props.user.address.street2, 
      city: this.props.user.address.city,
      state: this.props.user.address.state,
      zip: this.props.user.address.zip,
      position: this.props.user.position,
      accomplishments: this.props.user.accomplishments
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = user => {
    this.props.updateUser({
      email: user.email,
      contact: {
        email: user.email,
        phone: user.phone,
        url: user.url
      },
      name: {
        first: user.firstName,
        middle: user.middleName,
        last: user.lastName
      },
      address: {
        street1: user.street1,
        street2: user.street2,
        city: user.city,
        state: user.state,     
        zip: user.zip
      },
      position: user.position,
      accomplishments: user.accomplishments
    })
  };

  render() {
    return (
      <AthleteForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        user={this.state}
        updateStatus={this.props.updateStatus}
      />
    )
  };

};
