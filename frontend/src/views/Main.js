import React, {Component} from 'react';
import '../css/Login.css';
import '../css/main.css'
import TopBar from "../components/main/topbar";
import Bottom from "../components/main/bottom";
import Middle from "../components/main/middle";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>MAIN PAGE</title>
                </head>
                <body>
                <div className="main-container">
                    <TopBar/>
                    <Middle/>
                    <Bottom/>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Main;
