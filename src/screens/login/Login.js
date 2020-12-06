import React, { Component } from 'react';
import './Login.css';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Config from '../../common/config';
import Button from '@material-ui/core/Button';
import { Card, FormControl, CardContent, CardActions, Typography } from '@material-ui/core';
import { Redirect } from 'react-router-dom';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            incorrectLoginInfoText: "dispNone",
            isLoggedIn: false
        }
    }

    //Click Event for Login button to validate username and password
    onClickLogin = () => {
        //Checking the UserName as Blank and Error message is displayed
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) :
            this.setState({ usernameRequired: "dispNone" });

        //Checking the Password as Blank and Error message is displayed
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) :
            this.setState({ passwordRequired: "dispNone" });

        //Checking Valid User and Password combination with accessToken
        (this.state.username !== "" && this.state.password !== "" &&
            (this.state.username !== Config.login.username || this.state.password !== Config.login.password))
            ? this.setState({ incorrectLoginInfoText: "dispBlock" }) : this.setAccessToken();
    }

    //Setting userName and Password Value
    inputUsernameChangeHandler = (e) => { this.setState({ username: e.target.value }); }
    inputPasswordChangeHandler = (e) => { this.setState({ password: e.target.value }); }

    //Assigning the login when username and password is same
    setAccessToken = () => {
        this.setState({ incorrectLoginInfoText: "dispNone" });
        sessionStorage.setItem('access-token', Config.auth["access-token"]);
        //Set the value of Loggedin to be true.
        this.setState({
            isLoggedIn: true,
        });
    }

    render() {
        return (
            <div>
                {this.state.isLoggedIn === true ?
                    <Redirect to="/home" />
                    :
                    <div className="login-card">
                        <Card className="card-parent">
                            <CardContent className="card-content">
                                <Typography variant="h5" component="h2">
                                    LOGIN
                            </Typography>
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="username">Username</InputLabel>
                                    <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                    <FormHelperText className={this.state.usernameRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br /><br />
                                <FormControl fullWidth required>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input id="password" type="password" loginpassword={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                    <FormHelperText className={this.state.passwordRequired}>
                                        <span className="red">required</span>
                                    </FormHelperText>
                                </FormControl>
                                <br></br>
                                <FormHelperText error className={this.state.incorrectLoginInfoText}>Incorrect username and/or password</FormHelperText>
                                <br /><br />
                                <CardActions>
                                    <Button variant="contained" color="primary" onClick={this.onClickLogin}>LOGIN</Button>
                                </CardActions>
                                <br></br>
                            </CardContent>
                        </Card>
                    </div>}
            </div>
        )
    }
}

export default Login; 