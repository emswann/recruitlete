import React from "react";
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

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
    this.props.toggleAuthenticateStatus();
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
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
            src="assets/images/logo.png"
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
                  to={Auth.isUserAnAthlete() ?  "/athlete" : "/coach"}>
                  <FontAwesomeIcon icon={faSearch} size={"2x"} />
                </NavLink>
              </NavItem>
              <NavItem>
<<<<<<< HEAD
=======
                <NavLink 
                  to={Auth.isUserAnAthlete() ?  "/athlete" : "/coach"}>
                  <FontAwesomeIcon icon={faSave} size={"2x"} />
                </NavLink>
              </NavItem>
              <NavItem>
>>>>>>> master
                <NavLink to="#">
                  <FontAwesomeIcon icon={faComments} size={"2x"} />
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
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
export default Nav;
