import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import Formsy from 'formsy-react';
import TextInput from '../TextInput';

const styles = {
  formsy: {
    display: "table",
    tableLayout: "fixed"
  },
  panelHeading : {
    backgroundColor: "#EE5B4F",
    color          : "#FFFFFF"
  },
  button: {
    backgroundColor: "#EE5B4F",
    color          : "#FFFFFF"
  }
}

export default class AthleteForm extends Component {
  constructor(props) {
    super(props);
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.submit = this.submit.bind(this);
    this.state = { canSubmit: false };
  }
 
  disableButton() {
    this.setState({ canSubmit: false });
  }
 
  enableButton() {
    this.setState({ canSubmit: true });
  }
 
  submit(model) {
    this.props.handleFormSubmit();
  }
 
  render() {
    return (
      <Panel>
        <Panel.Heading className="text-center" style={styles.panelHeading}>
          <Panel.Title>
            <h1 className="mb-4">Athlete Profile</h1>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <Formsy style={styles.formsy} onValidSubmit={this.props.handleFormSubmit} onValid={this.enableButton} onInvalid={this.disableButton}>
            <TextInput
              name="email"
              label="Email:"
              value={this.props.user.email}
            />
            <TextInput
              name="firstName"
              label="First Name:"
              value={this.props.user.firstName}
            />
            <TextInput
              name="middleName"
              label="Middle Name:"
              value={this.props.user.middleName}
            />
            <TextInput
              name="lastName"
              label="Last Name:"
              value={this.props.user.lastName}
            />
            
            <h6 className="font-weight-bold mt-3 mb-0">Contact Info:</h6>
            <TextInput
              name="phone"
              label="Phone:"
              value={this.props.user.phone}
            />
            <TextInput
              name="url"
              label="Website:"
              value={this.props.user.url}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Address:</h6>
            <TextInput
              name="street1"
              label="Street 1:"
              value={this.props.user.street1}
            />
            <TextInput
              name="street2"
              label="Street 2:"
              value={this.props.user.street2}
            />
            <TextInput
              name="city"
              label="City:"
              value={this.props.user.city}
            />
            <TextInput
              name="state"
              label="State:"
              value={this.props.user.state}
            />
            <TextInput
              name="zip"
              label="Zip:"
              value={this.props.user.zip}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Personal Info:</h6>
            <TextInput
              name="parentNames"
              label="Parent Names:"
              value={this.props.user.parentNames}
            />
            <TextInput
              name="birthDate"
              label="Birth Date:"
              value={this.props.user.birthDate}
            />
            <TextInput
              name="gradYear"
              label="Graduation Year:"
              value={this.props.user.gradYear}
            />
            <TextInput
              name="jerseyNum"
              label="Jersey Number:"
              value={this.props.user.jerseyNum}
            />
            <TextInput
              name="positions"
              label="Positions:"
              value={this.props.user.positions}
            />
            <TextInput
              name="ncaaId"
              label="NCAA ID:"
              value={this.props.user.ncaaId}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Academics:</h6>
            <TextInput
              name="weightGPA"
              label="Weighted GPA:"
              value={this.props.user.weightGPA}
            />
            <TextInput
              name="unweightGPA"
              label="Unweighted GPA:"
              value={this.props.user.unweightGPA}
            />
            <TextInput
              name="classRank"
              label="Class Rank:"
              value={this.props.user.classRank}
            />
            <TextInput
              name="classSize"
              label="Class Size:"
              value={this.props.user.classSize}
            />
            <TextInput
              name="scoreSAT"
              label="SAT Score:"
              value={this.props.user.scoreSAT}
            />
            <TextInput
              name="scoreACT"
              label="ACT Score:"
              value={this.props.user.scoreACT}
            />
            <TextInput
              name="major"
              label="Major:"
              value={this.props.user.major}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Club Info:</h6>
            <TextInput
              name="clubName"
              label="Name:"
              value={this.props.user.clubName}
            />
            <TextInput
              name="clubTeam"
              label="Club Team:"
              value={this.props.user.clubTeam}
            />
            <TextInput
              name="clubDirFirst"
              label="Director First Name:"
              value={this.props.user.clubDirFirst}
            />
            <TextInput
              name="clubDirMiddle"
              label="Director Middle Name:"
              value={this.props.user.clubDirMiddle}
            />
            <TextInput
              name="clubDirLast"
              label="Director Last Name:"
              value={this.props.user.clubDirLast}
            />
            <TextInput
              name="clubCoachFirst"
              label="Coach First Name:"
              value={this.props.user.clubCoachFirst}
            />
            <TextInput
              name="clubCoachMiddle"
              label="Coach Middle Name:"
              value={this.props.user.clubCoachMiddle}
            />
            <TextInput
              name="clubCoachLast"
              label="Coach Last Name:"
              value={this.props.user.clubCoachLast}
            />
            <TextInput
              name="clubStreet1"
              label="Street 1:"
              value={this.props.user.clubStreet1}
            />
            <TextInput
              name="clubStreet2"
              label="Street 2:"
              value={this.props.user.clubStreet2}
            />
            <TextInput
              name="clubCity"
              label="City:"
              value={this.props.user.clubCity}
            />
            <TextInput
              name="clubState"
              label="State:"
              value={this.props.user.clubState}
            />
            <TextInput
              name="clubZip"
              label="Zip:"
              value={this.props.user.clubZip}
            />
            <TextInput
              name="clubEmail"
              label="Email:"
              value={this.props.user.clubEmail}
            />
            <TextInput
              name="clubPhone"
              label="Phone:"
              value={this.props.user.clubPhone}
            />
            <TextInput
              name="clubUrl"
              label="Website:"
              value={this.props.user.clubUrl}
            />

            <h6 className="font-weight-bold mt-3 mb-0">High School Info:</h6>
            <TextInput
              name="hsName"
              label="Name:"
              value={this.props.user.hsName}
            />
            <TextInput
              name="hsCoachFirst"
              label="Coach First Name:"
              value={this.props.user.hsCoachFirst}
            />
            <TextInput
              name="hsCoachMiddle"
              label="Coach Middle Name:"
              value={this.props.user.hsCoachMiddle}
            />
            <TextInput
              name="hsCoachLast"
              label="Coach Last Name:"
              value={this.props.user.hsCoachLast}
            />
            <TextInput
              name="hsStreet1"
              label="Street 1:"
              value={this.props.user.hsStreet1}
            />
            <TextInput
              name="hsStreet2"
              label="Street 2:"
              value={this.props.user.hsStreet2}
            />
            <TextInput
              name="hsCity"
              label="City:"
              value={this.props.user.hsCity}
            />
            <TextInput
              name="hsState"
              label="State:"
              value={this.props.user.hsState}
            />
            <TextInput
              name="hsZip"
              label="Zip:"
              value={this.props.user.hsZip}
            />
            <TextInput
              name="hsEmail"
              label="Email:"
              value={this.props.user.hsEmail}
            />
            <TextInput
              name="hsPhone"
              label="Phone:"
              value={this.props.user.hsPhone}
            />
            <TextInput
              name="hsUrl"
              label="Website:"
              value={this.props.user.hsUrl}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Statistics:</h6>
            <TextInput
              name="height"
              label="Height:"
              value={this.props.user.height}
            />
            <TextInput
              name="weight"
              label="Weight:"
              value={this.props.user.weight}
            />
            <TextInput
              name="handed"
              label="Handed:"
              value={this.props.user.handed}
            />
            <TextInput
              name="standReach"
              label="Standing Reach:"
              value={this.props.user.standReach}
            />
            <TextInput
              name="approachTouch"
              label="Approach Touch:"
              value={this.props.user.approachTouch}
            />
            <TextInput
              name="blockJump"
              label="Block Jump:"
              value={this.props.user.blockJump}
            />

            <h6 className="font-weight-bold mt-3 mb-0">Additional:</h6>
            <TextInput
              name="athleteAccomps"
              label="Athletic Accomplishments:"
              value={this.props.user.athleteAccomps}
            />
            <TextInput
              name="schoolAccomps"
              label="Academic/Other Acomplishments:"
              value={this.props.user.schoolAccomps}
            />
            <TextInput
              name="videoLinks"
              label="You Tube Video Links:"
              value={this.props.user.videoLinks}
            />
            <TextInput
              name="profileImg"
              label="Profile Image:"
              value={this.props.user.profileImg}
            />
            <div className="text-center justify-center mt-3">
              <button style={styles.button} type="submit" disabled={!this.state.canSubmit}>
                <h6 className="font-weight-bold mt-1 mb-1">Submit</h6>
              </button>
            </div>
          </Formsy>
        </Panel.Body>
      </Panel>
    );
  }
}
