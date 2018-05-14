import React, { Component } from "react";
import AthleteForm from "../../components/AthleteForm";

export default class AthleteProfile extends Component {
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
      position: this.props.user.position,
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
      parentNames: user.parentNames,
      jerseyNum: user.jerseyNum,
      gradYear: user.gradYear,
      position: user.position,
      ncaaId: user.ncaaId,
      birthDate: user.birthDate,
      scholastic: {
        weightGPA: user.weightGPA,
        unweightGPA: user.unweightGPA,
        classRank: user.classRank,
        classSize: user.classSize,
        scoreSAT: user.scoreSAT,
        scoreACT: user.scoreACT,
        major: user.major
      },
      club: {
        name: user.clubName,
        team: user.clubTeam,
        director: {
          first: user.clubDirFirst,
          middle: user.clubDirMiddle,
          last: user.clubDirLast
        },
        coach: {
          first: user.clubCoachFirst,
          middle: user.clubCoachMiddle,
          last: user.clubCoachLast
        },
        address: {
          street1: user.clubStreet1,
          street2: user.clubStreet2,
          city: user.clubCity,
          state: user.clubState,
          zip: user.clubZip
        },
        contact: {
          email: user.clubEmail,
          phone: user.clubPhone,
          url: user.clubUrl
        },
      },
      highSchool: {
        name: user.hsName,
        coach: {
          first: user.hsCoachFirst,
          middle: user.hsCoachMiddle,
          last: user.hsCoachLast
        },
        address: {
          street1: user.hsStreet1,
          street2: user.hsStreet2,
          city: user.hsCity,
          state: user.hsState,
          zip: user.hsZip         
        },
        contact: {
          email: user.hsEmail,
          phone: user.hsPhone,
          url: user.hsUrl          
        },
      },
      statistics: {
        height: user.height,
        weight: user.weight,
        handed: user.handed,
        standReach: user.standReach,
        approachTouch: user.approachTouch,
        blockJump: user.blockJump
      },
      athleteAccomps: user.athleteAccomps,
      schoolAccomps: user.schoolAccomps,
      videoLinks: user.videoLinks,
      profileImg: user.profileImg
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
