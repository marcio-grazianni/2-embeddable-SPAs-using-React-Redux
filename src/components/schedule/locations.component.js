import React, {useEffect, useState} from "react";
// import Button from "@material-ui/core/Button";
import {getAllLocations} from "../../services/json-http.service";
import { Location } from "./location.component";

const Locations = () => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getAllLocations().then(res => {setRows(res.data)});
    }, []);

    return (
        <>
            <Location rows={rows}/>
        </>
    );
};

export default Locations;
