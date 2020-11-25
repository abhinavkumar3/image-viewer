import React, {Component} from 'react';
import './Home.css';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';	
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';

class Home extends Component {

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : 
        this.setState({ usernameRequired: "dispNone" });
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    Image Viewer
                </header>
                <Card>
                    LOGIN
                    <CardContent>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" />
                        </FormControl>
                        <br /><br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                        <br /><br />
                        <Button variant="contained" color="primary" nClick={this.loginClickHandler}>
                            LOGIN</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default Home; 