import {IUser} from "../models/IUser";
import Api, {API_URL} from "../http";
import $api from "../http";
import axios from 'axios'

interface ILogin {
    token: string
    user: IUser
}

export default class AuthService {
    static async login(login: string, password: string): Promise<ILogin> {
        // return Api.post<IUser>(`/login`, {email, password})
        return axios.post<ILogin>(`${API_URL}/login`, {login, password})
            .then(response => response.data)
    }

    static async registration(login: string, password: string, name: string, role: string): Promise<ILogin> {
        return axios.post<ILogin>(`${API_URL}/register`, {login, password, name, role})
            .then(response => response.data)
    }

    static async logout(): Promise<void> {
        return $api.delete(`/logout`)
    }

}