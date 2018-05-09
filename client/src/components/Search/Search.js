import React from "react";
import { Button } from "mdbreact";

const Search = props => (
  <div className="container" style={{ overflow: "scroll", height: 420, marginBottom: 800 }}>
    {props.searchSchools.length ? (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-hover table-bordered">
            <thead className="header-fixed">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Conference</th>
                <th scope="col">Division</th>
                <th scope="col">State</th>
                <th scope="col">Region</th>
                <th scope="col">Save</th>
              </tr>
            </thead>
            <tbody>
              {props.searchSchools.map((school, index) => (
                <tr scope="row" key={index}>
                  <th>
                    <a target="_blank" href={school.collegeLink}>
                      {school.name}
                    </a>
                  </th>
                  <th>
                    <a target="_blank" href={school.conferenceLink}>
                      {school.conference}
                    </a>
                  </th>
                  <th>{school.division}</th>
                  <th>{school.state}</th>
                  <th>{school.region}</th>
                  <th>
                    <Button
                      block
                      color="danger"
                      type="button"
                      name="action"
                      value="saveBtn"
                      onClick={() =>
                        props.handleSaveSchool({
                          name: school.name,
                          conference: school.conference,
                          division: school.division,
                          state: school.state,
                          region: school.region,
                          collegeLink: school.collegeLink,
                          conferenceLink: school.conferenceLink
                        })
                      }
                    >
                      Save
                    </Button>
                  </th>
                </tr> 
               ))}
            </tbody>
          </table>
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
