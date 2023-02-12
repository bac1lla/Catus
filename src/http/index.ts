import axios from "axios"

const SERVER_URL = "http://127.0.0.1:8080"
const API_VERSION = "api/v1"
export const API_URL = `${SERVER_URL}/${API_VERSION}`


const $api = axios.create({
    // withCredentials: true,
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "http://127.0.0.1:8080",
        "Access-Control-Allow-Headers": "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
        "Access-Control-Allow-Credentials": "true",
        // mode: "no-cors"
    },
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(config => {
        return config
    },
    async error => {
        const originalRequest = error.config
        if (error?.response?.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await axios.get(`${API_URL}/token/refresh`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
                localStorage.setItem('token', response.data.token)
                return $api.request(originalRequest)
            } catch (e) {
                console.log(e)
            }
        }
        throw error
    }
)
export default $api