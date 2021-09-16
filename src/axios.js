import axios from 'axios';

const instance = axios.create({
    baseURL: 'Enter your API URL Here'
});


export default instance;