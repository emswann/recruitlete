import React, { Component } from "react";
import { Button } from "mdbreact";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choiceArr: []
    };
    this.conferences = [
      ...new Set(this.props.schools.map(school => school.conference))
    ];
    this.regions = [
      ...new Set(this.props.schools.map(school => school.region))
    ];
    this.divisions = [
      ...new Set(this.props.schools.map(school => school.division))
    ];
    this.schoolState = [
      ...new Set(this.props.schools.map(school => school.state))
    ];
    this.schoolName = [
      ...new Set(this.props.schools.map(school => school.name))
    ];
  }

  handleOption = event => {
    console.log(event.target);
    const option = event.target.value;
    let choiceArr = [];
    console.log(option);
    switch (option) {
      case "state":
        choiceArr = this.schoolState;
        break;
      case "division":
        choiceArr = this.divisions;
        break;
      case "conference":
        choiceArr = this.conferences;
        break;
      case "region":
        choiceArr = this.regions;
        break;
      default:
        choiceArr = this.schoolName;
        break;
    }
    this.setState({ choiceArr: choiceArr.sort() });
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">SEARCH</h1>
            <div className="input-group">
              <select
                className="custom-select"
                id="search"
                onChange={this.handleOption}
              >
                <option defaultValue>Search By...</option>
                <option value="state">State</option>
                <option value="division">Division</option>
                <option value="region">Region</option>
                <option value="conference">Conference</option>
                <option value="all">All</option>
              </select>

              <div className="input-group">
                <select 
                  className="custom-select" 
                  id="searchOption"
                  onChange={this.props.handleSearchChoice}
                >
                  <option defaultValue>Search By...</option>
                  {this.state.choiceArr.map((choice, index) => (
                    <option 
                      value={choice} 
                      key={index}
                    >
                      {choice}
                    </option>
                  ))}
                </select>
                <Button block color="danger"
                  type="button" 
                  name="action"
                  value="searchBtn"
                  onClick={this.props.handleSearch}>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;