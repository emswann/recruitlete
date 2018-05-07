import React from "react";

const Search = props => (
  <div className="container">
    {props.schools.length ? (
      <div className="row">
        <div className="offset-md-4 col-md-4">
          {props.schools.map((school, index) => (
            <div className="row" key={index}>
              <h3>school {index}</h3>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div>
        <h3>No Results to Display</h3>
      </div>
    )}
  </div>
);

export default Search;

