import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import io from "socket.io-client";  

const styles = {
  container: {
    backgroundColor: "#FFFFFF"
  }
}

export default class Chatroom extends Component {
  constructor(props) {
    super(props);
    
    this.state =  {
    };

    this.socket = io();
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <Panel>
          <Panel.Heading className="text-center mb-4">
            <Panel.Title>
              <h1 className="mb-3">Chatroom</h1>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <h3>Chatting</h3>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}
