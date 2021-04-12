import React, {Component} from 'react';


class Input extends Component {
    render() {
        return <input className="enter-form" name={this.props.name} type={this.props.type}
                      placeholder={this.props.placeholder}/>
    }
}

export default Input;