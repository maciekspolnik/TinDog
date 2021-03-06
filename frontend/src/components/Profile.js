import React, { useState, useRef } from "react";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {postUserDetails} from "../services/user.service"
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

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

    let zmienna;
    const [dogName, setDogName] = useState("");
    const [owner, setOwner] = useState("");
    const [contact, setContact] = useState("");
    const [loading, setLoading] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);

    if(!currentUser){
        return <Redirect to="/login"/>;
    }

    const onChangeDogName = (e) => {
        const dogName = e.target.value;
        setDogName(dogName);
    };

    const onChangeOwner = (e) => {
        const owner = e.target.value;
        setOwner(owner);
    };

    const onChangeDogPhoto = (e) => {
        zmienna = e.target.files[0].name
        console.log(zmienna)
    };

    const onChangeContact = (e) => {
        const contact = e.target.value;
        setContact(contact);
    };

    const handleUpload = (e) => {
        e.preventDefault();

        setLoading(true);
        if (checkBtn.current.context._errors.length === 0) {
            postUserDetails(
                currentUser.id,
                dogName,
                owner,
                "./img/"+zmienna,
                contact)
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
        <Form className='login' autocomplete="off" onSubmit={handleUpload} ref={form} >


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
              placeholder="Imie i Nazwisko W??a??ciciela"
              value={owner}
              onChange={onChangeOwner}
              validations={[required]}
            />

            <Input
              type="file"
              className="inputs"
              name="dog_photo"
              placeholder="Zdj??cie Psa"
              onChange={onChangeDogPhoto}

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

            <button disabled={loading} style={{display: "initial"}} className="my_button">
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
