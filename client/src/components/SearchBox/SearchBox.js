import React from "react";

const SearchBox = props => (
  <div className="container">
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">SEARCH</h1>
        <div className="input-group">
          <select
            className="custom-select"
            id="searchOption"
            onChange={props.handleSearchOption}
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
              id="searchField"
              onChange={props.handleSearchField}
            >
              <option defaultValue>Search By...</option>
              {props.searchOptionArr.map((choice, index) => (
                <option 
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