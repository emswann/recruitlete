import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComments,
  faLock,
  faSearch
} from "@fortawesome/fontawesome-free-solid";
import Auth from "../../utils/Auth";
import img from "./logo.png"

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false,
      isWideEnough: false,
      userDropdownOpen: false,
      chatDropdownOpen: false
    };
    
    this.onClick = this.onClick.bind(this);
    this.toggleUser = this.toggleUser.bind(this);
    this.toggleChat = this.toggleChat.bind(this);

    this.props.toggleAuthenticateStatus();
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggleUser() {
    this.setState({
      userDropdownOpen: !this.state.userDropdownOpen
    });
  }

  toggleChat() {
    this.setState({
      chatDropdownOpen: !this.state.chatDropdownOpen
    });
  }

  render() {
    return (
      <Navbar
        color="white"
        light
        expand="md"
        scrolling
        sticky="top"
        style={{ width: "100%", backgroundColor: "#ffffff" }}
      >
        <NavbarBrand href="/">
          <img
            src={img}
            alt="Recruitlete Brand"
            height="90px"
          />
        </NavbarBrand>
        {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
        <Collapse isOpen={this.state.collapse} navbar>
          {Auth.isUserAuthenticated() ? (
            <NavbarNav right>
              <NavItem>
                <NavLink 
                  to="/user">
                  <FontAwesomeIcon icon={faSearch} size={"2x"} />
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.chatDropdownOpen} toggle={this.toggleChat}>
                  <DropdownToggle nav>
                    <FontAwesomeIcon icon={faComments} size={"2x"} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.props.rooms.map((room, index) => (
                      <DropdownItem key={index}>
                        <NavLink to={`/room/${room.id}`}>
                            {room.name}
                        </NavLink>
                      </DropdownItem>
                    ))}
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.userDropdownOpen} toggle={this.toggleUser}>
                  <DropdownToggle nav>
                    <FontAwesomeIcon icon={faUser} size={"2x"} />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink to="/profile">Profile</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                      <NavLink to="/logout">Log out</NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          ) : (
              <NavbarNav right>
                <NavItem>
                  <NavLink to="/login">
                    <FontAwesomeIcon icon={faLock} size={"2x"} />
                  </NavLink>
                </NavItem>
              </NavbarNav>
          )}
        </Collapse>
      </Navbar>
    );
  }
}

