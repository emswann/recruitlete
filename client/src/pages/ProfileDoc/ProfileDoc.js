import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard"
import AthleteProfileDoc from "../../components/AthleteProfileDoc";
import CoachProfileDoc from "../../components/CoachProfileDoc";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

export default class ProfileDoc extends Component {
  constructor(props) {
    super(props);

    this.loadUser = this.loadUser.bind(this);
    
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

  render() {
    return ( 
      <div className="container">
        { this.state.ready &&
          (
            <SimpleCard>
              {Auth.isUserAnAthlete() ? (
                <AthleteProfileDoc
                  user={this.state.user}
                />
              ) : (
                <CoachProfileDoc
                  user={this.state.user}
                />
              )}
            </SimpleCard>
          )
        }
      </div>
    )
  };
}
