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
    // if (this.state.user.name.first && this.state.user.name.last) {
      this.props.updateAthlete({
        email: "hello@gmail.com",
        // contact: {
          // email: this.state.user.contact.email,
          // phone: this.state.user.contact.phone,
          // url: this.state.user.contact.url
        // },
        name: {
          first: this.state.user.name.first,
          middle: this.state.user.name.middle,
          last: this.state.user.name.last
        },
        address: {
          street1: this.state.user.address.street1,
          street2: this.state.user.address.street2,
          city: this.state.user.address.city,
          // state: this.state.user.address.state,     
          // zip: this.state.user.address.zip,
          // zip4: this.state.user.address.zip4
        },
      //   parentNames: this.state.user.parentNames,
      //   jerseyNum: 23,
      //   gradYear: this.state.user.gradYear,
      //   positions: this.state.user.positions,
      //   ncaaId: this.state.user.ncaaId,
      //   birthDate: this.state.user.birthDate,
      //   scholastic: {
      //     weightGPA: this.state.user.scholastic.weightGPA,
      //     unweightGPA: this.state.user.scholastic.unweightGPA,
      //     classRank: this.state.user.scholastic.classRank,
      //     classSize: this.state.user.scholastic.classSize,
      //     scoreSAT: this.state.user.scholastic.scoreSAT,
      //     scoreACT: this.state.user.scholastic.scoreACT,
      //     major: this.state.user.scholastic.major
      //   },
      //   club: {
      //     name: this.state.user.club.name,
      //     team: this.state.user.club.team,
      //     director: {
      //       name: {
      //         first: this.state.user.club.director.first,
      //         middle: this.state.user.club.director.middle,
      //         last: this.state.user.club.director.last
      //       },
      //     },
      //     coach: {
      //       name: {
      //         first: this.state.user.club.coach.first,
      //         middle: this.state.user.club.coach.middle,
      //         last: this.state.user.club.coach.last
      //       },
      //     },
      //     address: {
      //       street1: this.state.user.club.address.street1,
      //       street2: this.state.user.club.address.street2,
      //       city: this.state.user.club.address.city,
      //       state: this.state.user.club.address.state,
      //       zip: this.state.user.club.address.zip,
      //       zip4: this.state.user.club.address.zip4
      //     },
      //     contact: {
      //       email: this.state.user.club.contact.email,
      //       phone: this.state.user.club.contact.phone,
      //       url: this.state.user.club.contact.url
      //     },
      //   },
      //   highSchool: {
      //     name: this.state.user.highSchool.name,
      //     coach: {
      //       name: {
      //         first: this.state.user.highSchool.coach.first,
      //         middle: this.state.user.highSchool.coach.middle,
      //         last: this.state.user.highSchool.coach.last
      //       },
      //     },
      //     address: {
      //       street1: this.state.user.highSchool.address.street1,
      //       street2: this.state.user.highSchool.address.street2,
      //       city: this.state.user.highSchool.address.city,
      //       state: this.state.user.highSchool.address.state,
      //       zip: this.state.user.highSchool.address.zip,
      //       zip4: this.state.user.highSchool.address.zip4
      //     },
      //     contact: {
      //       email: this.state.user.highSchool.contact.email,
      //       phone: this.state.user.highSchool.contact.phone,
      //       url: this.state.user.highSchool.contact.url
      //     },
      //   },
      //   statistics: {
      //     height: this.state.user.statistics.height,
      //     weight: this.state.user.statistics.weight,
      //     handed: this.state.user.statistics.handed,
      //     standReach: this.state.user.statistics.standReach,
      //     approachTouch: this.state.user.statistics.approachTouch,
      //     blockJump: this.state.user.statistics.blockJump
      //   },
      //   athleteAccomps: this.state.user.athleteAccomps,
      //   schoolAccomps: this.state.user.schoolAccomps,
      //   videoLinks: this.state.user.videoLinks,
      //   profileImg: this.state.user.profileImg
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
