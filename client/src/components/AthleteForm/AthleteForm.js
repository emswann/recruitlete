import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import Formsy from "formsy-react";
import TextInput from "../TextInput";
import TextAreaInput from "../TextAreaInput"
import FileInput from "../FileInput";
import ScrollIntoViewIfNeeded from "react-scroll-into-view-if-needed";

const styles = {
  formsy: {
    display: "table",
    tableLayout: "fixed",
    padding: 20
  },
  panelHeading : {
    backgroundColor: "#EE5B4F",
    color          : "#FFFFFF"
  },
  button: {
    backgroundColor: "#EE5B4F",
    color          : "#FFFFFF",
    width          : "10rem"
  },
  success: {
    backgroundColor: "#5CB85C",
    color          : "#FFFFFF",
    width          : "10rem"    
  },
  scroll: {
    backgroundColor: "#FFFFFF",
    color          : "#515D63",
    borderRadius   : "50%",
    border         : "2px solid #515D63",
    marginBottom   : ".5rem"
  }
}

export default class AthleteForm extends Component {
  constructor(props) {
    super(props);
    
    this.disableButton = this.disableButton.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleScrollToggle = this.handleScrollToggle.bind(this);
    this.state = { canSubmit: false, scrollActive: false };
  }
 
  disableButton = () => this.setState({ canSubmit: false });
 
  enableButton = () => this.setState({ canSubmit: true  });

  submit = model => {
    this.props.handleFormSubmit(model);
  }

  handleScrollToggle = () => {
    this.setState({ scrollActive: !this.state.scrollActive });
  }
 
  render() {
    return (
      <Panel>
        <ScrollIntoViewIfNeeded 
          active={!this.state.scrollActive}
          options={{
            block: "center",
            behavior: "smooth"
          }} 
        >
          <Panel.Heading className="text-center mb-4" style={styles.panelHeading}>
            <Panel.Title>
              <h1 className="mb-3">Athlete Profile</h1>
              <button style={styles.scroll} type="submit" onClick={this.handleScrollToggle}>
                <h6 className="font-weight-bold m-1">To Bottom</h6>
              </button>
            </Panel.Title>
          </Panel.Heading>
        </ScrollIntoViewIfNeeded>
        <ScrollIntoViewIfNeeded 
          active={this.state.scrollActive}
            options={{
              block: "end",
              behavior: "smooth"
            }} 
        >
          <Panel.Body>
            <Formsy style={styles.formsy} onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <TextInput
                name="email"
                label="Email:"
                readOnly="true"
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
                validations="isUrl"
                validationError="This is not a valid website"
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
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="jerseyNum"
                label="Jersey Number:"
                value={this.props.user.jerseyNum}
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="position"
                label="Position:"
                value={this.props.user.position}
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
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="unweightGPA"
                label="Unweighted GPA:"
                value={this.props.user.unweightGPA}
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="classRank"
                label="Class Rank:"
                value={this.props.user.classRank}
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="classSize"
                label="Class Size:"
                value={this.props.user.classSize}
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="scoreSAT"
                label="SAT Score:"
                value={this.props.user.scoreSAT}
                validations="isNumeric"
                validationError="This is must be a number"
              />
              <TextInput
                name="scoreACT"
                label="ACT Score:"
                value={this.props.user.scoreACT}
                validations="isNumeric"
                validationError="This is must be a number"
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
                validations="isEmail"
                validationError="This is not a valid email"
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
                validations="isUrl"
                validationError="This is not a valid website"
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
                validations="isEmail"
                validationError="This is not a valid email"
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
                validations="isUrl"
                validationError="This is not a valid website"
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
              <TextAreaInput
                name="athleteAccomps"
                label="Athletic Accomplishments:"
                value={this.props.user.athleteAccomps}
              />
              <TextAreaInput
                name="schoolAccomps"
                label="Academic/Other Acomplishments:"
                value={this.props.user.schoolAccomps}
              />
              <TextInput
                name="videoLinks"
                label="You Tube Video Links:"
                placeholder="Separate links with a ;"
                value={this.props.user.videoLinks}
                validations="isUrl"
                validationError="This is not a valid website"
              />
              <FileInput
                name="profileImg"
                label="Profile Image:"
                disabled="true"
                value={this.props.user.profileImg}
              />
              
              <div className="text-center justify-center mt-3">
                <button style={this.props.updateStatus ? styles.success : styles.button} type="submit" disabled={!this.state.canSubmit}>
                  <h6 className="font-weight-bold m-1">Submit</h6>
                </button>
              </div>

              <div className="text-center justify-center mt-3">
                <Link to="/profile/doc">
                  <button style={styles.button} type="button">                
                    <h6 className="font-weight-bold mt-1">Launch Profile</h6>
                  </button>                
                </Link>
              </div>
            </Formsy>
            <div className="text-center justify-center mt-3">
              <button style={styles.scroll} type="button" onClick={this.handleScrollToggle}>
                <h6 className="font-weight-bold m-1">To Top</h6>
              </button>
            </div>
            <div> {/* Doing this to get above the footer. */}
              <br /> <br />
            </div>
          </Panel.Body>
        </ScrollIntoViewIfNeeded>
      </Panel>
    );
  }
}
