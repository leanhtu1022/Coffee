import axios from 'axios';


export const getAllProducts = () => {
    return axios.get(`http://localhost:5000/products`);
}

export const getAllProductsLimit = (filter) => {
    return axios.post(`http://localhost:5000/products/limit`, filter);
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

// export const deleteProduct = (id) => {
//     return axios.put(`http://localhost:5000/products/delete/${id}`, {
//         headers: {
//             'token': `Bearer ${localStorage.getItem('token')}`
//         }
//     })
// }