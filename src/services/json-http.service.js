import http from "./http-common";

export const getAllLocations = () => {
    return http.get("/locations");
};
export const getAllAppointments = () => {
    return http.get("/appointments");
};
export const getAllInsurances = () => {
    return http.get("/insurances");
};
export const getAllAppointment_slots = () => {
    return http.get("/appointment_slot");
};
