import axios from 'axios';


export const getAllCategories = () => {
    return axios.get(`http://localhost:5000/categories`);
}

export const getOneCategory = (id) => {
    return axios.get(`http://localhost:5000/categories/${id}`);
}

export const updateCategory = (id, data) => {
    return axios.put(`http://localhost:5000/categories/${id}`, data);
}

export const createCategory = (body) => {
    return axios.post('http://localhost:5000/categories', body);
}