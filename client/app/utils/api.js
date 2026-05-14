import axios from 'axios';

// The base URL 
const baseURL = "http://localhost:5000"; 

const Api = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'multipart/form-data',
    }
});

// error logging
Api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default Api;