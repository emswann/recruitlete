import React from 'react';
import { Card } from 'mdbreact';

const SimpleCard = props => (
  <Card>
    {props.children}
  </Card>
);

export default SimpleCard;  