//React imports
import React,{ useEffect,useState } from "react";
//Router imports
import {Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import {PersonalInformation} from "./personalInformation.component.js";
import {Button} from "../global/button.component.js";
import { getAllAppointment_slots} from "../../services/json-http.service";
import "react-datepicker/dist/react-datepicker.css";
import DatePagination from "react-date-pagination";



export const  AppointmentSlot = (props) => {

    const [date, setDate] = useState({year: new Date().getFullYear(), month: new Date().toLocaleString("en-us", { month: "long" }), day: "", weekday: ""});
    const [day, setDay] = useState({activePage:1});
 
    const defaultValues = {
      MUIPicker: (new Date()).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}),
    };

    const { control } = useForm({ defaultValues });

    const [providernameRows, setproviderRows] = useState([]);
    // const [insuranceRows, setinsuranceRows] = useState([]);

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

    useEffect(() => {
        getAllAppointment_slots().then(res => setproviderRows(res.data));
        // getAllInsurances().then(res => setinsuranceRows(res.data));
        const date = new Date();
        const year = date.getFullYear();
        const month =date.toLocaleString("en-us", { month: "long" });
        const day = date.toLocaleString("en-us", { day: "2-digit" });
        const dayOfWeek = date.getDay();    
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
        
        setDate({year: year,month: month,day: day,weekday: weekday});

        var list = [];
        for(var i = date.getDate(); i < 31; i++){
            var item = year + '-' + date.getMonth() + '-' + i;
            list.push({date: item});
        }
        setDaysArray(list);
    }, []);

    const handlePageChange = (pageNumber) => {
        setDay({ activePage: pageNumber });
    };

   function onChange(date, dateString) {
        const year =date.getFullYear();
        const month =date.toLocaleString("en-us", { month: "long" });
        const day = date.toLocaleString("en-us", { day: "2-digit" });
            const dayOfWeek = new Date(date).getDay();    
        const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
        
        setDate({year: year,month: month,day: day,weekday: weekday});

        localStorage.setItem('result_weekday', weekday);
        localStorage.setItem('result_month', month);
        localStorage.setItem('result_day', day);

        // setDate({activePage: pageNumber});
        // console.log(date.getDate());
        var list = [];
        for(var i = date.getDate(); i < 31; i++){
            var item = year + '-' + date.getMonth() + '-' + i;
            list.push({date: item});
        }
        setDaysArray(list);
    }

    const [daysArray, setDaysArray] = useState([
      
    ])

    return (
        <div className="container" style={{width:"80%",marginTop: "40px",marginLeft:"10%"}}>
            <h2 style={{color:'rgb(79, 56, 132)',textAlign:"center"}}>
                {JSON.parse(localStorage.getItem('location_name'))}
            </h2>
                <hr style={{color: 'black'}}/>
            <div className = "date-book" style={{marginBottom:"20px",textAlign:"center"}} >
                <div style={{backgroundColor:"white"}}>
                    <div style={ width > 1023 ? {width:"30%",textAlign:"center",display:"inline-block"} : {width:"100%",textAlign:"center",display:"inline-block"}}>
                        <p style={{color:"gray"}}>AVAILABILITY</p>
                        <Controller
                            control={control}
                            name="ReactDatepicker"
                            render={({ field }) => (
                              <ReactDatePicker
                                className="input"
                                placeholderText="SELECT DATE"
                                onChange={onChange}
                              >
                              </ReactDatePicker>
                            )}
                          />
                    </div>
                    <div style={ width > 1023 ? {width:"70%",textAlign:"center",display:"inline-block"} : {width:"100%",textAlign:"center",display:"inline-block"}}>
                        <p>{date.month} {date.year}</p>
                        <DatePagination
                          activePage={day.activePage}
                          itemsCountPerPage={1}
                          totalItemsCount={daysArray.length}
                          days={daysArray}
                          pageRangeDisplayed={5}
                          onChange={handlePageChange}
                          itemClass="item213"
                          activeClass="asdf"
                        />
                    </div>    
                </div>    
            </div>
                {providernameRows.map((row, idx) => (
            <PersonalInformation key={idx} providerName={row.provider_name} av_date={row.next_available_date} slots= {row.slots} pName={row.provider_name} p_id={row.provider_id}/>
                 ))}
            <div style={{width:"100%"}}>
                <Link style={{textDecoration: 'none'}} to={'/appointment'}>
                    <Button btnText = "Back"/>
                </Link>
                <span style = {{marginLeft:"40%"}}></span>
                <Link style={{textDecoration: 'none'}} to={'/scheduleResult'}>
                    <Button btnText = "Continue"/>
                </Link>
            </div>
            
        </div>
    );
};
