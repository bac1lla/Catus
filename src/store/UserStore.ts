import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import {IUser, IUserGroup, IUserRequest} from "../models/IUser";
import {IAllUsers} from "../models/response/ProjectsResponse";
import UsersService from "../services/UsersService";
import axios from "axios";
import {API_URL} from "../http";

export default class UserStore {

    constructor() {
        makeAutoObservable(this)
    }

    async login(login: string, password: string) {
        try {
            this.setIsLoading(true)
            // const response = await AuthService.login(email, password)
            const response = await AuthService.login(login, password)
            console.log(response)
            localStorage.setItem("token", response.token)
            localStorage.setItem("id", response.user.id + "")
            this.setAuth(true)
            console.log("user", response.user)
            this.setUser(response.user)
            // console.log(response.user);
            // this.setRole("Student")
            // this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async logout() {
        try {
            this.setIsLoading(true)
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            this.setAuth(false)
            this.setUser({
                id: 0,
                login: "",
                name: "",
                title: "",
                groupID: 0,
                role: ""
            })
            await AuthService.logout()
        } catch (e) {
            // console.log(e)
            // console.log(e.response?.data?.message)
        } finally {
            this.setIsLoading(false)
        }
    }

    async registration(login: string, password: string, name: string, role: string) {
        try {
            this.setIsLoading(true)
            const response = await AuthService.registration(login, password, name, role.toUpperCase())
            localStorage.setItem('token', response.token)
            localStorage.setItem("id", response.user.id + "")
            console.log(response)
            this.setAuth(true)
            this.setUser(response.user)
            // this.setRole(role)
        } catch (e) {
            console.log(e)
            // console.log(e.response?.data?.message)
        } finally {
            this.setIsLoading(false)
        }
    }

    async checkAuth() {
        try {
            this.setIsLoading(true)
            const response = await axios.get(`${API_URL}/token/refresh`, {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}})
            localStorage.setItem("token", response.data.token)
            this.setUser(response.data.user)
            this.setAuth(true)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchUser(userId: number) {
        try {
            this.setIsLoading(true)
            const response = await UsersService.fetchUser(userId)
            console.log(response)
            this.setUser(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async refreshUser(userId: number, body: Partial<IUserRequest>) {
        try {
            this.setIsLoading(true)
            await UsersService.refreshUser(userId, body)
            await this.fetchAllUsers()
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteUser(userId: number) {
        try {
            this.setIsLoading(true)
            await UsersService.deleteUser(userId)
            localStorage.removeItem("token")
            this.setAuth(false)
            this.setUser({
                id: 0,
                login: "",
                name: "",
                title: "",
                groupID: 0,
                role: ""
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async changeUser(userId: number, body: Partial<IUserRequest>) {
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
            console.log(response);
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
            // localStorage.setItem('token', Math.random() + "")
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
        // if (localStorage.token) {
        //     this.setAuth(true)
        // } else this.setAuth(false)

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
        groupID: 0,
        role: ""
    }
    private _usersList: IAllUsers = {
        users: [],
        total: 0
    }
    private _role: string = "Teacher"
    private _isAuth: boolean = false
    private _isLoading: boolean = false
}
