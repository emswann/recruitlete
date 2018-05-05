import React from "react";
import { Route } from 'react-router-dom';

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <Component {...props} {...rest} />
  )}/>
);

export default PropsRoute;