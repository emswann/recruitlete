import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard";
import API from "../../utils/API";
import CoachForm from "../../components/CoachForm";

class CoachProfile extends Component {
  state = {
    user: {
      email: "",
      contact: {
        email: "",
        phone: "",
        url: ""
      },
      name: {
        first: "",
        middle: "",
        last: ""
      },
      address: {
        street1: "",
        street2: "",
        city: "",
        state: "",
        zip: "",
        zip4: ""
      },
      position: "",
      accomplishments: "",
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.user.name.first && this.state.user.name.last) {
      API.updateAthlete({
        email: this.state.email,
        contact: {
          email: this.state.contact.email,
          phone: this.state.contact.phone,
          url: this.state.contact.url
        },
        name: {
          first: this.state.name.first,
          middle: this.state.name.middle,
          last: this.state.name.last
        },
        address: {
          street1: this.state.address.street1,
          street2: this.state.address.street2,
          city: this.state.address.city,
          state: this.state.address.state,
          zip: this.state.address.zip,
          zip4: this.state.address.zip4
        },
        position: this.state.position,
        accomplishments: this.state.accomplishments,
      })
        .then(res => this.loadStateData())
        .catch(err => console.log(err));
    }
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
        <div>
            <p>This is the coach page!</p>
            <SimpleCard>
              <CoachForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                user={this.state.user}
              />
          </SimpleCard>
        </div>
    )
  };

};

export default CoachProfile;