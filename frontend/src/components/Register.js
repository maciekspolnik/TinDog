import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        To pole jest wymagane.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        Ten mail nie jest poprawny
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Nazwa użytkownika musi mieć między 3 a 20 znaków.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        Hasło musi zawierać między 6 a 20 znaków.
      </div>
    );
  }
};

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (

      <div className="login-container">
        <div className="banner">Zarejestruj się</div>
        <Form className="register" onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
                <Input
                  type="text"
                  className="inputs"
                  placeholder="Nazwa Użytkownika"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />

                <Input
                  type="text"
                  className="inputs"
                  name="email"
                  placeholder="Adres Email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />

                <Input
                  type="password"
                  className="inputs"
                  placeholder="Hasło"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />

                <button className="my_button">Rejestracja</button>

            </div>
          )}

          {message && (
            <div className="form-group">
              <div
                  className={ successful ? "alert alert-success" : "alert alert-danger" }
                  role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton
              style={{ display: "none" }}
              ref={checkBtn} />
        </Form>
      </div>

  );
};

export default Register;
