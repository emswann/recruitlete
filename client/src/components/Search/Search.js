import React from "react";
import { ListGroup, ListGroupItem, Button } from "mdbreact";

const Search = props => (
  <div className="container">
    {props.searchSchools.length ? (
      <div className="row">
        <div className="col-md-12">
          {props.searchSchools.map((school, index) => (
            <ListGroup key={index}>
              <ListGroupItem>
                <div className="row">
                  <div className="col-md-9">
                    <p> 
                      <a 
                      target="_blank"
                      href={school.collegeLink}>{school.name}
                      </a>
                    </p>
                    <p>
                      <a 
                        target="_blank"
                        href={school.conferenceLink}>{school.conference}
                      </a> 
                    </p>
                    <p>{school.division}</p>  
                    <p>{school.state}</p>
                    <p>{school.region}</p>
                  </div>               
                  <div className="col-md-3">
                    <Button block color="danger"
                      type="button" 
                      name="action"
                      value="saveBtn"
                      onClick={() => props.handleSaveSchool({
                        name          : school.name,
                        conference    : school.conference,
                        division      : school.division,
                        state         : school.state,
                        region        : school.region,
                        collegeLink   : school.collegeLink,
                        conferenceLink: school.conferenceLink
                      })}
                    >
                      Save
                    </Button>                  
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
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

