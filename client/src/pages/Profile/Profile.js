import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard"
import AthleteProfile from "../../components/AthleteProfile";
import CoachProfile from "../../components/CoachProfile";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.loadUser = this.loadUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.state =  
      { ready: false, 
        user : {} 
      };

    this.loadUser();
  }

  loadUser = () => {
    const APIfunction = Auth.isUserAnAthlete() ? API.getAthlete : API.getCoach;

    APIfunction(Auth.getToken())
    .then(res =>
      this.setState({
        ready: true,
        user: res.data
      })
    )
    .catch(err => console.log(err));
  };

  updateUser = user => {
    const APIfunction = 
      Auth.isUserAnAthlete() ? API.updateAthlete : API.updateCoach;

    APIfunction(Auth.getToken(), user)
    .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return ( 
      <div className="container">
        { this.state.ready &&
          (
            <SimpleCard>
              {Auth.isUserAnAthlete() ? (
                 <AthleteProfile
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              ) : (
                <CoachProfile
                  user={this.state.user}
                  updateUser={this.updateUser}
                />
              )}
            </SimpleCard>
          )
        }
      </div>
    )
  };
}

export default Profile;
