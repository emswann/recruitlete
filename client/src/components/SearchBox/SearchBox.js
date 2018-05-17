import React from "react";

const SearchBox = props => (
  <div className="container" style={{ padding: 20 }}>
    <div className="jumbotron jumbotron-fluid">
      <div className="container" >
        <h1 className="display-4">SEARCH</h1>
        <div className="input-group">
          <select
            className="custom-select"
            name="searchOption"
            value={props.searchOption}
            onChange={props.handleSearchOption}
          >
            <option name="default" value="default">Search By...</option>
            <option name="state" value="state">State</option>
            <option name="division" value="division">Division</option>
            <option name="region" value="region">Region</option>
            <option name="conference" value="conference">Conference</option>
            <option name="name" value="name">All</option>
          </select>

          <div className="input-group">
            <select 
              className="custom-select" 
              name="searchField"
              value={props.searchField}
              onChange={props.handleSearchField}
            >
              <option name="default" value="default">Search By...</option>
              {props.searchOptionArr.map((choice, index) => (
                <option
                  name={choice} 
                  value={choice} 
                  key={index}
                >
                  {choice}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SearchBox;