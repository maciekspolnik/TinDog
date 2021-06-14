import React, { useState, useEffect } from "react";
import {useSelector} from "react-redux";

const Admin = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const [content, setContent] = useState("");

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
