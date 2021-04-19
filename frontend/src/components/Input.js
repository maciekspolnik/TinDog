import React, {Component} from 'react';


class Input extends Component {

    style={
        height: '10%'
    }

    render() {
        return <input className="enter-form" style={this.style} name={this.props.name} type={this.props.type}
                      placeholder={this.props.placeholder}/>
    }
}

export default Input;