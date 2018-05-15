import React from "react";
import { Jumbotron } from "react-bootstrap";
import "./NoMatch.css";

const NoMatch = () => (
  <Jumbotron className="text-center">
    <h1 className="error">404 Page Not Found</h1>
  </Jumbotron>
);

export default NoMatch;
