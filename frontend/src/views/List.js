import React, {Component} from 'react';
import '../css/Login.css';
import '../css/main.css'
import TopBar from "../components/main/topbar";
import Bottom from "../components/main/bottom";
import UserService from "../services/UserService";
import UserComponent from "../components/UserComponent";
import BotBar from "../components/botBar";

class List extends Component {

    bannerStyle={
        color:'white',
        width:'80%',
        font:"Segoe UI",
        fontSize:"30px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5vh"
    }

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>ALL USERS</title>
                </head>
                <body>
                <div className="main-container" style={{height:"100vh"}}>
                    <TopBar/>
                    <div style={this.bannerStyle}>Oto twoja lista towarzyszy spacerowych</div>
                    <UserComponent/>
                    <BotBar/>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default List;




