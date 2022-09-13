import React from "react";
import avatar from '../../avatar.png';

export const  PersonalProfile = (props) => {
    return (
        <div className = "profile" >
            <img src={avatar} width="70px" height="70px" alt="avatar" display = "inline-block"
                 style={{float:"left",marginRight:"10px"}}></img>
            <p>DENTIST</p>
            <p>Dr. {props.providerName}</p>
        </div>
    );
};
