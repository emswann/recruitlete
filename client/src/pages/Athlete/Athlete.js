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
    searchOption: "",    
    searchOptionArr: [],
    searchField: "",
    searchSchools: []
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
          schools: res.data, 
          searchSchools: res.data
        })
      )
    })
    .catch(err => console.log(err));
  };

  updateAthlete = () => {
    let athlete = this.state.athlete;
    API.updateAthlete(Auth.getToken(), athlete)
    .then(res => this.setState({ athlete: res.data }))
    .catch(err => console.log(err));
  };

  handleSearchOption = event => {
    const searchOption = event.target.value;
    let searchOptionArr = [];

    switch (searchOption) {
      case "state":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.state))
        ];;
        break;
      case "division":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.division))
        ];;
        break;
      case "conference":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.conference))
        ];;
        break;
      case "region":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.region))
        ];;
        break;
      default:
        searchOptionArr = [
          ...new Set(this.schools.map(school => school.name))
        ];;
    }

    this.setState({ searchOption, searchOptionArr: searchOptionArr.sort() });
  };

  handleSearchField = event => {
    const searchOption = this.state.searchOption;
    const searchField = event.target.value;
    console.log(searchOption);
    console.log(searchField);
    let searchSchools = this.state.schools.filter(
      school => school[searchOption] === searchField)
    console.log(searchSchools);
    this.setState({ searchField, searchSchools: searchSchools.sort() })   
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
                  searchOptionArr={this.state.searchOptionArr}
                  handleSearchOption={this.handleSearchOption}
                  handleSearchField={this.handleSearchField}
                />
                <Search 
                  searchSchools={this.state.searchSchools}
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
