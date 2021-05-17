import React, {useEffect, useState} from 'react';
import ToggleSwitch from "./toggle/ToggleSwitch";
import Button from "../Button";
import UserService from "../../services/UserService";



function SettingsToggles() {

    const URL = 'http://localhost:8080/settings/?index=2'
    const [setting, setSetting] = useState(null)

    useEffect(()=>{
        UserService.getSettingsByID(2)
            .then(response =>{
                setSetting(response.data)
            })
    },[URL])
    if(setting){
        console.log("USER ID",setting.idUser)
        return (
            <div className='settings'>
                <div>
                    <p>Range of search</p>
                    <ToggleSwitch Name='a' checked={setting.range} />
                </div>
                <div>
                    <p>{'Expiration'}</p>
                    <ToggleSwitch Name='b' checked={setting.expiration} />
                </div>
                <div>
                    <p>Reset on login</p>
                    <ToggleSwitch Name='c' checked ={setting.resetOnLogin} />
                </div>
                <Button style={{
                    width:'18%',
                    marginLeft:'1em'
                }} type="submit" texts="Zapisz zmiany" />
            </div>        );

    }
    return (
        <div>
            error of file
        </div>
    )

    }

export default SettingsToggles;