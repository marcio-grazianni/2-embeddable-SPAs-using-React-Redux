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
export const getCountry = (id) => {
    return http.get(`/locations/${id}`);
};

export const createCountry = (data) => {
    return http.post("/locations", data);
};

export const updateCountry = (id, data) => {
    return http.put(`/locations/${id}`, data);
};

export const removeCountry = (id) => {
    return http.delete(`/locations/${id}`);
};  