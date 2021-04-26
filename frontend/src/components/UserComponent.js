import React from 'react';
import UserService from "../services/UserService";


class UserComponent extends React.Component {

    tableStyles={
        color:'white',
        width:'80%',
        font:"Segoe UI",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5vh",
        verticalAlign:'middle'
    }

    photoStyle={
        height:'100px'
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
                <table className={"table table-stripped"} style={this.tableStyles}>
                    <thead style={{fontWeight:"bold",fontSize:"20px",textAlign:'center'}}>
                        <tr>
                            <td className='cell'>Zdjęcie</td>
                            <td style={{verticalAlign:'middle'}}>Imię Psa</td>
                            <td className='cell'>Imię i Nazwisko</td>
                            <td className='cell'>Kontakt</td>
                        </tr>
                    </thead>
                    <tbody style ={{textAlign:'center', fontSize:"20px"}}>
                    {this.state.users.map(user=>
                            <tr key = {user.id}>
                                <td className='cell'><img style={this.photoStyle} src={user.dog_photo_url} alt={''}/></td>
                                <td className='cell'>{user.dogName}</td>
                                <td className='cell'>{user.firstName+' '+user.lastName}</td>
                                <td className='cell'>{user.contact}</td>
                            </tr>
                                ) }

                    </tbody>
                </table>

            </React.Fragment>
        );
    }


}
export default UserComponent;