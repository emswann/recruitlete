import React from "react";
import { Panel } from "react-bootstrap";

const CoachProfileDoc = props => (
  <Panel>
    <Panel.Heading className="mb-3">
      <Panel.Title>
        <h4>
          {props.user.name.first} {props.user.name.middle} {props.user.name.last}
        </h4>
      </Panel.Title>
    </Panel.Heading>
    <Panel.Body>
      <div className="row">
        <div className="col-md-12">
          <h6>
            {props.user.position}
          </h6>
          <h6>
            {props.user.address.street1}
          </h6>
          {props.user.address.street2 && (
            <h6>
              {props.user.address.street2}
            </h6>              
          )}
          {props.user.address.street2 && (
            <h6>
              {props.user.address.city}, {props.user.address.state} {props.user.address.zip}
            </h6>              
          )}
          <br />
          <h6>
            {props.user.contact.phone}
          </h6>
          <h6>
            {props.user.email}
          </h6>
          <h6>
            {props.user.contact.url}
          </h6>
          <br />
          <h6>
            {props.user.accomplishments}
          </h6>
        </div>
      </div>
    </Panel.Body>
  </Panel>
);

export default CoachProfileDoc;
