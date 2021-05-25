import React, {useState, useEffect} from "react";
import axios from "axios";

function Middle() {

        const URL = 'http://localhost:8080/users/?index=3'
        const [user, setUser] = useState(null)

        useEffect(()=>{
            axios.get(URL)
            .then(response =>{
                setUser(response.data)
            })
            console.log(user)
        },[URL])

        if(user){
            return (
                <div className='middle'>
                    <div className='name_block'>{user.dogName}</div>
                    <img className='banner' src={user.dog_photo_url} alt={user.dogName}/>
                </div>
            )
        }
    return (
        <div className='middle'>
            error of file
        </div>
    )
}

export default Middle;