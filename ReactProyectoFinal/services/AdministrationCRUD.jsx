import axios from 'axios'; 
export const fetchproduct = () => {
    return axios.get('http://localhost:2077/product')
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching product:', error);
            throw error;
        });
};
export const deleteproduct = (id) => {
    return axios.delete(`http://localhost:2077/product/${id}`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
        });
};
