import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import "./../css/Login.css"
import "./../css/main.css"

import {postUserDetails} from "../services/user.service"
import {useSelector} from "react-redux";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        To pole jest wymagane.
      </div>
    );
  }
};

const Profile = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [dogName, setDogName] = useState("");
    const [owner, setOwner] = useState("");
    const [dogPhoto, setDogPhoto] = useState("");
    const [contact, setContact] = useState("");
    const [loading, setLoading] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);


    const onChangeDogName = (e) => {
        const dogName = e.target.value;
        setDogName(dogName);
    };

    const onChangeOwner = (e) => {
        const owner = e.target.value;
        setOwner(owner);
    };

    const onChangeDogPhoto = (e) => {
        const dogPhoto = e.target.value;
        setDogPhoto(dogPhoto);
    };

    const onChangeContact = (e) => {
        const contact = e.target.value;
        setContact(contact);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        if (checkBtn.current.context._errors.length === 0) {
            postUserDetails(currentUser.id, dogName, owner, dogPhoto, contact)
                .then(() => {
                    props.history.push("/profile");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };


    return (
   <div className="login-container">
       <div className="banner">Zmiana danych profilu</div>
        <Form className='login' onSubmit={handleLogin} ref={form} >


            <Input
              type="text"
              className="inputs"
              name="dog_name"
              placeholder="Imie Psa"
              value={dogName}
              onChange={onChangeDogName}
              validations={[required]}
            />

            <Input
              type="text"
              className="inputs"
              name="owner"
              placeholder="Imie i Nazwisko Właściciela"
              value={owner}
              onChange={onChangeOwner}
              validations={[required]}
            />

            <Input
              type="text"
              className="inputs"
              name="dog_photo"
              placeholder="Zdjęcie Psa"
              value={dogPhoto}
              onChange={onChangeDogPhoto}
              validations={[required]}
            />



            <Input
              type="text"
              className="inputs"
              placeholder="Kontakt"
              name="contact"
              value={contact}
              onChange={onChangeContact}
              validations={[required]}
            />

            <button style={{display: "initial"}} className="my_button">
              Submit
            </button>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
  );
};

export default Profile;
