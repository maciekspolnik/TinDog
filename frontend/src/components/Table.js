import React from 'react';
import {getList} from "../services/user.service";




class Table extends React.Component {

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
        this.state = {
            users:[],
            currentUser: this.props.dataAboutId
        }
        console.log(this.state.currentUser);
    }



    componentDidMount() {
            getList(this.state.currentUser)
            .then((response)=>{this.setState({users: response.data})})
    }
    render(){
        return (
            <React.Fragment>
                <table
                    className={"table table-stripped"}
                    style={this.tableStyles}>
                    <thead
                        style={{
                            fontWeight:"bold",
                            fontSize:"20px",
                            textAlign:'center'}}>
                        <tr>
                            <td
                                className='cell'>
                                Zdjęcie
                            </td>
                            <td
                                style={{verticalAlign:'middle'}}>
                                Imię Psa
                            </td>
                            <td
                                className='cell'>
                                Imię i Nazwisko
                            </td>
                            <td
                                className='cell'>
                                Kontakt
                            </td>
                        </tr>
                    </thead>
                    <tbody
                        style ={{
                            textAlign:'center',
                            fontSize:"20px"}}>
                    {
                        this.state.users.map(user=>
                            <tr key = {user.id}>
                                <td
                                    className='cell'>
                                    <img
                                        style={this.photoStyle}
                                        src={user.img_url}
                                        alt={''}/>
                                </td>
                                <td
                                    className='cell'>
                                    {user.dog_name}
                                </td>
                                <td
                                    className='cell'>
                                    {user.owner}
                                </td>
                                <td
                                    className='cell'>
                                    {user.contact}
                                </td>
                            </tr>
                                ) }

                    </tbody>
                </table>

            </React.Fragment>
        );
    }


}
export default Table;