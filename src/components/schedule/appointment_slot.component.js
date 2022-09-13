//React imports
import React,{ useEffect, useState } from "react";
//Router imports
import {Link} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";
import ReactDatePicker from "react-datepicker";
import {PersonalInformation} from "./personal_information.component.js";
import {Button} from "../global/button.component.js";
import { getAllAppointment_slots} from "../../services/json-http.service";
import "react-datepicker/dist/react-datepicker.css";
import DatePagination from "react-date-pagination";



export const  AppointmentSlot = (props) => {

    const [date, setDate] = useState({year: new Date().getFullYear(), month: new Date().toLocaleString("en-us", { month: "long" }), day: "", weekday: ""});
    const [day, setDay] = useState({activePage:1});


    const defaultValues = {
      Native: "",
      TextField: "",
      Select: "",
      ReactSelect: { value: "vanilla", label: "Vanilla" },
      Checkbox: false,
      switch: false,
      RadioGroup: "",
      numberFormat: 123456789,
      AntdInput: "Test",
      AntdCheckbox: true,
      AntdSwitch: true,
      AntdSlider: 20,
      AntdRadio: 1,
      downShift: "apple",
      AntdSelect: "",
      MUIPicker: (new Date()).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}),
      country: { code: "AF", label: "Afghanistan", phone: "93" },
      ChakraSwitch: true,
      reactMaskInput: ""
    };

    const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
    const [data, setData] = useState(null);

    const [providernameRows, setproviderRows] = useState([]);
    // const [insuranceRows, setinsuranceRows] = useState([]);
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
      { date: "2018-06-01" },
      { date: "2018-06-02" },
      { date: "2018-06-03" },
      { date: "2018-06-04" },
      { date: "2018-06-05" },
      { date: "2018-06-06" },
      { date: "2018-06-07" },
      { date: "2018-06-08" },
      { date: "2018-06-09" }
    ])

    const handleClick = (e) => {
        localStorage.setItem('result_date', e.target.value);
    }
  
    return (
        <div className="container" style={{width:"80%",marginTop: "40px",marginLeft:"10%"}}>
            <h2 style={{color:'rgb(79, 56, 132)',textAlign:"center"}}>
                {JSON.parse(localStorage.getItem('location_name'))}
            </h2>
                <hr style={{color: 'black'}}/>
            <div className = "date-book" style={{marginBottom:"20px",textAlign:"center"}} >
                <div style={{backgroundColor:"white"}}>
                    <div style={{width:"30%",textAlign:"center",display:"inline-block"}}>
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
                    <div style={{width:"70%",textAlign : "center",display:"inline-block"}}>
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
            <PersonalInformation key={idx} providerName={row.provider_name} av_date={row.next_available_date} slots= {row.slots} click={(e) => handleClick(e)}/>
                 ))}
            <div style={{width:"100%"}}>
                <Link style={{textDecoration: 'none'}} to={'/appointment'}>
                    <Button btnText = "Back"/>
                </Link>
                <span style = {{marginLeft:"40%"}}></span>
                <Link style={{textDecoration: 'none'}} to={'/schedule_result'}>
                    <Button btnText = "Continue"/>
                </Link>
            </div>
            
        </div>
    );
};
