import React, { Component } from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import AthleteProfile from "../../components/AthleteProfile"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Athlete extends Component {
  state = {
    ready: false,
    athlete: {},
    schools: []
  };

  componentDidMount() {
    this.loadStateData();
  };

  loadStateData = () => {
    API.getAthlete(Auth.getToken())
    .then(res => res.data)
    .then(athlete => {
      API.getSchools(Auth.getToken())
      .then(res => 
        this.setState({
          ready: true,
          athlete,
          schools: res.data 
        })
      )
    })
    .catch(err => console.log(err));
  };

  updateAthlete = () => {
    let athlete = this.state.athlete;
    athlete.gradYear = 2018;
    athlete.ncaaId = "This is a test id";
    API.updateAthlete(Auth.getToken(), athlete)
    .then(res => this.setState({ athlete: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return ( 
      <div>
        { this.state.ready &&
          (
            <div>
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
                  schools={this.state.schools}
                />
                <AthleteProfile
                  athlete={this.state.athlete}
                />
              </SimpleCard>
            </div>
          )
        }
      </div>
    )
  };
}

export default Athlete;
