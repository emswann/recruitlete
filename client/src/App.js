import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav"
import Slideshow from "./components/Slideshow"

const App = () => (
<div >
  <Nav/>
  <div style={{ paddingLeft: 100, paddingRight: 100 }}>
  <Slideshow/>
  </div>
  </div>
  // <Router>
  //   <div>
  //   </div>
  // </Router>
);

export default App