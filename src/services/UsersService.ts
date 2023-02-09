import {IUser, IUserRequest} from "../models/IUser";
import Api from "../http";
import {IAllUsers} from "../models/response/ProjectsResponse";
import $api from "../http";

export default class UsersService {

    static async fetchUser(userId: number): Promise<IUser> {
        return $api.get<IUser>(`/users/${userId}`)
            .then(response => response.data)
    }

    static async refreshUser(userId: number, body: Partial<IUserRequest>): Promise<IUser> {
        return $api.patch<IUser>(`/users/${userId}/groups`, body)
            .then(response => response.data)
    }

    static async deleteUser(userId: number): Promise<void> {
        return $api.delete(`/users/${userId}`)
            .then(response => response.data)
    }

    static async changeUser(userId: number, body: Partial<IUserRequest>): Promise<IUser> {
        return $api.put(`/users/${userId}`, body)
            .then(response => response.data)
    }

    static async fetchAllUsers(): Promise<IAllUsers> {
        return $api.get<IAllUsers>(`/users`)
            .then(response => response.data)
    }

    static async createUser(user: IUserRequest): Promise<IUser> {
        return $api.post<IUser>(`users`, user)
            .then(response => response.data)
    }

}