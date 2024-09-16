import axios from 'axios';

export const createCita = (newData) => {
    return axios.post('http://localhost:2077/products', newData)
        .then(res => res.data)
        .catch(error => {
            console.error('Error creating cita:', error);
            throw error;
        });
};
