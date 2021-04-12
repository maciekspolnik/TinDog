import React, {Component} from 'react';

class LogoText extends Component {


    my_style = {

        font: "normal normal normal 45px/56px Segoe UI",
        color: "#ffffff",
        fontSize: "35px"

    };

    render() {
        return (<div style={this.my_style}>Tu znajdziecie ze swoim czworonogiem towarzystwo na wspólne spacery</div>
        );
    }
}

export default LogoText;