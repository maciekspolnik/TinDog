import React, {Component} from 'react';
import '../../css/main.css';

class Bottom extends Component {


    render() {
        return (
            <div className="bottom">
                <div className="swipe_block">
                    <div className="swipe_click"><img className="icon" alt="" src={"./icons/plus.png"}/></div>
                    <div className="swipe_click"><img className="icon" alt="" src={"./icons/bone.png"}/></div>
                    <div className="swipe_click"><img className="icon" alt="" src={"./icons/minus.png"}/></div>

                </div>
            </div>
        );
    }
}

export default Bottom;