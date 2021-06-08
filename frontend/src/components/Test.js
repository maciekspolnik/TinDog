import React, {Component, useEffect, useState} from 'react';
import '../css/Login.css';
import '../css/main.css'
import UserService from "../services/user.service";

const Test = () => {

    const [content, setContent] = useState("");


    useEffect(() => {
        UserService.getUserDetailsById(1).then(
            (response) => {
                console.log(response.data);
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);
            }
        );
    }, []);

        return (
            <React.Fragment>
                <div>{content.dog_name}</div>
            </React.Fragment>
        );

}

export default Test;




