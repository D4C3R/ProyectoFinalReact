import axios from 'axios';

export const createproduct = (newData) => {
    return axios.post('http://localhost:2077/product', newData)
        .then(res => res.data)
        .catch(error => {
            console.error('Error creating making product:', error);
            throw error;
        });
};
