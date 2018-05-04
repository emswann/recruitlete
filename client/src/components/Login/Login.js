import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input} from 'mdbreact';



class Login extends React.Component {

    render() {

    return (
        <form>
            <p className="h5 text-center mb-4">Sign in</p>
            <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <Input label="Type your password" icon="lock" group type="password" validate/>
            <div className="text-center">
                <Button block color="primary">Login</Button>
                <Button block color="secondary">Register</Button>
            </div>
        </form>
    );
}

}

export default Login;
