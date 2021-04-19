import React, {Component} from "react";
import banner from "../../multimedia/img.jpg"

class Middle extends Component {


    middle={
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
    name_block={
        backgroundColor: 'rgba(19, 19, 19, 0.9)',
        width: '30%',
        height: '15%',
        borderRadius: '20px',
        color: 'white',
        fontSize: '40px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    }
    banner = {
        width: '20%',
        height: '70%',
        marginTop: '1em',
        borderRadius: '20px'
    }

    render() {
        return (
            <div style={this.middle}>
                <div style={this.name_block}>Felo</div>
                <img style={this.banner} src={banner} alt=""/>
            </div>
        );
    }
}

export default Middle;