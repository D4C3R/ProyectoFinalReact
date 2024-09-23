import axios from 'axios';
export const fetchproductById = (id) => {
    return axios.get(`http://localhost:2077/product/${id}`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching product:', error);
            throw error;
        });
};
export const updateproduct = (id, updatedData) => {
    return axios.put(`http://localhost:2077/product/${id}`, updatedData)
        .then(res => res.data)
        .catch(error => {
            console.error('Error updating product:', error);
            throw error;
        });
};