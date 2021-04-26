import React, {Component} from 'react'
import '../css/Login.css'
import '../css/error.css'
import '../css/main.css'
import Logo from "../components/common/Logo";
import MainLogo from "../components/common/MainLogo";

class Err extends Component {

    render() {
        return (
            <React.Fragment>
                <head>
                    <title>ERROR-PAGE</title>
                </head>
                <body>
                <div className='error-body'>
                    <MainLogo/>
                    <div className='error-banner'>
                        Błąd 404
                    </div>
                    <p className='error-prompt'>
                        Dostęp do wybranej strony jest obecnie niemożliwy. Spróbuj ponownie pózniej lub skontaktuj się z administratorem strony
                    </p>
                </div>
                </body>
            </React.Fragment>
        );
    }
}

export default Err;
