import React, { Component } from "react";
import { Panel } from "react-bootstrap";
import io from "socket.io-client";  

const styles = {
  container: {
    backgroundColor: "#FFFFFF"
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
    
    this.state =  {
      id: this.props.match.params.id,
      username: "",
      message: "",
      messages: []
    };

    this.socket = io();

    // needs to be done after this.socket and this.state
    this.socket.emit("ENTER_ROOM", { room: this.state.id }); 

    this.socket.on("RECEIVE_MESSAGE", data => this.handleAddMessage(data));
  }

  componentWillUnmount = () => { 
    this.socket.emit("LEAVE_ROOM", { room: this.state.id });
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleLeaveRoom = () => this.props.history.push("/");

  handleSendMessage = event => { 
    event.preventDefault(); 
    this.socket.emit("SEND_MESSAGE", {
      room: this.state.id,
      author: this.state.username,
      message: this.state.message
    });
    this.setState({ message: "" });
  }

  handleAddMessage = data => 
    this.setState({ messages: [...this.state.messages, data] });

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
            <h3>Chatting in room {this.state.id}</h3>
            <div className="messages">
              {this.state.messages.map((message, index) => (
                <div key={index}>{message.author}: {message.message}</div>
              ))}
            </div>
            <div className="footer">
              <input 
                type="text" 
                placeholder="Username"
                name="username"
                value={this.state.username} 
                onChange={this.handleInputChange} className="form-control"
              />
              <br/>
              <input 
                type="text" 
                placeholder="Message" 
                className="form-control" 
                name="message"
                value={this.state.message} 
                onChange={this.handleInputChange}/>
              <br/>

              <button className="m-2"
                style={styles.button} 
                type="button"
                onClick={this.handleSendMessage}              
              >                
                <h6 className="font-weight-bold mt-1">Send Message</h6>
              </button>

              <button className="m-2"
                style={styles.button} 
                type="button"
                onClick={this.handleLeaveRoom}              
              >                
                <h6 className="font-weight-bold mt-1">Leave Room</h6>
              </button>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    );
  }
}