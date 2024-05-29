import axios from "axios";

export const AxiosAuth = () => {
    const token = window.localStorage.getItem('token');
    return axios.create({
        headers: {
            authorization: token,
        }
    })
} 