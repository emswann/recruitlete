import React, { Component } from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import CoachProfile from "../../components/CoachProfile"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Coach extends Component {
  state = {
    ready: false,
    coach: {},
    schools: []
  };

  componentDidMount() {
    this.loadStateData();
  };

  loadStateData = () => {
    API.getCoach(Auth.getToken())
    .then(res => res.data)
    .then(coach => {
      API.getSchools(Auth.getToken())
      .then(res => 
        this.setState({
          ready: true,
          coach,
          schools: res.data 
        })
      )
    })
    .catch(err => console.log(err));
  };

  updateCoach = () => {
    let coach = this.state.coach;
    coach.position = "head coach";
    API.updateCoach(Auth.getToken(), coach)
    .then(res => this.setState({ coach: res.data }))
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
                onClick={this.updateCoach}>
                Update
              </Button>
              <SimpleCard>
                <p>This is the coach page!</p>
                <Search 
                  schools={this.state.schools}
                />
                <CoachProfile
                  coach={this.state.coach}
                />
              </SimpleCard>
            </div>
          )
        }
      </div>
    )
  };
};

export default Coach;
