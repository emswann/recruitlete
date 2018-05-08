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
    const option = event.target.value;
    let choiceArr = [];
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
            <form>
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
                <select className="custom-select" id="searchOption">
                  <option defaultValue>Search By...</option>
                  {this.state.choiceArr.map((choice, index) => (
                    <option 
                      value="choice" 
                      key={index}
                      onChange={this.props.handleSearchChoice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>
              <Button block color="danger"
                type="submit" 
                name="action"
                value="searchBtn"
                onClick={this.props.handleFormSubmit}>
                Search
              </Button>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;