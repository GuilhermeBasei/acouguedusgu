import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5204/v1/",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Connection": "close",
    }
})

export default api;