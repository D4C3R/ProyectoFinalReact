import axios from 'axios';


export const fetchproductById = (id) => {
    return axios.get(`http://localhost:2077/product/${id}`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching product by ID:', error);
            throw error;
        });
};


export const createAppointment = (appointmentData) => {
    return axios.post('http://localhost:2077/appointments', appointmentData)
        .then(res => res.data)
        .catch(error => {
            console.error('Error creating appointment:', error);
            throw error;
        });
};
