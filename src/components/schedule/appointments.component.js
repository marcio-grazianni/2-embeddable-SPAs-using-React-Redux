import React, { useEffect, useState } from "react";
import { Link,Redirect } from "react-router-dom";
import { Button } from "../global/button.component.js";
import { useRef } from "react";
import { getAllAppointments, getAllInsurances } from "../../services/json-http.service";

export const Appointment = (props) => {
    
    const [confirm_app, setConfirm_app] = useState({text: "", color: "rgb(238,238,238)", icon:""});
    const [confirm_insu, setConfirm_insu] = useState({text1: "",text2:"", color: "rgb(238,238,238)", icon:""});

    const [appointmentRows, setappointmentRows] = useState([]);
    const [insuranceRows, setinsuranceRows] = useState([]);
    useEffect(() => {
        getAllAppointments().then(res => setappointmentRows(res.data));
        getAllInsurances().then(res => setinsuranceRows(res.data));
    }, []);

    function handleChange1 (e) {
        localStorage.setItem('appointment', e.target.value);
        setConfirm_app({color: "rgb(101, 34, 147)",text:"Invisalign"});

    };
    function handleChange2 (e) {
        localStorage.setItem('insurance', e.target.value);
        setConfirm_insu({color: "rgb(101, 34, 147)",text1:"Choose",text2:"Plan"});
    };
    
    if(confirm_app.text != "" && confirm_insu.text1 != ""){
        return <Redirect to="/appointment_slot"/>
    }

    return (
        <div className="container" style={{textAlign: "center"}}>
            <h2 style={{color:'rgb(79, 56, 132)'}}>Top Level Practice Name</h2>
                <hr style={{color: 'black'}}/>
            <div className = "appointment-container">
                <div className = "appointment-confirm">
                    <h4>What type of appointment whould you like to schedule?</h4>
                    <select onChange={handleChange1} style={{backgroundColor:"rgb(238,238,238)"}}>
                        <option value="appointment_empty"></option>
                        {appointmentRows.map((row) => (
                        <option value={row.name} key={row.id}>{row.name}</option>
                        ))}     
                    </select>
                    <div style={{backgroundColor:confirm_app.color, height : '40px',color:'white'}}>
                        <p style = {{padding:'10px'}}>{confirm_app.text}</p>
                    </div>
                    <h4 style = {{marginTop:'20px'}}>Choose your insurance</h4>
                    <select onChange={handleChange2} style={{backgroundColor:"rgb(238,238,238)",marginBottom:"10px"}}>
                        <option value="insurance_empty"></option>
                        {insuranceRows.map((row) => (
                        <option value={row.name} key={row.id}>{row.name}</option>
                        ))} 
                    </select>
                    <div style={{backgroundColor:confirm_insu.color, height : '40px',color:"white",paddingLeft:"10px"}}>
                        <p style = {{width:'100px',display:"inline-block"}}>{confirm_insu.text1}</p>
                        <p style = {{padding:"-5px",display:"inline-block"}}>{confirm_insu.text2}</p>
                    </div>                  
                </div>
            </div>
        </div>
    );
};