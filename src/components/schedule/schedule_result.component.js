import React from "react";
// import {Link} from "react-router-dom";
import {PersonalProfile} from "./personal_profile.component.js";

export const  ScheduleResult = (props) => {
    return (
        <div className="container" style={{width:"80%",marginLeft: "10%",marginTop: "40px"}}>
            <h2 style={{color:'rgb(79, 56, 132)',textAlign:"center"}}>{JSON.parse(localStorage.getItem('location_name'))}</h2>
                    <hr style={{color: 'black'}}/>
            <div style = {{margin:"20px 0 20px 0",height:"80%",float:"left",width:"100%"}}>
                <div style={{paddingLeft:"10%",backgroundColor:"white",height:"120px",paddingTop:"20px",marginBottom:"20px"}}>
                    <div style={{width:"20%",display:"inline-block"}}>
                        <PersonalProfile providerName="Name1"/>
                    </div>
                    <div style={{color:"rgb(79,56,132)",display:"inline-block",marginLeft:"15%"}}>
                        <h1 >{localStorage.getItem("result_weekday")},{localStorage.getItem("result_month")} {localStorage.getItem("result_day")} {localStorage.getItem("result_date")}</h1>
                    </div>
                </div>
                <div style={{height:"300px",borderRadius:"100px 100px 100px 20px",backgroundColor:"white",paddingTop:"130px",textAlign:"center",color:"rgb(79,56,132)"}}>
                    <h1>Your Appointment has been scheduled!</h1>
                    <h3>Appointment updates will be sent via text.</h3>
                </div>
            </div>
        </div>    
    );
};
