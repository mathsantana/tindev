import axios from 'axios';

// Default server = localhost
const SERVER = '192.168.15.4';

const api = axios.create(
    {baseURL: `http://${SERVER}:3333`}
);

export default api;