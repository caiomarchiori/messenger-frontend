import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_BASE_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning" : true
    }
});

export default api;