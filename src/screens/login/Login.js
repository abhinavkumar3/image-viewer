import React, { Component } from 'react';
import './Login.css';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Config from '../../common/config';
import Button from '@material-ui/core/Button';
import { Card, FormControl, CardContent, CardActions, Typography } from '@material-ui/core';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: "",
            incorrectLoginInfoText: "dispNone"
        }
    }


    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) :
            this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) :
            this.setState({ passwordRequired: "dispNone" });
        (this.state.username !== "" && this.state.password !== "" && (this.state.username !== Config.login.username ||
             this.state.password !== Config.login.password )) ? this.setState({ incorrectLoginInfoText: "dispBlock" }) : this.redirectUserToHomePage();
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    // Redirect User to Home Page on Successful Login
    redirectUserToHomePage = () => {
        this.setState({ incorrectLoginInfoText: "dispNone" });
        window.sessionStorage.setItem('access-token',Config.aut["access-token"]);
        this.props.history.push('/home/');
    }

    render() {
        return (
            <div className="centerAlign">
                    <Card className="card">
                        <CardContent className="cardContent">
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
                                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                            </CardActions>
                            <br></br>
                        </CardContent>
                    </Card>
            </div>
        )
    }
}

export default Login; 