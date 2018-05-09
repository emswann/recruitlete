import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import SearchBox from "../../components/SearchBox"
import Saved from "../../components/Saved"
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class Coach extends Component {
  state = {
    ready: false,
    coach: {},
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
    API.getCoach(Auth.getToken())
    .then(res => res.data)
    .then(coach => {
      API.getSchools(Auth.getToken())
      .then(res => 
        this.setState({
          ready: true,
          coach,
          schools: res.data, 
          searchSchools: res.data
        })
      )
    })
    .catch(err => console.log(err));
  };

  updateCoach = () => {
    let coach = this.state.coach;
    API.updateCoach(Auth.getToken(), coach)
    .then(res => this.setState({ coach: res.data }))
    .catch(err => console.log(err));
  };

  handleSearchOption = event => {
    const searchOption = event.target.value;
    let searchOptionArr = [];

    switch (searchOption) {
      case "state":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.state))
        ];
        break;
      case "division":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.division))
        ];
        break;
      case "conference":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.conference))
        ];
        break;
      case "region":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.region))
        ];
        break;
      default:
        searchOptionArr = [
          ...new Set(this.schools.map(school => school.name))
        ];
    }

    this.setState({ searchOption, searchOptionArr: searchOptionArr.sort() });
  };

  handleSearchField = event => {
    const searchOption = this.state.searchOption;
    const searchField = event.target.value;

    let searchSchools = this.state.schools.filter(
      school => school[searchOption] === searchField);

    searchSchools.sort((a,b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return (nameA > nameB ? 1 : (nameB > nameA ? -1 : 0));
    })

    this.setState({ searchField, searchSchools });  
  }

  handleSaveSchool = school => {
    let coach = this.state.coach;
    coach.colleges.push({info: school, progress: {}});
    this.updateCoach(coach);
  }
  
  render() {
    return ( 
      <div>
        { this.state.ready &&
          (
            <div>
              <SimpleCard>
                <SearchBox
                  searchOptionArr={this.state.searchOptionArr}
                  handleSearchOption={this.handleSearchOption}
                  handleSearchField={this.handleSearchField}
                />
                <Search 
                  searchSchools={this.state.searchSchools}
                  handleSaveSchool={this.handleSaveSchool}
                />
                <Saved
                  savedSchools={this.state.coach.colleges}
                />
              </SimpleCard>
            </div>
          )
        }
      </div>
    )
  };
}

export default Coach;