//React imports
import React from "react";
import {useState}from "react"
//Router imports
// import {Link} from "react-router-dom";

export const  Time = (props) => {
    const slots = props.slots; 
    const [visible, setVisible]=useState(4);

    console.log(props.slots);
    return (
        <>
            {
                slots.slice(0,visible).map((data,idx) => {
                return <input type="button" className = "timeBtn" style = {{display:"inline-block" , height:"25px",width:"100px",backgroundColor:"rgb(238,238,238)",
                                    margin:"5px 0 5px 30px",border:"none",fontSize:"20px",color:"rgb(39,39,39)"}} onClick={props.click} value={data} pname={props.pName} key={idx}/>
              })
            }
        </>
    );
};
