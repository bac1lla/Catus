export default class Api {

    private static _SERVER_URL = "http://127.0.0.1:3002"
    private static _API_VERSION = "api/v1"
    private static _API_URL = `${this._SERVER_URL}/${this._API_VERSION}`
    private static headers = {
        'Content-type': 'application/json; charset=UTF-8',
        // "Access-Control-Allow-Headers": "Content-Type, Origin, Accept, Authorization, Content-Length, X-Requested-With",
        // "Access-Control-Allow-Methods": "GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS",
        // "Access-Control-Allow-Origin": "*"
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