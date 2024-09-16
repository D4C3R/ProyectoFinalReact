import axios from 'axios';

// Function to fetch data by ID
export const fetchCitaById = (id) => {
    return axios.get(`http://localhost:2077/products/${id}`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching cita:', error);
            throw error;
        });
};

// Function to update data by ID
export const updateCita = (id, updatedData) => {
    return axios.put(`http://localhost:2077/products/${id}`, updatedData)
        .then(res => res.data)
        .catch(error => {
            console.error('Error updating cita:', error);
            throw error;
        });
};