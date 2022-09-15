//React imports
import React from "react";
//Router imports
// import {Link} from "react-router-dom";

export const  Button = (props) => {
    return (
        <button style = {{display:"inline-block",backgroundColor:"rgb(92,44,142)",width:"30%",height:"50px",
                        border:"none",fontSize:"20px",color:"white"}} >
                        {props.btnText}
        </button>
    );
};
