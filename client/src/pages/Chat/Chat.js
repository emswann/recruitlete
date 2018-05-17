import React, { Component } from "react";
import { 
  Button,  
  FormGroup, 
  ControlLabel, 
  FormControl, 
  Panel 
} from "react-bootstrap";
import io from "socket.io-client"; 
import Chatroom from "../../components/Chatroom" 

const styles = {
  container: {
    backgroundColor: "#FFFFFF",
    padding: 20
  },
  button: {
    backgroundColor: "#EE5B4F",
    color          : "#FFFFFF",
    width          : "10rem"
  },
  error: {
    color: "#EE5B4F"
  }
}

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      chatRoomChoice: "",
      rooms: [
        { id: 1, name: "Room 1" },
        { id: 2, name: "Room 2" },
        { id: 3, name: "Room 3" },
        { id: 4, name: "Room 4" },
        { id: 5, name: "Room 5" }
      ],
      enterRoom: false,
      error: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoomChoice = this.handleRoomChoice.bind(this);
    this.handleEnterRoom = this.handleEnterRoom.bind(this);
    this.handleLeaveRoom = this.handleLeaveRoom.bind(this);
    this.toggleEnterRoom = this.toggleEnterRoom.bind(this);

    this.socket = io();
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleRoomChoice = event => 
    this.setState({ chatRoomChoice: event.target.value });
  
  toggleEnterRoom = () => {; 
    this.setState({ enterRoom: !this.state.enterRoom });
  }

  handleEnterRoom = () => {
    if (this.state.username === "" || this.state.chatRoomChoice === "") {
      const error = `You must enter a username AND choose a room!`;
      this.setState({
        error
      })
    }
    else {
      this.setState({
        enterRoom: true,
        error: ""
      })
    }
  };

  handleLeaveRoom = () => this.props.history.push("/");

  render() {
    return (
      <div className="container" style={styles.container}>
        <Panel>
          <Panel.Heading className="text-center mb-4">
            <Panel.Title>
              <h1 className="mb-3">Welcome to the Chatroom!</h1>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <form>
              {this.state.error && (
                <h6 className="error" style={styles.error}>
                  {this.state.error}
                </h6>
              )}
              <FormGroup controlId="username">
                <ControlLabel></ControlLabel>
                <FormControl
                  id="username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleInputChange}
                >
                </FormControl>              
              </FormGroup>
              <FormGroup controlId="chatRoomSelect">
                <ControlLabel></ControlLabel>
                <FormControl 
                  componentClass="select" 
                  name="chatRoomChoice" 
                  value={this.state.chatRoomChoice}
                  disabled={this.state.enterRoom}
                  onChange={this.handleRoomChoice}
                >
                  <option name="Select..." value="">Choose a room...</option>
                  <option name="Room 1" value="0">Room 1</option>
                  <option name="Room 2" value="1">Room 2</option>
                  <option name="Room 3" value="2">Room 3</option>
                  <option name="Room 4" value="3">Room 4</option>
                  <option name="Room 5" value="4">Room 5</option>
                </FormControl>
              </FormGroup>
              <Button 
                className="blue lighten-1"
                style={styles.button} 
                type="button"
                onClick={this.handleEnterRoom}              
              >                
                <h6 className="font-weight-bold mt-1"><small>Enter Room </small></h6>
              </Button>
              {!this.state.enterRoom && (
                <Button 
                  className="red lighten-1"
                  style={styles.button} 
                  type="button"
                  onClick={this.handleLeaveRoom}              
                >                
                  <h6 className="font-weight-bold mt-1"><small>Exit Chatroom</small></h6>
                </Button>
              )}
            </form>
          </Panel.Body>
        </Panel>
        {this.state.enterRoom && (
          <Chatroom
            username={this.state.username}
            room={this.state.rooms[this.state.chatRoomChoice]}
            toggleEnterRoom={this.toggleEnterRoom}
            socket={this.socket}
          />
        )}
      </div>
    );
  }
}