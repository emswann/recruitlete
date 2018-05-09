import React, { Component } from "react";
import Search from "../../components/Search";
import SimpleCard from "../../components/SimpleCard";
import SearchBox from "../../components/SearchBox";
import Saved from "../../components/Saved";
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
  }

  loadStateData = () => {
    API.getAthlete(Auth.getToken())
      .then(res => res.data)
      .then(athlete => {
        API.getSchools(Auth.getToken()).then(res =>
          this.setState({
            ready: true,
            athlete,
            schools: res.data,
            searchSchools: res.data
          })
        );
      })
      .catch(err => console.log(err));
  };

  updateAthlete = athlete => {
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
        searchOptionArr = [...new Set(this.schools.map(school => school.name))];
    }

    this.setState({ searchOption, searchOptionArr: searchOptionArr.sort() });
  };

  handleSearchField = event => {
    const searchOption = this.state.searchOption;
    const searchField = event.target.value;

    let searchSchools = this.state.schools.filter(
      school => school[searchOption] === searchField
    );

    searchSchools.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      return nameA > nameB ? 1 : nameB > nameA ? -1 : 0;
    });

    this.setState({ searchField, searchSchools });
  };

  handleSaveSchool = school => {
    let athlete = this.state.athlete;
    athlete.colleges.push({ info: school, progress: {} });
    this.updateAthlete(athlete);
  };

  handleSaveNote = note => {
    let athlete = this.state.athlete;
    athlete.colleges.info.push({ notes : note });
    this.updateAthlete(athlete);
  };

  toggleFavSchool = favSchool => {
    let athlete = this.state.athlete;
    let position = 
    athlete.colleges.findIndex(school => school.info.name === favSchool);
    athlete.colleges[position].info.favorite = !athlete.colleges[position].info.favorite
    this.updateAthlete(athlete);
  };

  toggleCheckProgress = checkbox => {
    let athlete = this.state.athlete;
    let item = 
    athlete.colleges.findIndex(school => school.progress === checkbox);
    athlete.colleges[item].progress = !athlete.colleges[item].progress
    this.updateAthlete(athlete);
  };

  handleDeleteSchool = schoolName => {
    let athlete = this.state.athlete;
    athlete.colleges =
    athlete.colleges.filter(college => college.info.name !== schoolName);
   console.log(athlete.colleges)
    this.updateAthlete(athlete);
  };

  render() {
    return (
      <div>
        {this.state.ready && (
          <div className="container">
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
            savedSchools={this.state.athlete.colleges}
            handleDeleteSchool={this.handleDeleteSchool}
            toggleFavSchool= {this.toggleFavSchool}
            handleSaveNote={this.handleSaveNote} />
            </div>
        )}
      </div>
    );
  }
}

export default Athlete;
