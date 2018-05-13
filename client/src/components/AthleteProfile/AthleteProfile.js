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
      parentNames: this.props.user.parentNames,
      jerseyNum: this.props.user.jerseyNum,
      gradYear: this.props.user.gradYear,
      positions: this.props.user.positions,
      ncaaId: this.props.user.ncaaId,
      birthDate: this.props.user.birthDate,
      weightGPA: this.props.user.scholastic.weightGPA,
      unweightGPA: this.props.user.scholastic.unweightGPA,
      classRank: this.props.user.scholastic.classRank,
      classSize: this.props.user.scholastic.classSize,
      scoreSAT: this.props.user.scholastic.scoreSAT,
      scoreACT: this.props.user.scholastic.scoreACT,
      major: this.props.user.scholastic.major || "", // Overwrite null that came about force creating statistics object when registering user. 
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
      hsEmail: this.props.user.highSchool.contact.email,
      hsPhone: this.props.user.highSchool.contact.phone,
      hsUrl: this.props.user.highSchool.contact.url,
      height: this.props.user.statistics.height || "", // Overwrite null that came about force creating statistics object when registering user.
      weight: this.props.user.statistics.weight,
      handed: this.props.user.statistics.handed,
      standReach: this.props.user.statistics.standReach,
      approachTouch: this.props.user.statistics.approachTouch,
      blockJump: this.props.user.statistics.blockJump,
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
    // event.preventDefault();
        console.log(this.state);
    // this.props.updateUser({
    //   email: this.state.email,
    //   contact: {
    //     email: this.state.email,
    //     phone: this.state.phone,
    //     url: this.state.url
    //   },
    //   name: {
    //     first: this.state.firstName,
    //     middle: this.state.middleName,
    //     last: this.state.lastName
    //   },
    //   address: {
    //     street1: this.state.street1,
    //     street2: this.state.street2,
    //     city: this.state.city,
    //     state: this.state.state,     
    //     zip: this.state.zip
    //   },
    //   parentNames: this.state.parentNames,
    //   jerseyNum: this.state.jerseyNum,
    //   gradYear: this.state.gradYear,
    //   positions: this.state.positions,
    //   ncaaId: this.state.ncaaId,
    //   birthDate: this.state.birthDate,
    //   scholastic: {
    //     weightGPA: this.state.weightGPA,
    //     unweightGPA: this.state.unweightGPA,
    //     classRank: this.state.classRank,
    //     classSize: this.state.classSize,
    //     scoreSAT: this.state.scoreSAT,
    //     scoreACT: this.state.scoreACT,
    //     major: this.state.major
    //   },
    //   club: {
    //     name: this.state.clubName,
    //     team: this.state.clubTeam,
    //     director: {
    //       name: {
    //         first: this.state.clubDirFirst,
    //         middle: this.state.clubDirMiddle,
    //         last: this.state.clubDirLast
    //       },
    //     },
    //     coach: {
    //       name: {
    //         first: this.state.clubCoachFirst,
    //         middle: this.state.clubCoachMiddle,
    //         last: this.state.clubCoachLast
    //       },
    //     },
    //     address: {
    //       street1: this.state.clubStreet1,
    //       street2: this.state.clubStreet2,
    //       city: this.state.clubCity,
    //       state: this.state.clubState,
    //       zip: this.state.clubZip
    //     },
    //     contact: {
    //       email: this.state.clubEmail,
    //       phone: this.state.clubPhone,
    //       url: this.state.clubUrl
    //     },
    //   },
    //   highSchool: {
    //     name: this.state.hsName,
    //     coach: {
    //       name: {
    //         first: this.state.hsCoachFirst,
    //         middle: this.state.hsCoachMiddle,
    //         last: this.state.hsCoachLast           },
    //     },
    //     address: {
    //       street1: this.state.hsStreet1,
    //       street2: this.state.hsStreet2,
    //       city: this.state.hsCity,
    //       state: this.state.hsState,
    //       zip: this.state.hsZip         
    //     },
    //     contact: {
    //       email: this.state.hsEmail,
    //       phone: this.state.hsPhone,
    //       url: this.state.hsUrl          },
    //   },
    //   statistics: {
    //     height: this.state.height,
    //     weight: this.state.weight,
    //     handed: this.state.handed,
    //     standReach: this.state.standReach,
    //     approachTouch: this.state.approachTouch,
    //     blockJump: this.state.blockJump
    //   },
    //   athleteAccomps: this.state.athleteAccomps,
    //   schoolAccomps: this.state.schoolAccomps,
    //   videoLinks: this.state.videoLinks,
    //   profileImg: this.state.profileImg
    // })
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