import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Panel } from "react-bootstrap";
import Formsy from "formsy-react";
import TextInput from "../TextInput";
import TextAreaInput from "../TextAreaInput"

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

export default class CoachForm extends Component {
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
        <Panel.Heading className="text-center mb-4" style={styles.panelHeading}>
          <Panel.Title>
            <h1 className="mb-3">Coach Profile</h1>
          </Panel.Title>
        </Panel.Heading>
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

            <h6 className="font-weight-bold mt-3 mb-0">Additional:</h6>
            <TextInput
              name="position"
              label="Position:"
              value={this.props.user.position}
            />
            <TextAreaInput
              name="accomplishments"
              label="Accomplishments:"
              value={this.props.user.accomplishments}
            />

            <div className="text-center justify-center mt-3">
              <button style={this.props.updateStatus ? styles.success : styles.button} type="submit" disabled={!this.state.canSubmit}>
                <h6 className="font-weight-bold m-1">Submit</h6>
              </button>
            </div>

            <div className="text-center justify-center mt-3 mb-3">
              <Link to="/profile/doc">
                <button style={styles.button} type="button">                
                  <h6 className="font-weight-bold m-1">Launch Profile</h6>
                </button>                
              </Link>
            </div>
          </Formsy>
        </Panel.Body>
      </Panel>
    );
  }
}
