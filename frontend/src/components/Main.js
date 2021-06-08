import React, {useEffect, useState} from 'react';
import '../css/Login.css';
import '../css/main.css'
import {getUserDetailsById} from "../services/user.service";

const Main = () => {


    let number = 1;
    const [content, setContent] = useState("");

    useEffect(() => {
        getUserDetailsById(1).then(
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

    const handlePlus = () =>{
        console.log("plus")
    }
    const handleMinus = () =>{
        console.log("minus")
    }

        return (
            <React.Fragment>
                <body>
                <div className="main-container">
                    <div className='middle'>
                        <div className='name_block'>{content.dog_name}</div>
                        <img className='banner' src={content.img_url} alt={content.dog_name}/>
                    </div>
                    <div className="bottom">
                        <div className="swipe_block">
                            <button onClick={handlePlus} className="swipe_click" style={{marginLeft: "1em"}}><img className="icon" alt="" src={"./icons/plus.png"}/></button>
                            <button onClick={handleMinus} className="swipe_click" style={{marginRight: "1em"}}><img className="icon" alt="" src={"./icons/minus.png"}/></button>

                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );

}

export default Main;
