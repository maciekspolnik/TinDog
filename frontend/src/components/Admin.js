import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Admin = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if(!currentUser){
    return <Redirect to="/login"/>;
  }

  return (
    <div className="main-container">
      <div style={{
        display: "flex",
        flexDirection: "column",
        background: "white",
        padding: "2em",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
        <div>{"ID UŻYTKOWNIKA     :"+currentUser.id}</div>
        <div>{"NAZWA UŻYTKOWNIKA  :"+currentUser.username}</div>
        <div>{"ROLE UŻYTKOWNIKA   :"+currentUser.roles}</div>
        <div>{"TYP TOKENA DOSTĘPU :"+currentUser.tokenType}}</div>
        <div>{"TOKEN DOSTĘPU      :"+currentUser.accessToken.substring(0,30)+"..."}</div>
      </div>
    </div>
  );
};

export default Admin;
