import React from 'react';
import '../css/Login.css';
import '../css/main.css'
import Table from "./Table";

const List = () =>{

    const bannerStyle={
        color:'white',
        width:'80%',
        font:"Segoe UI",
        fontSize:"30px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "5vh"
    }

        return (
            <React.Fragment>
                <head>
                    <title>ALL USERS</title>
                </head>
                <body>
                <div className="main-container" style={{height:"100vh"}}>

                    <div style={bannerStyle}>Oto twoja lista towarzyszy spacerowych</div>
                    <Table/>

                </div>
                </body>
            </React.Fragment>
        );
}

export default List;




