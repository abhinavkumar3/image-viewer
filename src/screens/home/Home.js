import React, {Component} from 'react';
import './Home.css';
import Login from '../../screens/login/Login';


class Home extends Component {

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
                <div className="app-header">
                    Image Viewer
                </div>
                <Login/>
            </div>
        )
    }
}

export default Home; 