import React, {useState,useEffect} from "react";
// import {Link} from "react-router-dom";
import {PersonalProfile} from "./personalProfile.component.js";




export const  ScheduleResult = (props) => {
    const [width, setWindowWidth] = useState(0)
    useEffect(() => { 

        updateDimensions();

        window.addEventListener("resize", updateDimensions);
        return () => 
           window.removeEventListener("resize",updateDimensions);
    }, [])
    const updateDimensions = () => {
      const width = window.innerWidth
      setWindowWidth(width)
}
    return (
        <div className="container" style={{width:"80%",marginLeft: "10%",marginTop: "40px"}}>
            <h2 style={{color:'rgb(79, 56, 132)',textAlign:"center"}}>{JSON.parse(localStorage.getItem('location_name'))}</h2>
                    <hr style={{color: 'black'}}/>
            <div style = {{margin:"20px 0 20px 0",height:"80%",float:"left",width:"100%"}}>
                <div style={{paddingLeft:"10%",backgroundColor:"white",height:"120px",paddingTop:"20px",marginBottom:"20px"}}>
                    <div style={{width:"26%",display:"inline-block"}}>
                        <PersonalProfile providerName={localStorage.getItem('providerName')}/>
                    </div>
                    <div style={{color:"rgb(79,56,132)",display:"inline-block",width:"70%"}}>
                        <p style={ width > 1023 ? {fontSize:"200%",marginLeft:"20px"}: {fontSize:"150%"}}>{localStorage.getItem("result_weekday")},{localStorage.getItem("result_month")} {localStorage.getItem("result_day")} {localStorage.getItem("result_date")}</p>
                    </div>
                </div>
                <div style={{height:"300px",borderRadius:"100px 100px 100px 20px",backgroundColor:"white",paddingTop:"130px",textAlign:"center",color:"rgb(79,56,132)"}}>
                    <h1>Your Appointment has been scheduled!</h1>
                    <h3 style={{fontSize:"130%"}}>Appointment updates will be sent via text.</h3>
                </div>
            </div>
        </div>    
    );
};
