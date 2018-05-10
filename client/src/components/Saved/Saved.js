import React from 'react';
import { Button, Card } from 'mdbreact';

const Saved = props => (
  <div className="container" style={{ height: 800 }}>
    <Button
      color="danger"
      type="button"
      name="action"
      value="scrollBtn"
      onClick={props.handleScrollToggle}
    >
      Scroll To Search
    </Button>
    <Card>
      <p>Need something here to scroll to.</p>
    </Card>
  </div>
);

export default Saved;  