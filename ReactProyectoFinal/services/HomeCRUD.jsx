import axios from 'axios'; 
export const fetchproduct = () => {
    return axios.get('http://localhost:2077/product')
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching product:', error);
            throw error;
        });
};
