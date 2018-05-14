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
    searchOption: "default",    
    searchOptionArr: [],
    searchField: "default",
    searchSchools: [],
    scrollActive: false,
    notes: [],
    collapse: false
  };

  componentDidMount() {
    this.loadStateData();
  };

  loadStateData = () => {
    const APIfunction = Auth.isUserAnAthlete() ? API.getAthlete : API.getCoach;

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
      Auth.isUserAnAthlete() ? API.updateAthlete : API.updateCoach;

    APIfunction(Auth.getToken(), user)
    .then(res => this.setState({ 
            user: res.data,
            searchSchools: this.createSchoolsWithSave(
                             this.state.searchSchools, 
                             res.data.colleges.map(college => college.info.name)
                           )
            }))
    .catch(err => console.log(err));
  };    

  handleSearchOption = event => {
    let searchOption = event.target.value;
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
      case "name":
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.name))
        ];
        break;
      default:
        searchOption = "default";
        searchOptionArr = [
          ...new Set(this.state.schools.map(school => school.name))
        ];
    }

    this.setState({ searchOption, 
                    searchOptionArr: searchOptionArr.sort(),
                    searchField: "default" });
  };

  handleSearchField = event => {
    const searchOption = this.state.searchOption;
    const searchField = event.target.value;

    let searchSchools = this.state.schools.filter(
      school => school[searchOption] === searchField
    );

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

  handleInputChange = event => {
    const value = event.target.value;
    let notes = this.state.notes;
    notes = notes[value]
  
    this.setState({
      notes
    });
  };

  handleSaveNote = note => {
    console.log("Note: "+ note)
    let user = this.state.user;
    user.colleges.info.push({ notes : note });
    this.updateUser(user);
  };

  toggleFavSchool = favSchool => {
    let user = this.state.user;
    let position = 
    user.colleges.findIndex(school => school.info.name === favSchool);
    user.colleges[position].info.favorite = !user.colleges[position].info.favorite
    this.updateUser(user);
  };

  toggleCheckProgress = checkbox => {
    let user = this.state.user;
    let item = 
    user.colleges.findIndex(school => school.progress === checkbox);
    user.colleges[item].progress = !user.colleges[item].progress
    this.updateUser(user);
  };

  handleDeleteSchool = schoolName => {
    let user = this.state.user;
    user.colleges =
    user.colleges.filter(college => college.info.name !== schoolName);
   console.log(user.colleges)
    this.updateUser(user);
  };

  handleScrollToggle = () => {
    this.setState({ scrollActive: !this.state.scrollActive });
  }

  toggleNotes = () => {
    this.setState({ collapse: !this.state.collapse })}

  toggleProgress = () => {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  render() {
    return ( 
      <div>
        { this.state.ready &&
          (
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8">
                <SimpleCard>
                  <ScrollIntoViewIfNeeded 
                    active={!this.state.scrollActive}
                    options={{
                      block: "center",
                      behavior: "smooth"
                    }} 
                  >
                    <SearchBox
                      searchOption={this.state.searchOption}
                      searchOptionArr={this.state.searchOptionArr}
                      searchField={this.state.searchField}
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
                      savedSchools={this.state.user.colleges}
                      handleDeleteSchool={this.handleDeleteSchool}
                      toggleFavSchool= {this.toggleFavSchool}
                      handleSaveNote={this.handleSaveNote}
                      handleInputChange={this.handleInputChange}
                      notes={this.state.notes}
                      toggleNotes={this.toggleNotes}
                      toggleProgress={this.toggleProgress}
                      collapse={this.state.collapse}
                      handleScrollToggle={this.handleScrollToggle}
                    />
                  </ScrollIntoViewIfNeeded>   
                </SimpleCard>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          )
        }
      </div>
    )
  };
}

export default User;