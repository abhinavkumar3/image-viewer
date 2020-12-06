import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './screens/home/Home';
import Profile from './screens/profile/Profile';
import Login from './screens/login/Login';


//Router class for navigation to the pages
class AppRouter extends Component {
    constructor() {
        super()
        //Base Url
        this.baseUrl = "https://graph.instagram.com/";
    }

    render() {
        return (
            <Router>
                <div className='main-container'>
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route exact path='/home' render={(props) => <Home {...props} baseUrl={this.baseUrl} />} />
                    <Route exact path='/profile' render={(props) => <Profile {...props} baseUrl={this.baseUrl} />} />
                </div>
            </Router>
        )
    }
}
         
export default AppRouter;