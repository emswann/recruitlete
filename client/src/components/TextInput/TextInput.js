import React, { Component } from "react";
import { withFormsy } from 'formsy-react';

const styles = {
  label: {
    display: "table-cell",
    width: "20%"
  },
  input: {
    display: "table-cell",
    width: "80%"
  },
  div: {
    display: "table-row"
  },
  readOnly: {
    display: "table-cell",
    width: "80%",
    backgroundColor: "lightgray"
  },
  error: {
    color: "#EE5B4F"
  }
}

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }
 
  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }
 
  render() {
    // An error message is returned only if the component is invalid
    const errorMessage = this.props.getErrorMessage();
 
    return (
      <div style={styles.div}>
          <label style={styles.label}>{this.props.label}</label>
          <input style={this.props.readOnly ? styles.readOnly : styles.input} readOnly={this.props.readOnly} disabled={this.props.disabled}
            onChange={this.changeValue}
            type="text"
            value={this.props.getValue() || ''}
            placeholder={this.props.placeholder}
          />
          <span style={styles.error}>{errorMessage}</span>
      </div>
    );
  }
}
 
export default withFormsy(TextInput);