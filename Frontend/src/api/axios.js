import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:6543',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

export default instance;