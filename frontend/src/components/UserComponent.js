import React from 'react';
import UserService from "../services/UserService";


class UserComponent extends React.Component {

    tableStyles={
        color:'white',
        width:'80%',
        font:"Segoe UI",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5vh"
    }

    constructor(props) {
        super(props);
        this.state = {users:[]}
    }

    componentDidMount() {
        UserService.getUsers().then((response)=>{this.setState({users: response.data})})
    }
    render(){
        return (
            <React.Fragment>
                <table className={" table table-stripped"} style={this.tableStyles}>
                    <thead style={{fontWeight:"bold",fontSize:"20px"}}>
                        <tr>
                            <td>Imię</td>
                            <td>Nazwisko</td>
                            <td>Kontakt</td>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user=>
                            <tr key = {user.id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.contact}</td>
                            </tr>
                                ) }

                    </tbody>
                </table>

            </React.Fragment>
        );
    }


}
export default UserComponent;