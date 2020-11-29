import React, {Component} from 'react';
import './Login.css';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { Box, Card,FormControl, CardContent,CardHeader, Typography } from '@material-ui/core';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: ""
        }
    }


    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : 
        this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : 
        this.setState({ passwordRequired: "dispNone" });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <div>
                <Box display="flex" width="90%" m="auto" flexDirection="row" flexWrap="wrap" alignItems="space-around" justifyContent="space-between">
                    <Card>
                        <CardContent className="card-content">
                            <Typography variant="h5" component="h2">
                            LOGIN
                            </Typography>
                            <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" loginpassword={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}>
                                    <span className="red">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                        </CardContent>
                    </Card>
                </Box>
            </div>
        )
    }
}

export default Login; 