import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Athlete from "./pages/Athlete";
import Coach from "./pages/Coach";

const App = () => (

  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/athlete" component={Athlete} />
      <Route exact path="/coach" component={Coach} />
    </div>
  </Router>
);

export default App