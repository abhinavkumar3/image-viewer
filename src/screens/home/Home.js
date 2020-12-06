import React, { Component, useState, useEffect, useContext } from 'react';
import './Home.css';
import Login from '../../screens/login/Login';
import PROFILE_ICON from "../../assets/profile_icon.png";

const { searchKey } = useContext(AppContext);
const [imagesResponse, setImagesResponse] = useState([]);
const [filteredData, setFilteredData] = useState([]);
const [comments, setComments] = useState({});
const [profileIcon] = useState(PROFILE_ICON);


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            usernameRequired: "dispNone",
            username: "",
            passwordRequired: "dispNone",
            password: ""
        }
    }

    render() {
        return (
            <div className="home-container">
                <Card key={item.id}>
                    <CardHeader
                        avatar={<Avatar src={profileIcon} />}
                        title={item.username}
                        subheader={formatDate(item.timestamp)} />
                    <CardContent>
                    </CardContent>
                </Card>
            </div>
        )
    }
}; 