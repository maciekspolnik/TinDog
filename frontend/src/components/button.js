import React, {Component} from 'react';


class Button extends Component {
    render() {
        return <button className="login-button" type={this.props.type}>{this.props.texts}</button>
    }
}

export default Button;




