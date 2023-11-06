import axios from 'axios';


export const login = (email, password) => {
    return axios.get(`http://localhost:5000/customers?email=${email}&password=${password}`);
}

export const update = (id, body) => {
    return axios.put(`http://localhost:5000/customers/${id}`, body);
}

export const checkPassword = (email, password) => {
    return axios.get(`http://localhost:5000/customers?email=${email}&password=${password}`);
}


export const getAllCustomer = () => {
    return axios.get(`http://localhost:5000/customers`)
}

export const register = (body) => {
    return axios.post(`http://localhost:5000/customers`, body);
}

export const getUserByEmail = (email) => {
    return axios.get(`http://localhost:5000/customers?email=${email}`);
}

