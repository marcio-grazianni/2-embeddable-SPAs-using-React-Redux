import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router } from 'react-router-dom';

import Locations from "./components/schedule/locations.component";
import { Appointment } from "./components/schedule/appointments.component";
import { Insurance } from "./components/schedule/insurance.component";
import { AppointmentSlot } from "./components/schedule/appointment_slot.component";
import { ScheduleResult } from "./components/schedule/schedule_result.component";
const App = () => {
    return (
      <div className="container mt-3">
          <div className="location-header" style={{textAlign: "center"}}>
              <h2>Logo here</h2>
          </div>
          <Router>
            <Switch>
                <Appointment path="/appointment"/>
                <Insurance path="/insurance_option"/>
                <AppointmentSlot path="/appointment_slot"/>
                <ScheduleResult path="/schedule_result"/>
                <Locations path="/"/>
            </Switch>    
          </Router>
          <div className="footer" style={{textAlign: "center"}}>
              <p style={{display:'inline-block',color:'rgb(79, 56, 132)'}}>
              powered by<b style={{display:'inline-block'}}>Logo here</b>
              </p>
          </div>
      </div>
    );
}

export default App;
