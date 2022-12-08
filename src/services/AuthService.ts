import {IUser} from "../models/IUser";
import Api from "../http";

export default class AuthService {
    static async login(email: string, password: string): Promise<IUser> {
        return Api.post<IUser>(`/login`, {email, password})
    }

    static async registration(email: string, password: string): Promise<IUser> {
        return Api.post<IUser>(`/login`, {email, password})
    }

    static async logout(): Promise<void> {
        return Api.delete(`/logout`)
    }

}