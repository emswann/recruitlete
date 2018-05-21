import React, { Component } from "react";
import { 
  Button,  
  FormGroup, 
  ControlLabel, 
  FormControl, 
  Panel 
} from "react-bootstrap";
import io from "socket.io-client"; 
import Chatroom from "../../components/Chatroom";
import Spinner from "../../components/Spinner";
import Auth from "../../utils/Auth";
import API from "../../utils/API";

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
      ready: false,
      username: "",
      chatRoomChoice: "",
      chatrooms: [],
      enterRoom: false,
      error: ""
    }

    this.loadChatrooms = this.loadChatrooms.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleRoomChoice = this.handleRoomChoice.bind(this);
    this.handleEnterRoom = this.handleEnterRoom.bind(this);
    this.handleLeaveRoom = this.handleLeaveRoom.bind(this);
    this.toggleEnterRoom = this.toggleEnterRoom.bind(this);

    this.socket = io();
  }

  componentDidMount = () => this.loadChatrooms();

  loadChatrooms = () => {
    API.getChatrooms(Auth.getToken())
      .then(res => this.setState({ ready: true, chatrooms: res.data }))  
      .catch(err => console.log(err))};

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleRoomChoice = event => 
    this.setState({ chatRoomChoice: event.target.value });
  
  toggleEnterRoom = () => {
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
        {this.state.ready ? (
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
                    {this.state.chatrooms.map((chatroom, index) => (
                      <option 
                        key={index}
                        name={chatroom.name}
                        value={chatroom.room}
                      >
                        {chatroom.name}
                      </option>
                    ))}
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
        ) : (
          <div
            className="container justify-content-center"
            style={{
              position: "absolute",
              height: 100,
              width: 100,
              top: "50%",
              left: "50%",
              marginLeft: -50,
              marginTop: -50
            }}
          >
            <Spinner />
          </div>
        )}
        {this.state.enterRoom && (     
          <Chatroom
            username={this.state.username}
            room={this.state.chatRoomChoice}
            toggleEnterRoom={this.toggleEnterRoom}
            socket={this.socket}
          />
        )}
      </div>
    );
  }
}