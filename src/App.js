import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Locations from "./components/schedule/locations.component";
import { Appointment } from "./components/schedule/appointments.component";
import { AppointmentSlot } from "./components/schedule/appointmentSlot.component";
import { ScheduleResult } from "./components/schedule/scheduleResult.component";

const App = () => {
    return (
      <div className="container mt-3">
          <div className="location-header" style={{textAlign: "center"}}>
              <h2>Logo here</h2>
          </div>
          <Router>
            <Switch>
                <Appointment path="/appointment"/>
                <AppointmentSlot path="/appointmentSlot"/>
                <ScheduleResult path="/scheduleResult"/>
                <Locations path="/"/>
            </Switch>    
          </Router>
          <div className="footer" style={{textAlign: "center"}}>
              <p style={{display:'inline-block',color:'rgb(79, 56, 132)'}}>
              powered by <b style={{display:'inline-block',fontSize :"30px"}}>Logo here</b>
              </p>
          </div>
      </div>
    );
}

export default App;
