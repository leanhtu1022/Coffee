import axios from 'axios';


export const getAllProducts = () => {
    return axios.get(`http://localhost:5000/products`);
}


export const createProduct = (data) => {
    return axios.post('http://localhost:5000/products', data)
}

export const getDetailProduct = (id) => {
    return axios.get(`http://localhost:5000/products/${id}`);
}

export const updateProduct = (id, data) => {
    return axios.put(`http://localhost:5000/products/${id}`, data)
}
