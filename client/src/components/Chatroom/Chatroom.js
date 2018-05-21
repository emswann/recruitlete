import React, { Component } from "react";
import { 
  Button,  
  FormGroup, 
  ControlLabel, 
  FormControl, 
  Panel,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
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
  listHeader: {
    color          : "#FFFFFF",
    textAlign      : "center"
  }
}

export default class Chatroom extends Component {
  constructor(props) {
    super(props);

    this.loadChatroom = this.loadChatroom.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLeaveRoom = this.handleLeaveRoom.bind(this);
    this.handleSendMessage = this.handleSendMessage.bind(this);
    this.handleAddMessage = this.handleAddMessage.bind(this);
    
    this.state =  {
      ready: false,
      chatroom: {},
      message: "",
      messages: []
    };

    this.props.socket.on("RECEIVE_MESSAGE", data => this.handleAddMessage(data));
  };

  componentDidMount = () => {
    const chatroomDoc = { 
      room: this.props.room, 
      username: this.props.username
    };

    API.addChatroomUser(Auth.getToken(), chatroomDoc)
      .then(() => this.loadChatroom([]))
      .catch(err => console.log(err));

    this.props.socket.emit("ENTER_ROOM", chatroomDoc);
  };

  loadChatroom = messages => {
    API.getChatroom(Auth.getToken(), this.props.room)
      .then(res => this.setState({ ready: true, 
                                   messages,
                                   chatroom: res.data }))  
      .catch(err => console.log(err))
  };   

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleLeaveRoom = () => {
    const chatroomDoc = { 
      room: this.props.room, 
      username: this.props.username
    };

    API.deleteChatroomUser(Auth.getToken(), chatroomDoc)
      .then(() =>
        this.props.socket.emit("LEAVE_ROOM", 
                               chatroomDoc, 
                               this.props.toggleEnterRoom())
      )
      .catch(err => console.log(err))
  };

  handleSendMessage = event => { 
    event.preventDefault(); 
    this.props.socket.emit("SEND_MESSAGE", {
      room: this.props.room,
      username: this.props.username,
      message: this.state.message
    });
    this.setState({ message: "" });
  }

  handleAddMessage = data => {
    const messages = [...this.state.messages, data];

    // This user does not receive own join/left messages.
    if (data.message.includes("join") ||
        data.message.includes("left")) {
      this.loadChatroom(messages);
    }
    // For a regular message.
    else {
      this.setState({ messages });
    }
  }

  render() {
    return (
      <div className="container" style={styles.container}>
        {this.state.ready ? (
          <Panel>
            <Panel.Heading className="text-center mt-4 mb-4">
              <Panel.Title>
                <h1 className="mb-3">{this.state.chatroom.name}</h1>
              </Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <div className="row">
                <div className="col-md-8">
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
                </div>
                <div className="col-md-4">
                  <ListGroup>
                    <ListGroupItem 
                      style={styles.listHeader}
                      className="blue lighten-1"
                      header="Active Users">
                    </ListGroupItem>
                    {this.state.chatroom.users.sort().map((user, index) => (
                      <ListGroupItem key={index}>
                        {user}
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </div>
              </div>
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
      </div>
    );
  }
}