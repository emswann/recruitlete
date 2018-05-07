import React, { Component } from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard"
import CoachProfile from "../../components/CoachProfile"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Coach extends Component {
  state = {
    coachDoc: {}
  };

  componentDidMount() {
    this.loadCoach();
  };

  loadCoach = () => {
    API.getCoach(Auth.getToken())
    .then(res => {
      this.setState({
        coachDoc: res.data
      })
    })
    .catch(err => console.log(err));
  };

  updateCoach = () => {
    let coachDoc = this.state.coachDoc;
    coachDoc.position = "head coach";
    API.updateCoach(Auth.getToken(), coachDoc)
    .then(res => {
      this.setState({
        coachDoc: res.data
      })
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div >
        <Button block color="secondary"
          type="submit" 
          name="action"
          value="updateBtn"
          onClick={this.updateCoach}>
          Update
        </Button>
        <SimpleCard>
          <p>This is the coach page!</p>
          <CoachProfile 
            coachDoc={this.state.coachDoc}
          />
        </SimpleCard>
      </div>
    );
  };
}

export default Coach;