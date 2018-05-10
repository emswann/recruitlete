import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard";
import API from "../../utils/API";
import AthleteForm from "../../components/AthleteForm";
import { Button } from "mdbreact";

class AthleteProfile extends Component {
  state = {
    user: {
      email: this.props.athlete.email,
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
      parentNames: "",
      jerseyNum: "",
      gradYear: "",
      positions: "",
      ncaaId: "",
      birthDate: Date,
      scholastic: {
        weightGPA: "",
        unweightGPA: "",
        classRank: "",
        classSize: "",
        scoreSAT: "",
        scoreACT: "",
        major: ""
      },
      club: {
        name: "",
        team: "",
        director: {
          first: "",
          middle: "",
          last: ""
        },
        coach: {
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
        contact: {
          email: "",
          phone: "",
          url: ""
        },
      },
      highSchool: {
        name: "",
        coach: {
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
        contact: {
          email: "",
          phone: "",
          url: ""
        },
      },
      statistics: {
        height: "",
        weight: "",
        handed: "",
        standReach: "",
        approachTouch: "",
        blockJump: ""
      },
      athleteAccomps: "",
      schoolAccomps: "",
      videoLinks: "",
      profileImg: "",
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
      this.props.updateAthlete({
        email: "hello@gmail.com",
        contact: {
          email: this.state.user.contact.email,
          phone: this.state.user.contact.phone,
          url: this.state.user.contact.url
        },
        name: {
          first: this.state.user.name.first,
          middle: this.state.user.name.middle,
          last: this.state.user.name.last
        },
        address: {
          street1: this.state.user.address.street1,
          street2: this.state.user.address.street2,
          city: this.state.user.address.city,
          state: this.state.user.address.state,     
          zip: this.state.user.address.zip,
          zip4: this.state.user.address.zip4
        },
        parentNames: this.state.user.parentNames,
        jerseyNum: 23,
        gradYear: this.state.user.gradYear,
        positions: this.state.user.positions,
        ncaaId: this.state.user.ncaaId,
        birthDate: this.state.user.birthDate,
        scholastic: {
          weightGPA: this.state.user.scholastic.weightGPA,
          unweightGPA: this.state.user.scholastic.unweightGPA,
          classRank: this.state.user.scholastic.classRank,
          classSize: this.state.user.scholastic.classSize,
          scoreSAT: this.state.user.scholastic.scoreSAT,
          scoreACT: this.state.user.scholastic.scoreACT,
          major: this.state.user.scholastic.major
        },
        club: {
          name: this.state.user.club.name,
          team: this.state.user.club.team,
          director: {
            name: {
              first: this.state.user.club.director.first,
              middle: this.state.user.club.director.middle,
              last: this.state.user.club.director.last
            },
          },
          coach: {
            name: {
              first: this.state.user.club.coach.first,
              middle: this.state.user.club.coach.middle,
              last: this.state.user.club.coach.last
            },
          },
          address: {
            street1: this.state.user.club.address.street1,
            street2: this.state.user.club.address.street2,
            city: this.state.user.club.address.city,
            state: this.state.user.club.address.state,
            zip: this.state.user.club.address.zip,
            zip4: this.state.user.club.address.zip4
          },
          contact: {
            email: this.state.user.club.contact.email,
            phone: this.state.user.club.contact.phone,
            url: this.state.user.club.contact.url
          },
        },
        highSchool: {
          name: this.state.user.highSchool.name,
          coach: {
            name: {
              first: this.state.user.highSchool.coach.first,
              middle: this.state.user.highSchool.coach.middle,
              last: this.state.user.highSchool.coach.last
            },
          },
          address: {
            street1: this.state.user.highSchool.address.street1,
            street2: this.state.user.highSchool.address.street2,
            city: this.state.user.highSchool.address.city,
            state: this.state.user.highSchool.address.state,
            zip: this.state.user.highSchool.address.zip,
            zip4: this.state.user.highSchool.address.zip4
          },
          contact: {
            email: this.state.user.highSchool.contact.email,
            phone: this.state.user.highSchool.contact.phone,
            url: this.state.user.highSchool.contact.url
          },
        },
        statistics: {
          height: this.state.user.statistics.height,
          weight: this.state.user.statistics.weight,
          handed: this.state.user.statistics.handed,
          standReach: this.state.user.statistics.standReach,
          approachTouch: this.state.user.statistics.approachTouch,
          blockJump: this.state.user.statistics.blockJump
        },
        athleteAccomps: this.state.user.athleteAccomps,
        schoolAccomps: this.state.user.schoolAccomps,
        videoLinks: this.state.user.videoLinks,
        profileImg: this.state.user.profileImg
      })

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
            <p>This is the athlete page!</p>
            <SimpleCard>
              <AthleteForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                user={this.state.user}
              />
          </SimpleCard>
        </div>
    )
  };

};

export default AthleteProfile;