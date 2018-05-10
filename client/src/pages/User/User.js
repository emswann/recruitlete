import React, { Component } from "react";
import ScrollIntoViewIfNeeded from 'react-scroll-into-view-if-needed';
import SimpleCard from "../../components/SimpleCard"
import Search from "../../components/Search"
import SearchBox from "../../components/SearchBox"
import Saved from "../../components/Saved";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

class User extends Component {
  state = {
    ready: false,
    role: "",
    user: {},
    schools: [],
    searchOption: "",    
    searchOptionArr: [],
    searchField: "",
    searchSchools: [],
    scrollActive: false
  };

  componentDidMount() {
    this.loadStateData();
  };

  loadStateData = () => {
    const APIfunction = 
      Auth.getRole() === "athlete" ? API.getAthlete : API.getCoach;

    APIfunction(Auth.getToken())
    .then(res => res.data)
    .then(user => {
      API.getSchools(Auth.getToken())
      .then(res => {
        const schools = res.data;

        this.setState({
          ready: true,
          role: Auth.getRole(),
          user,
          schools,
          searchSchools: this.createSchoolsWithSave(
                           schools, 
                           user.colleges.map(college => college.info.name))
        })
      })
    })
    .catch(err => console.log(err));
  };

  createSchoolsWithSave = (schools, savedSchoolNames) =>  
    schools.map(school => {
      savedSchoolNames.includes(school.name) 
        ? school.saved = true 
        : school.saved = false;
      return school;
    });

  updateUser = user => {
    const APIfunction = 
      Auth.getRole() === "athlete" ? API.updateAthlete : API.updateCoach;

    APIfunction(Auth.getToken(), user)
    .then(res => this.setState({ 
            user: res.data,
            searchSchools: this.createSchoolsWithSave(
                             this.state.schools, 
                             res.data.colleges.map(college => college.info.name)
                           )
            }))
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
    let user = this.state.user;
    user.colleges.push({info: school, progress: {}});
    this.updateUser(user);
  }

  handleScrollToggle = () => {
    this.setState({ scrollActive: !this.state.scrollActive });
  }

  render() {
    return ( 
      <div>
        { this.state.ready &&
          (
            <div>
              <SimpleCard>
                <ScrollIntoViewIfNeeded 
                  active={!this.state.scrollActive}
                  options={{
                    block: "end",
                    behavior: "smooth"
                  }} 
                >
                  <SearchBox
                    searchOptionArr={this.state.searchOptionArr}
                    handleSearchOption={this.handleSearchOption}
                    handleSearchField={this.handleSearchField}
                    handleScrollToggle={this.handleScrollToggle}
                  />
                </ScrollIntoViewIfNeeded> 
                <Search 
                  searchSchools={this.state.searchSchools}
                  handleSaveSchool={this.handleSaveSchool}
                />
                <ScrollIntoViewIfNeeded 
                  active={this.state.scrollActive}
                  options={{
                    block: "start",
                    behavior: "smooth"
                  }} 
                >
                  <Saved
                    handleScrollToggle={this.handleScrollToggle}
                  />
                </ScrollIntoViewIfNeeded>   
              </SimpleCard>
            </div>
          )
        }
      </div>
    )
  };
}

export default User;