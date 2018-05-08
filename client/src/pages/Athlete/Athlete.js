import React, { Component } from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import SearchBox from "../../components/SearchBox"
import AthleteProfile from "../../components/AthleteProfile"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Athlete extends Component {
  state = {
    ready: false,
    athlete: {},
    schools: [],
    searchChoice: "",
    searchSchools: [],
    searchField: "region"
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

  handleSearchChoice = event => {
    console.log("got here")
    this.setState({ searchChoice:event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const searchChoice = this.state.searchChoice
    let searchSchools = this.state.schools.map(school => school[this.searchField] === searchChoice)
    
    this.setState({ searchSchools })
    
  }

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
                <SearchBox
                  schools={this.state.schools}
                  handleSearchChoice = {this.handleSearchChoice}
                  handleFormSumbit = {this.handleFormSubmit}
                />
                <Search 
                  searchSchools = {this.state.searchSchools}
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
