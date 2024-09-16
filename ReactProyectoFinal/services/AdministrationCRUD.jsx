import axios from 'axios'; 

// Existing fetchproducts function
export const fetchproducts = () => {
    return axios.get('http://localhost:2077/products')
        .then(res => res.data)
        .catch(error => {
            console.error('Error fetching products:', error);
            throw error;
        });
};

// New deleteProducts function
export const deleteProduct = (id) => {
    return axios.delete(`http://localhost:2077/products/${id}`)
        .then(res => res.data)
        .catch(error => {
            console.error('Error deleting product:', error);
            throw error;
        });
};
