import React, {useEffect, useState} from 'react';
import {createNewMatch, getUserDetailsById} from "../services/user.service";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

const Main = (props) => {


    const [content, setContent] = useState("");
    let number = Number(localStorage.getItem("number"))
    //let default_data = {dog_name:"Upsik", img_url:"./img/azor.jpg", owner:"XD", contact:"none"};
    const { user: currentUser } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);
    let middle;


    useEffect(() => {
        getUserDetailsById(number).then(
            (response) => {
                setContent(response.data)
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
    }, ["http://localhost:8080/api/test/idetails?index="+number]);

    if(!currentUser){
        return <Redirect to="/login"/>;
    }

    const handlePlus = (e) => {
        e.preventDefault();
        setLoading(true);
        createNewMatch(currentUser.id,number)
            .then(() => {
                console.log(number)
                localStorage.setItem("number",(number+1).toString())
                props.history.push("/");
                window.location.reload();

            })
                .catch(() => {
                    setLoading(false);
                });
        return true;
    };


    const handleMinus = () =>{
        localStorage.setItem("number",(number+1).toString())
        props.history.push("/");
        window.location.reload();

    }


        if(content!=null){
            middle = (
                <div className='middle'>
                    <div
                        className='name_block'>
                        {content.dog_name}
                    </div>
                    <img
                        className='banner'
                        src={content.img_url}
                        alt={content.dog_name}
                    />
                </div>
            )
        } else {
            middle = (
                <div className='middle'>
                    <div style = {{
                        marginTop: '1em',
                        fontSize:'30px',
                        fontWeight:'bold'}}>
                        Brak nowych matchy
                    </div>
                <div className='banner'
                     style={{
                         fontWeight:'normal',
                         fontsize:'20px'}}>
                    Skontaktuj się z połączonymi osobami lub spróbuj później
                </div>
                </div>
            )
        }



        return (
            <React.Fragment>
                <body>
                <div className="main-container">
                    {middle}
                    <div className="bottom">
                        <div className="swipe_block">
                            <button
                                disabled={loading}
                                onClick={handlePlus}
                                className="swipe_click"
                                style={{marginLeft: "1em"}}>
                                <img className="icon"
                                     alt=""
                                     src={"./icons/plus.png"}/>
                            </button>
                            <button
                                onClick={handleMinus}
                                className="swipe_click"
                                style={{marginRight: "1em"}}>
                                <img className="icon"
                                     alt=""
                                     src={"./icons/minus.png"}/>
                            </button>

                        </div>
                    </div>
                </div>
                </body>
            </React.Fragment>
        );

}

export default Main;
