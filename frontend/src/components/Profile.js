import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./../App.css"

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container separate">
      <div className="my_block">
        <h3>
          Profil użytkownika: <strong>{currentUser.username}</strong>
        </h3>
      </div>
        <div className="my_block">
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
        </div>
    </div>
  );
};

export default Profile;
