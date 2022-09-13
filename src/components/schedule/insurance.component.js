//React imports
import React from "react";
//Router imports
import {Link} from "react-router-dom";

export const  Insurance = (props) => {
    return (
        <div className="container" style={{textAlign: "center"}}>
            <h2 style={{color:'rgb(79, 56, 132)'}}></h2>
                <hr style={{color: 'black'}}/>
            <div className = "appointment-container">
                <div className = "appointment-confirm">
                    <h4>What type of appointment whould you like to schedule?</h4>
                    <select>
                        <option value="appointmentEmpty"></option>
                        <option value="appointmentOne">Appointment 1</option>
                        <option value="appointmentTwo">Appointment 2</option>
                        <option value="appointmentThree">Appointment 3</option>
                        <option value="appointmentFour">Appointment 4</option>
                    </select>
                    <div style={{backgroundColor:'rgb(101, 34, 147)',height : '40px'}}>
                        <p style = {{padding:'10px'}}>Invisallgn</p>
                    </div>
                    <h4 style = {{marginTop:'20px'}}>Choose your insurance</h4>
                    <select>
                        <option value="insuranceEmpty"></option>
                        <option value="insuranceOne">Insurance 1</option>
                        <option value="insuranceTwo">Insurance 2</option>
                        <option value="insuranceThree">Insurance 3</option>
                        <option value="insuranceFour">Insurance 4</option>
                    </select>
                    <div style={{backgroundColor:'rgb(101, 34, 147)', height : '40px'}}>
                        <p style = {{padding:'10px'}}>Choose</p>
                    </div>
                    <button>
                        <Link to={'/calendar'}>Button</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
