import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import TextField from 'material-ui/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Lock from '@material-ui/icons/Lock';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const styles = theme => ({
    card: {
        minWidth: 275,
        height: 80,
        backgroundColor: "#ee5b4f",
        textAlign: "center"
    },
    button:{
        backgroundColor: "#2c7dc1"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    root: {
        flexGrow: 1,
    },
    demo: {
        height: 100,
        padding: theme.spacing.unit * 2
    },
});

function Login(props) {

    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="display2" style={{ color: "#ffffff" }} gutterBottom>
                        LOGIN
                    </Typography>
                </CardContent>
            </Card>
            <Grid
            item xs={12}
                container
                spacing={10}
                className={classes.demo}
                justify={"center"}
                alignItems={"center"}
                direction={"row"}
                span={true}
            >
                <AccountCircle />
                <TextField
                style = {{width: 300}}
                    placeholder="Enter your Username"
                    floatingLabelText="Username"
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                    required
                />
                </Grid>
                <Grid
            item xs={12}
                container
                spacing={10}
                className={classes.demo}
                justify={"center"}
                alignItems={"center"}
                direction={"row"}
            >
            <Lock />
            <TextField
            style = {{width:300}}
                type="password"
                placeholder="Enter your Password"
                floatingLabelText="Password"
                onChange={(event, newValue) => this.setState({ password: newValue })}
                required
            />
            </Grid>
            <br />
            <Grid
                container
                justify={"center"}
                alignItems={"center"}
                direction={"row"}
            >
                <Button size="xlarge" color="primary" variant="raised" style={{ fontSize: 20, width: 200, backgroundColor: "#2c7dc1" }} onClick={(event) => this.handleSumbit(event)}>LOGIN</Button>
                <br /><br />
                </Grid>
                <Grid
                container
                justify={"center"}
                alignItems={"center"}
                direction={"row"}
            > </Grid>
            <br />
                <Divider />
               
                <Grid
                container
                justify={"center"}
                alignItems={"center"}
                direction={"row"}
            >
                <p> Click the register button below to create a new account!</p>
                <Button size="large" color="#2c7dc1" variant="raised" component="span" onClick={(event) => this.handleRegister(event)}>REGISTER</Button>
              </Grid>
        </div>
    );
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
