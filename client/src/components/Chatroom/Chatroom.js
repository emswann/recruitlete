import React, { Component } from "react";
import { 
  Button,  
  FormGroup, 
  ControlLabel, 
  FormControl, 
  Panel 
} from "react-bootstrap";
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
}

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLeaveRoom = this.handleLeaveRoom.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.loadChatroomData = this.loadChatroomData.bind(this);
    
    this.state =  {
      message: "",
      messages: [],
      chatroom: {
        room: this.props.room.id,
        name: this.props.room.name,
        users: []
      }
    };

    this.props.socket.emit("ENTER_ROOM", 
      { room: this.props.room.id,
        username: this.props.username }); 

    this.props.socket.on("RECEIVE_MESSAGE", data => this.handleAddMessage(data));
  };

  componentDidMount = () => this.loadChatroomData();

  loadChatroomData = () => {
    API.getChatroom(Auth.getToken())
    .then(res =>
      this.setState({
        chatroom: res.data
      }))
    .catch(err => console.log(err));
  };

  updateChatroom = chatroom => {
    API.updateChatroom(Auth.getToken(), chatroom)
    .then(res => this.setState({ chatroom }))
    .catch(err => console.log(err));
  };    

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleLeaveRoom = () => {
    this.props.socket.emit("LEAVE_ROOM", 
      { room: this.props.room.id,
        username: this.props.username
      });
    this.props.toggleEnterRoom();
  }

  handleSendMessage = event => { 
    event.preventDefault(); 
    this.props.socket.emit("SEND_MESSAGE", {
      room: this.props.room.id,
      username: this.props.username,
      message: this.state.message
    });
    this.setState({ message: "" });
  }

  handleAddMessage = data => {
    let chatroom = JSON.parse(JSON.stringify(this.state.chatroom));
console.log(data);
console.log(chatroom);
    if (data.message.includes("join")) {
      chatroom.users.push(this.props.username);
    }
    else if (data.message.includes("left")) {
      chatroom.users.splice(chatroom.users.indexOf(this.props.username), 1);
    }

    this.setState({ 
      chatroom,
      messages: [...this.state.messages, data] 
    });
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        <Panel>
          <Panel.Heading className="text-center mt-4 mb-4">
            <Panel.Title>
              <h1 className="mb-3">{this.props.room.name}</h1>
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <div className="messages">
              {this.state.messages.map((message, index) => (
                <div key={index}>{message.username}: {message.message}</div>
              ))}
            </div>
            <form>
              <FormGroup controlId="username">
                <ControlLabel></ControlLabel>
                <FormControl
                  id="username"
                  type="text"
                  name="username"
                  value={this.props.username}
                  disabled="true"
                >
                </FormControl>              
              </FormGroup>
              <FormGroup controlId="message">
                <ControlLabel></ControlLabel>
                <FormControl
                  id="message"
                  type="text"
                  name="message"
                  value={this.state.message}
                  placeholder="Type message"
                  onChange={this.handleInputChange}
                >
                </FormControl>              
              </FormGroup>
              <Button 
                className="blue lighten-1"
                style={styles.button} 
                type="button"
                onClick={this.handleSendMessage}              
              >                
                <h6 className="font-weight-bold mt-1"><small>Send Message</small></h6>
              </Button>
              <Button 
                className="red lighten-1"
                style={styles.button} 
                type="button"
                onClick={this.handleLeaveRoom}              
              >                
                <h6 className="font-weight-bold mt-1"><small>Leave Room</small></h6>
              </Button>
            </form>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}