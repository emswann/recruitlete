import React, { Component } from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import AthleteProfile from "../../components/AthleteProfile"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Athlete extends Component {
  state = {
    athleteDoc: {}
  };

  componentDidMount() {
    this.loadAthlete();
  };

  loadAthlete = () => {
    API.getAthlete(Auth.getToken())
    .then(res => {
      this.setState({
        athleteDoc: res.data
      })
    })
    .catch(err => console.log(err));
  };

  updateAthlete = () => {
    let athleteDoc = this.state.athleteDoc;
    athleteDoc.gradYear = 2018;
    athleteDoc.ncaaId = "This is a test id";
    API.updateAthlete(Auth.getToken(), athleteDoc)
    .then(res => {
      this.setState({
        athleteDoc: res.data
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
          onClick={this.updateAthlete}>
          Update
        </Button>
        <SimpleCard>
          <p>This is the athlete page!</p>
          <Search 
            athleteDoc={this.state.athleteDoc}
          />
          <AthleteProfile 
            athleteDoc={this.state.athleteDoc}
          />
        </SimpleCard>
      </div>
    );
  };
}

export default Athlete;
