import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import Button from 'material-ui/Button';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import Star from '@material-ui/icons/Star';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import blue from 'material-ui/colors/blue';
import "./Nav.css";

const styles = {
  backgroundColor: "#FFFFFF",
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  button: {
    marginLeft: -12,
    marginRight: 20,
    backgroundColor: "#2c7dc1"
  },
};



class Nav extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
                }
                label={auth ? 'Logout' : 'Login'}
              />
            </FormGroup>
            <Typography className={classes.flex}>
              <img src="assets/images/logo.png" height="90px"></img>
            </Typography>
            {auth && (
              <div>
                <Button variant="fab" color="primary" aria-label="search" className={classes.button}>
                  <Search />
                </Button>
                <Button variant="fab" color="primary" aria-label="saved" className={classes.button}>
                  <Star />
                </Button>
                <Button variant="fab" color="primary" aria-label="messages" className={classes.button}>
                  <QuestionAnswer />
                </Button>

                <Button
                  variant="fab"
                  aria-label="account"
                  className={classes.button}
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="primary"
                >
                  <Person />
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>Logout</MenuItem>

                </Menu>

              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);