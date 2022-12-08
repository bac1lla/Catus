import {IUser, IUserRequest} from "../models/IUser";
import Api from "../http";
import {IAllUsers} from "../models/response/ProjectsResponse";

export default class UsersService {

    static async fetchUser(userId: string): Promise<IUser> {
        return Api.get<IUser>(`/users/${userId}`)
    }

    static async refreshUser(userId: string, body: Partial<IUserRequest>): Promise<IUser> {
        return Api.put<IUser>(`/users/${userId}`, body)
    }

    static async deleteUser(userId: string): Promise<void> {
        return Api.delete(`/users/${userId}`)
    }

    static async changeUser(userId: string, body: Partial<IUserRequest>): Promise<IUser> {
        return Api.patch(`/users/${userId}`, body)
    }

    static async fetchAllUsers(): Promise<IAllUsers> {
        return Api.get<IAllUsers>(`/users`)
    }

    static async createUser(user: IUserRequest): Promise<IUser> {
        return Api.post<IUser>(`users`, user)
    }

}