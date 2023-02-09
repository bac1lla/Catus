import axios from "axios"

export class Api {

    private static _SERVER_URL = "http://127.0.0.1:8080"
    private static _API_VERSION = "api/v1"
    private static _API_URL = `${this._SERVER_URL}/${this._API_VERSION}`
    private static headers = {
        accept: '*/*',
        'Content-type': 'application/json; charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
        "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
        // 'Access-Control-Allow-Origin': "http://127.0.0.1:8080",
        // mode: "no-cors",
        // Authorization: `${localStorage.getItem('token')}`
        Authorization: `Bearer   eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoiMSIsImV4cCI6MTY3NTc3NzU5NiwiaWF0IjoxNjc1NjkxMTk2LCJzY29wZSI6IkFETUlOIn0.JT2s_1511ESM570UqYJn5oRqNYKPGmoJey9uPdlH6ZS6TqDTyeKTkNdOlvefEoHf1_MKhFErlcQC_iw5H3jM2we_4IX7cU20ec5BQivKRTeEHDUtogqTMacT3oF9agLk6EJ7acko1Jobk20uD_yD363wgLKuuvbMmaM8uFDDDYAwTQwEjW-126KH4U7clau5yq9Dhhw7KBU_ColAdEipwZX8XIPheEzZ6NrUL0Id-MDGvHzLV2ObxLP2ceTmxE3f9JjC8ThgxGUURrvd_vucOjp3KZMzkBto6xsSgUYAektOSjiBDkZrXmMHgRbZdHwhw0l6inCRPnWSPYkMXm1jjw`
    }

    static async get<T>(url: string): Promise<T> {
        return fetch(this._API_URL + url)
            .then(response => response.json())
    }

    static async post<T>(url: string, body: any): Promise<T> {
        return fetch(this._API_URL + url, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(response => response.json())
    }

    static async put<T>(url: string, body: any): Promise<T> {
        return fetch(this._API_URL + url, {
            method: "PUT",
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(response => response.json())
    }

    static async delete(url: string): Promise<void> {
        return fetch(this._API_URL + url, {
            method: "DELETE",
            headers: this.headers
        }).then(response => response.json())
    }

    static async patch<T>(url: string, body: any): Promise<T> {
        return fetch(this._API_URL + url, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(body)
        }).then(response => response.json())
    }
}


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