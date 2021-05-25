import React, {Component} from 'react';


class Button extends Component {

    button_style = {
        borderRadius: '20px'
    }

    render() {
        return <button className="login-button" style={this.props.style} type={this.props.type}>{this.props.texts}</button>
    }
}

export default Button;




