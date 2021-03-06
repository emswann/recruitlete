import React, { Component } from "react";
import SimpleCard from "../../components/SimpleCard";
import Search from "../../components/Search";
import SearchBox from "../../components/SearchBox";
import Spinner from "../../components/Spinner";
import Saved from "../../components/Saved";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

const styles = {
  styling: {
    margin: 20,
    padding: 20
  }
};

export default class User extends Component {
  constructor(props) {
    super(props);

    this.loadStateData = this.loadStateData.bind(this);
    this.addSaveStatusToSchools = this.addSaveStatusToSchools.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.handleSearchOption = this.handleSearchOption.bind(this);
    this.handleSearchField = this.handleSearchField.bind(this);
    this.handleSaveSchool = this.handleSaveSchool.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSaveNote = this.handleSaveNote.bind(this);
    this.toggleFavSchool = this.toggleFavSchool.bind(this);
    this.toggleCheckProgress = this.toggleCheckProgress.bind(this);
    this.handleDeleteSchool = this.handleDeleteSchool.bind(this);
    this.handleDeleteNote = this.handleDeleteNote.bind(this);
    this.toggleNotesBtn = this.toggleNotesBtn.bind(this);
    this.toggleProgressBtn = this.toggleProgressBtn.bind(this);
    this.handleProgressWidths = this.handleProgressWidths.bind(this);

    this.state = {
      ready: false,
      role: Auth.getRole(),
      user: {},
      schools: [],
      searchOption: "default",
      searchOptionArr: [],
      searchField: "default",
      searchSchools: [],
      note: "",
      collapseNotes: {},
      collapseProgress: {},
      collegeProgress: [],
      progressWidths: []
    };
  }

  componentDidMount = () => this.loadStateData();

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
              progressWidths: this.handleProgressWidths(user),
              searchSchools: this.addSaveStatusToSchools(
                schools,
                user.colleges.map(college => college.info.name)
              )
            });
          })
          .catch(err => console.log(err));
      });
  };

  handleProgressWidths = user => {
    let progressWidths = [];

    if (this.state.role === "athlete") {
      const collegeProgress = user.colleges.map(college =>
        Object.entries(college.progress)
      );

      collegeProgress.forEach(college => {
        let numTrues = 0;
        college.forEach(status => {
          numTrues = status[1] === true ? ++numTrues : numTrues; // must use prefix operator.
        });
        progressWidths.push(`${numTrues / college.length * 100}%`);
      });
    }

    return progressWidths;
  };

  addSaveStatusToSchools = (schools, savedSchoolNames) =>
    schools.map(school => {
      savedSchoolNames.includes(school.name)
        ? (school.saved = true)
        : (school.saved = false);
      return school;
    });
    
  updateUser = (user, index) => {
    const APIfunction = Auth.isUserAnAthlete()
      ? API.updateAthlete
      : API.updateCoach;

    APIfunction(Auth.getToken(), user)
      .then(res => {
        const user = res.data;

        this.setState({
          user,
          progressWidths: this.handleProgressWidths(user),
          searchSchools: this.addSaveStatusToSchools(
            this.state.searchSchools,
            res.data.colleges.map(college => college.info.name)
          )
        });
      })
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

    this.setState({
      searchOption,
      searchOptionArr: searchOptionArr.sort(),
      searchField: "default"
    });
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
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    user.colleges.push({ info: school, progress: {} });
    this.updateUser(user);
  };

  handleInputChange = event => {
    this.setState({
      note: event.target.value
    });
  };

  handleSaveNote = (note, index) => {
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    user.colleges[index].info.notes.push(note);
    this.updateUser(user);
  };

  toggleFavSchool = favSchool => {
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    let position = user.colleges.findIndex(
      school => school.info.name === favSchool
    );
    user.colleges[position].info.favorite = !user.colleges[position].info
      .favorite;
    this.updateUser(user);
  };

  toggleCheckProgress = (progress, schoolIndex, progressIndex) => {
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    user.colleges[schoolIndex].progress[progress[0]] = !user.colleges[
      schoolIndex
    ].progress[progress[0]];
    this.updateUser(user);
  };

  handleDeleteSchool = schoolName => {
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    user.colleges = user.colleges.filter(
      college => college.info.name !== schoolName
    );
    this.updateUser(user);
  };

  handleDeleteNote = (noteDelete, index) => {
    // This only works because the user object does not contain any functions - just data. Need a deep copy and avoiding additional library.
    let user = JSON.parse(JSON.stringify(this.state.user));
    user.colleges[index].info.notes = user.colleges[index].info.notes.filter(
      note => note !== noteDelete
    );
    this.updateUser(user);
  };

  toggleNotesBtn = index => {
    this.setState({
      collapseNotes: { [index]: !this.state.collapseNotes[index] },
      collapseProgress: !this.state.collapseProgress[index]
    });
  };

  toggleProgressBtn = index => {
    this.setState({
      collapseProgress: { [index]: !this.state.collapseProgress[index] },
      collapseNotes: !this.state.collapseNotes[index]
    });
  };

  render() {
    return (
      <div>
        {this.state.ready ? (
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
            <div className = "styling" style={styles.styling}>
              <SimpleCard>
                <SearchBox
                  searchOption={this.state.searchOption}
                  searchOptionArr={this.state.searchOptionArr}
                  searchField={this.state.searchField}
                  handleSearchOption={this.handleSearchOption}
                  handleSearchField={this.handleSearchField}
                />
                </SimpleCard>
                </div>
                <div className = "styling" style={styles.styling}>
                <SimpleCard>
                <Search
                  searchSchools={this.state.searchSchools}
                  handleSaveSchool={this.handleSaveSchool}
                />
                </SimpleCard>

                </div>
                <div className="styling" style={styles.styling}>
                <SimpleCard>
                <Saved
                  savedSchools={this.state.user.colleges}
                  note={this.state.note}
                  userRole={this.state.role}
                  handleDeleteSchool={this.handleDeleteSchool}
                  toggleFavSchool={this.toggleFavSchool}
                  handleSaveNote={this.handleSaveNote}
                  handleDeleteNote={this.handleDeleteNote}
                  handleInputChange={this.handleInputChange}
                  progressWidth={this.state.progressWidth}
                  toggleNotesBtn={this.toggleNotesBtn}
                  toggleProgressBtn={this.toggleProgressBtn}
                  collapseNotes={this.state.collapseNotes}
                  collapseProgress={this.state.collapseProgress}
                  toggleCheckProgress={this.toggleCheckProgress}
                  progressWidths={this.state.progressWidths}
                />
              </SimpleCard>
              </div>
            </div>
            <div className="col-md-2" />
          </div>
        ) : (
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
        )}
      </div>
    );
  }
}
