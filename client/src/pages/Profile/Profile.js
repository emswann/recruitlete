import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard"
import AthleteProfile from "../../components/AthleteProfile";
import CoachProfile from "../../components/CoachProfile";
import Spinner from "../../components/Spinner";

import Auth from "../../utils/Auth";
import API from "../../utils/API";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    
    this.state =  
      { ready: false, 
        updateStatus: false,
        user : {} 
      };
  }

  componentDidMount = () => this.loadUser();

  loadUser = () => {
    const APIfunction = Auth.isUserAnAthlete() ? API.getAthlete : API.getCoach;

    APIfunction(Auth.getToken())
    .then(res =>
      this.setState({
        ready: true,
        updateStatus: false,
        user: res.data
      })
    )
    .catch(err => console.log(err));
  };

  updateUser = user => {
    const APIfunction = 
      Auth.isUserAnAthlete() ? API.updateAthlete : API.updateCoach;

    APIfunction(Auth.getToken(), user)
    .then(res => this.setState({ user: res.data, updateStatus: true }))
    .catch(err => {
      console.log(err);
      this.setState({ updateStatus: false });
    })
  };

  render() {
    return ( 
      <div className="container">
        { this.state.ready ?
          (
            <SimpleCard>
              {Auth.isUserAnAthlete() ? (
                <AthleteProfile
                  user={this.state.user}
                  updateStatus={this.state.updateStatus}
                  updateUser={this.updateUser}
                />
              ) : (
                <CoachProfile
                  user={this.state.user}
                  updateStatus={this.state.updateStatus}
                  updateUser={this.updateUser}
                />
              )}
            </SimpleCard>
          ):(
            <div
              className="container justify-content-center"
              style={{
                position: "absolute",
                height: 100,
                width: 100,
                top: "50%",
                left: "50%",
                marginLeft: -50,
                marginTop: -50
              }}
            >
              <Spinner />
            </div>
          )
        }
      </div>
    )
  };
}
