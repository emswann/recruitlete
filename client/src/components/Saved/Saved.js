import React from "react";
import { Card } from "mdbreact";

const Saved = props => (
  <div className="container">
    {props.savedSchools.length ? (
      <div className="row">
        <div className="col-md-3">
          {props.savedSchools.map((school, index) => (
            <div key={index}>
              <Card>
                <p>{school.info.name}</p>
              </Card>
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

export default Saved;
