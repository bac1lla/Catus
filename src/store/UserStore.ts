import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {IUser, IUserGroup, IUserRequest} from "../models/IUser";
import {IAllUsers} from "../models/response/ProjectsResponse";
import UsersService from "../services/UsersService";

export default class UserStore {

    constructor() {
        makeAutoObservable(this)
    }

    async login(email: string, password: string) {
        try {
            const response = await AuthService.login(email, password)
            this.setUser(response)
            // localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            this.setRole("Student")
            // console.log(response.id)
            // this.setUser(response)
        } catch (e) {
            // console.log(e.response?.data?.message)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            // localStorage.removeItem("token")
            this.setAuth(false)
            this.setUser({
                id: 0,
                login: "",
                name: "",
                title: "",
                group: {
                    id: 0,
                    name: "",
                    userCount: 0
                }
            })
        } catch (e) {
            // console.log(e.response?.data?.message)
        }
    }

    async registration(email: string, password: string, name: string, role: string) {
        try {
            const response = await AuthService.registration(email, password, name, role)
            this.setUser(response)
            this.setAuth(true)
            this.setRole(role)
        } catch (e) {
            // console.log(e.response?.data?.message)
        }
    }

    async checkAuth() {
        this.setIsLoading(true)
        try {
            // const response = await AuthService.che
            // localStorage.setItem("token", response.data.accessToken)
            this.setAuth(true)
            // this.setUser(response)
        } catch (e) {
            // console.log(e.response?.data?.message)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchUser(userId: string) {
        try {
            this.setIsLoading(true)
            const response = await UsersService.fetchUser(userId)
            this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async refreshUser(userId: string, body: Partial<IUserRequest>) {
        try {
            this.setIsLoading(true)
            const response = await UsersService.refreshUser(userId, body)
            this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteUser(userId: string) {
        try {
            this.setIsLoading(true)
            await UsersService.deleteUser(userId)
            this.setAuth(false)
            this.setUser({
                id: 0,
                login: "",
                name: "",
                title: "",
                group: {} as IUserGroup
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async changeUser(userId: string, body: Partial<IUserRequest>) {
        try {
            this.setIsLoading(true)
            const response = await UsersService.changeUser(userId, body)
            this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchAllUsers() {
        try {
            this.setIsLoading(true)
            const response = await UsersService.fetchAllUsers()
            this.setUsersList(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async createUser(user: IUserRequest) {
        try {
            this.setIsLoading(true)
            const response = await UsersService.createUser(user)
            this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public user(): IUser {
        return this._user
    }

    private setUser(user: IUser) {
        this._user = user
    }

    public usersList(): IAllUsers {
        return this._usersList
    }

    private setUsersList(usersList: IAllUsers) {
        this._usersList = usersList
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    private setIsLoading(bool: boolean) {
        this._isLoading = bool
    }

    public role(): string {
        return this._role
    }

    private setRole(role: string) {
        this._role = role
    }

    public isAuth(): boolean {
        return this._isAuth
    }

    private setAuth(bool: boolean) {
        this._isAuth = bool
    }

    private _user: IUser = {
        id: 0,
        login: "",
        name: "",
        title: "",
        group: {} as IUserGroup
    }
    private _usersList: IAllUsers = {
        users: [],
        total: 0
    }
    private _role: string = "student"
    private _isAuth: boolean = false
    private _isLoading: boolean = false
}
