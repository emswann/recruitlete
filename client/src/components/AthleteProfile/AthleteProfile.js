import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard";
import API from "../../utils/API";
import AthleteForm from "../../components/AthleteForm";

class AthleteProfile extends Component {
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
        parentNames: this.state.parentNames,
        jerseyNum: this.state.jerseyNum,
        gradYear: this.state.gradYear,
        positions: this.state.positions,
        ncaaId: this.state.ncaaId,
        birthDate: this.state.birthDate,
        scholastic: {
          weightGPA: this.state.scholastic.weightGPA,
          unweightGPA: this.state.scholastic.unweightGPA,
          classRank: this.state.scholastic.classRank,
          classSize: this.state.scholastic.classSize,
          scoreSAT: this.state.scholastic.scoreSAT,
          scoreACT: this.state.scholastic.scoreACT,
          major: this.state.scholastic.major
        },
        club: {
          name: this.state.club.name,
          team: this.state.club.team,
          director: {
            name: {
              first: this.state.club.director.name.first,
              middle: this.state.club.director.name.middle,
              last: this.state.club.director.name.last
            },
          },
          coach: {
            name: {
              first: this.state.club.coach.name.first,
              middle: this.state.club.coach.name.middle,
              last: this.state.club.coach.name.last
            },
          },
          address: {
            street1: this.state.club.address.street1,
            street2: this.state.club.address.street2,
            city: this.state.club.address.city,
            state: this.state.club.address.state,
            zip: this.state.club.address.zip,
            zip4: this.state.club.address.zip4
          },
          contact: {
            email: this.state.club.contact.email,
            phone: this.state.club.contact.phone,
            url: this.state.club.contact.url
          },
        },
        highSchool: {
          name: this.state.highSchool.name,
          coach: {
            name: {
              first: this.state.highSchool.coach.name.first,
              middle: this.state.highSchool.coach.name.middle,
              last: this.state.highSchool.coach.name.last
            },
          },
          address: {
            street1: this.state.highSchool.address.street1,
            street2: this.state.highSchool.address.street2,
            city: this.state.highSchool.address.city,
            state: this.state.highSchool.address.state,
            zip: this.state.highSchool.address.zip,
            zip4: this.state.highSchool.address.zip4
          },
          contact: {
            email: this.state.highSchool.contact.email,
            phone: this.state.highSchool.contact.phone,
            url: this.state.highSchool.contact.url
          },
        },
        statistics: {
          height: this.state.statistics.height,
          weight: this.state.statistics.weight,
          handed: this.state.statistics.handed,
          standReach: this.state.statistics.standReach,
          approachTouch: this.state.statistics.approachTouch,
          blockJump: this.state.statistics.blockJump
        },
        athleteAccomps: this.state.athleteAccomps,
        schoolAccomps: this.state.schoolAccomps,
        videoLinks: this.state.videoLinks,
        profileImg: this.state.profileImg
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

// const AthleteProfile = props => (
//   // <div className="container">
//   //   <p>We have a value from props: {props.athlete.email}</p>
//   // </div>
//   <Container fluid>
//     <Row>
//       <Col size="md=12">
//         <p>Player Profile</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//         {props.athlete.name ? (
//         <p>{props.athlete.name.first}{props.athlete.name.middle} {props.athlete.name.last}</p>
//       ) : (
//       <p>No Results to Display</p>
//       )}
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-4">
//         {props.athlete.address ? ( 
//         <p>
//           Address: 
//           {props.athlete.address.street1}
//           {props.athlete.address.city}, {props.athlete.address.state}, {props.athlete.address.zip}
//         </p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//         {props.athlete.contact ? (
//         <p>
//           Phone: {props.athlete.contact.phone}
//           Email: {props.athlete.contact.email}
//         </p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//         <br></br>
//         <p>High School Contact Info:</p>
//         {props.athlete.highSchool ? (
//         <p>
//           Coach Name: 
//             {props.athlete.highSchool.coach.first}
//             {props.athlete.highSchool.coach.middle}
//             {props.athlete.highSchool.coach.last}
        

//           Address: 
//             {props.athlete.highSchool.address.street1}
//             {props.athlete.highSchool.address.city}, {props.athlete.highSchool.address.state}, {props.athlete.highSchool.address.zip}
        
//           Phone: {props.athlete.highSchool.contact.phone}
//           Email: {props.athlete.highSchool.contact.email}</p>
//         ) : (
//         <p>No Results to Display</p>
//         )}
//       </Col>
//       <Col size="md-4">
//         <p>PROFILE PICTURE HERE</p>
//         <p>Class of {props.athlete.gradYear}</p>
//         <p>Positions: {props.athlete.positions}</p>
//         <p>NCAA ID: {props.athlete.ncaaId}</p>
//         {props.athlete.club ? (
//         <p>
//           Club Name: {props.athlete.club.name}
//           Club Team: {props.athlete.club.team}
//         <br></br>
//           Club Director: {props.athlete.club.director.first}{props.athlete.club.director.middle}{props.athlete.club.director.last}
//           Club Coach: {props.athlete.club.coach.first}{props.athlete.club.coach.middle}{props.athlete.club.coach.last}
//           Address: 
//           {props.athlete.club.address.street1}
//           {props.athlete.club.address.city}, {props.athlete.club.address.state}, {props.athlete.club.address.zip}
//           Phone: {props.athlete.club.contact.phone}
//           Email: {props.athlete.club.contact.email}
//           Website: {props.athlete.club.contact.url}
//         </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//       </Col>
//       <Col size="md-4">
//         <p>DOB: {props.athlete.birthDate}</p>
//         {props.athlete.statistics ? (
//         <p>
//           Height: {props.athlete.statistics.height}
//           Weight: {props.athlete.statistics.weight}
//           Handed: {props.athlete.statistics.handed}
//           Standing Reach: {props.athlete.statistics.standReach}
//           Approach Touch: {props.athlete.statistics.approachTouch}
//           Block Jump: {props.athlete.statistics.blockJump}
//         </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//         <br></br>
//         {props.athlete.scholastic ? (
//         <p>
//           Weighted GPA: {props.athlete.scholastic.weightGPA}
//           Unweighted GPA: {props.athlete.scholastic.unweightGPA}
//           Class Rank: {props.athlete.scholastic.classRank} out of {props.athlete.scholastic.classSize}
//           SAT: {props.athlete.scholastic.scoreSAT}
//           ACT: {props.athlete.scholastic.scoreACT}
//           Major: {props.athlete.scholastic.major}
//           </p>
//         ) : (
//           <p>No Results to Display</p>
//         )}
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Athletic Accomplishments: {props.athlete.athleteAccomps}</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Academic/Community Accomplishments: {props.athlete.schoolAccomps}</p>
//       </Col>
//     </Row>
//     <Row>
//       <Col size="md-12">
//       <p>Video Highlights: {props.athlete.videoLinks}</p>
//       </Col>
//     </Row>
//   </Container>
// );

// export default AthleteProfile;
