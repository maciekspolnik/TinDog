import React, {Component} from 'react';
import '../css/Login.css';
import '../css/main.css'
import Middle from "./middle";

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>MAIN PAGE</title>
                </head>
                <body>
                <div className="main-container">
                    <Middle/>
                    <div className="bottom">
                        <div className="swipe_block">
                            <div className="swipe_click"><img className="icon" alt="" src={"./icons/plus.png"}/></div>
                            <div className="swipe_click"><img className="icon" alt="" src={"./icons/bone.png"}/></div>
                            <div className="swipe_click"><img className="icon" alt="" src={"./icons/minus.png"}/></div>

                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Main;
