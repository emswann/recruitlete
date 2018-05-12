import React, { Component } from "react";
import AthleteForm from "../../components/AthleteForm";

class AthleteProfile extends Component {
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
      zip4: this.props.user.address.zip4,
      parentNames: this.props.user.parentNames,
      jerseyNum: this.props.user.jerseyNum,
      gradYear: this.props.user.gradYear,
      positions: this.props.user.positions,
      ncaaId: this.props.user.ncaaId,
      birthDate: this.props.user.birthDate,
      weightGPA: this.props.user.weightGPA,
      unweightGPA: this.props.user.unweightGPA,
      classRank: this.props.user.classRank,
      classSize: this.props.user.classSize,
      scoreSAT: this.props.user.scoreSAT,
      scoreACT: this.props.user.scoreACT,
      major: this.props.user.major, 
      clubName: this.props.user.club.name,
      clubTeam: this.props.user.club.team,
      clubDirFirst: this.props.user.club.director.first,
      clubDirMiddle: this.props.user.club.director.middle,
      clubDirLast: this.props.user.club.director.last,
      clubCoachFirst: this.props.user.club.coach.first,
      clubCoachMiddle: this.props.user.club.coach.middle,
      clubCoachLast: this.props.user.club.coach.last,
      clubStreet1: this.props.user.club.address.street1,
      clubStreet2: this.props.user.club.address.street2, 
      clubCity: this.props.user.club.address.city,
      clubState: this.props.user.club.address.state,
      clubZip: this.props.user.club.address.zip,
      clubZip4: this.props.user.club.address.zip4,
      clubEmail: this.props.user.club.contact.email,
      clubPhone: this.props.user.club.contact.phone,
      clubUrl: this.props.user.club.contact.url,
      hsName: this.props.user.highSchool.name,
      hsCoachFirst: this.props.user.highSchool.coach.first,
      hsCoachMiddle: this.props.user.highSchool.coach.middle,
      hsCoachLast: this.props.user.highSchool.coach.last,
      hsStreet1: this.props.user.highSchool.address.street1,
      hsStreet2: this.props.user.highSchool.address.street2, 
      hsCity: this.props.user.highSchool.address.city,
      hsState: this.props.user.highSchool.address.state,
      hsZip: this.props.user.highSchool.address.zip,
      hsZip4: this.props.user.highSchool.address.zip4,
      hsEmail: this.props.user.highSchool.contact.email,
      hsPhone: this.props.user.highSchool.contact.phone,
      hsUrl: this.props.user.highSchool.contact.url,
      height: this.props.user.height,
      weight: this.props.user.weight,
      handed: this.props.user.handed,
      standReach: this.props.user.standReach,
      approachTouch: this.props.user.approachTouch,
      blockJump: this.props.user.blockJump,
      athleteAccomps: this.props.user.athleteAccomps,
      schoolAccomps: this.props.user.schoolAccomps,
      videoLinks: this.props.user.videoLinks,
      profileImg: this.props.user.profileImg
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

  handleFormSubmit = event => {
    event.preventDefault();
      this.props.updateAthlete({
        email: this.state.user.email,
        contact: {
          email: this.state.user.email,
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

  render() {
    return (
      <AthleteForm
        handleFormSubmit={this.handleFormSubmit}
        handleInputChange={this.handleInputChange}
        user={this.state}
      />
    )
  };

};

export default AthleteProfile;