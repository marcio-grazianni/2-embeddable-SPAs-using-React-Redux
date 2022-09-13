import React from "react";
import {Link} from "react-router-dom";
// import { Context } from "../../context.js";


export const Location = (props) => {
    const handleClick = (row) => {
        localStorage.setItem('location_id', JSON.stringify(row.id));
        localStorage.setItem('location_name', JSON.stringify(row.location));
    }

    return (
        <div className="container" style={{textAlign: "center"}}>
            <h2 style={{color:'rgb(79, 56, 132)'}}>Select your location</h2>
                <hr style={{color: 'black'}}/>
            <div className = "location-container1">
                {props.rows.map((row, idx) => (
                    <Link style={{textDecoration: 'none'}} to={'/appointment'} key={idx}>
                        <div className = "location-container2" key={row.id} onClick={() => handleClick(row)}>
                            <h2>{row.location}</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
