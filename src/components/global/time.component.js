//React imports
import React from "react";
//Router imports
// import {Link} from "react-router-dom";

export const  Time = (props) => {
    const slots = props.slots; 
    return (
        <>
            {
                slots.map((data) => {
                return <input type="button" style = {{display:"inline-block" , height:"40px",width:"150px",backgroundColor:"rgb(238,238,238)",
                                    margin:"5px 0 5px 30px",border:"none",fontSize:"20px",color:"rgb(39,39,39)"}} onClick={props.click} value={data}/>
              })
            }
        </>
    );
};
