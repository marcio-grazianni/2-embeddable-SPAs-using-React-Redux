//React imports
import React  from "react";
//Router imports
// import {Link} from "react-router-dom";
import {Time} from "../global/time.component.js";
import {PersonalProfile} from "./personal_profile.component.js";


export const  PersonalInformation = (props) => {   

    return (
        <div style = {{margin:"20px 0 20px 0",backgroundColor:"white",borderRadius:"100px 100px 100px 20px",float:"left",width:"100%"}}>
            <div style={{width:"30%",display:"inline-block",paddingLeft:"10%"}}>
                <PersonalProfile providerName= {props.providerName}/>
                <div className="available">
                    <h3>Next availability:</h3>
                    <p>{props.av_date}</p>
                </div>
            </div>
            <div style = {{width:"50%",display:"inline-block"}}>
                <Time slots={props.slots} click={props.click}/>          
            </div>
        </div>
    );
};
