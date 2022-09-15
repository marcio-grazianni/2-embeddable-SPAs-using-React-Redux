//React imports
import React  from "react";
//Router imports
// import {Link} from "react-router-dom";
import {PersonalProfile} from "./personalProfile.component.js";
import {useState} from "react"

export const  PersonalInformation = (props) => {   

const [visible, setVisible]=useState(4);
const moreDetails = (e) => {
    setVisible(props.slots.length); 
}
const handleClick = (e) => {
    localStorage.setItem('result_date', e.target.value);
    localStorage.setItem('providerName', e.target.getAttribute("pName"));
    e.target.style.backgroundColor = "rgb(127,127,127)" ;
} 

    return (
        <div style = {{margin:"20px 0 20px 0",backgroundColor:"white",borderRadius:"100px 100px 100px 20px",float:"left",width:"100%"}}>
            <div style={{width:"30%",display:"inline-block",paddingLeft:"10%"}}>
                <PersonalProfile providerName= {props.providerName}/>
                <div className="available">
                    <h3 style={{color:'rgb(79, 56, 132)'}}>Next availability:</h3>
                    <p style={{color:'rgb(79, 56, 132)'}}>{props.av_date}</p>
                </div>
            </div>
            <div className="personal-info" style = {{width:"50%",display:"inline-block"}}>
                {props.slots.slice(0,visible).map((data,idx) => {
                    return <input type="button" className = "timeBtn" style = {{display:"inline-block" , height:"25px",width:"100px",backgroundColor:"rgb(238,238,238)",
                                        margin:"5px 0 5px 30px",border:"none",fontSize:"20px",color:"rgb(39,39,39)"}} value={data} pname={props.pName} key={idx} onClick={(e) => handleClick(e)}/>                
                    })
                }
                <input type="button" style = {{display:"inline-block" , height:"25px",width:"100px",backgroundColor:"rgb(238,238,238)",
                                    margin:"5px 0 5px 30px",border:"none",fontSize:"20px",color:"rgb(39,39,39)" }} p_id={props.p_id} onClick={(e) => moreDetails(e)} value="More"/>
            </div>
        </div>
    );
};
