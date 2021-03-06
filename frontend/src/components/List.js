import React from 'react';
import Table from "./Table";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const List = () =>{

    const { user: currentUser } = useSelector((state) => state.auth);

    if(!currentUser){
        return <Redirect to="/login"/>;
    }

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
                <body>
                <div className="main-container">

                    <div style={bannerStyle}>Oto twoja lista towarzyszy spacerowych</div>
                    <Table dataAboutId = {currentUser.id}/>

                </div>
                </body>
            </React.Fragment>
        );
}

export default List;




