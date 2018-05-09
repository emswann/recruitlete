import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard"
import AthleteProfile from "../../components/AthleteProfile";
import CoachProfile from "../../components/CoachProfile";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    ready: false,
    user: {}
  };

  componentDidMount() {
    this.loadUser();
  };

  loadUser = () => {
    const APIfunction = 
      this.props.role === "athlete" ? API.getAthlete : API.getCoach;

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
      this.props.role === "athlete" ? API.updateAthlete : API.updateCoach;

    APIfunction(Auth.getToken(), user)
    .then(res => this.setState({ user: res.data }))
    .catch(err => console.log(err));
  };

  render() {
    return ( 
      <div>
        { this.state.ready &&
          (
            <SimpleCard>
              {this.props.role === "athlete" ? (
                <AthleteProfile
                  athlete={this.state.user}
                  updateAthlete={this.updateUser}
                />
              ) :
              (
                <CoachProfile
                  coach={this.state.user}
                  updateCoach={this.updateUser}
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
