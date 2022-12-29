import {IProjectsList, IAllUsers, IProject} from "../models/response/ProjectsResponse";
import ProjectsService from "../services/ProjectsService";
import {makeAutoObservable} from "mobx";

export default class ProjectsStore {

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllProjects(userId: number) {
        try {
            const response = await ProjectsService.fetchAllProjects(userId)
            this.setProjectsList(response)
        } catch (e) {
            console.log(e)
        }
    }

    async fetchProjectById(userId: number, projectId: number) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.fetchProject(userId, projectId)
            this.setProject(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
        return this.project()
    }

    async deleteProject(userId: number, projectId: number) {
        try {
            this.setIsLoading(true)
            await ProjectsService.deleteProject(userId, projectId)
            const newProjectsList = this.projectsList().projects.filter(project => project.id !== projectId)
            this.setProjectsList({
                projects: newProjectsList,
                total: newProjectsList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async refreshProject(userId: number, projectId: number, body: Partial<IProject>) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.refreshProject(userId, projectId, body)
            this.setProject(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchAllUsersInProject(userId: number, projectId: number) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.getAllUsersInProject(userId, projectId)
            console.log(response)
            this.setAllUsers(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async addMember(userId: number, projectId: number, memberId: number) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.addMember(userId, projectId, memberId)
            const newUsersList = [...this.allUsers().users, ...response.users]
            this.setAllUsers({users: newUsersList, total: newUsersList.length})
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async createNewProject(userId: number, title: string, description: string) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.createNewProject(userId, {title: title, description: description})
            const newProjectsList = [...this.projectsList().projects, response]
            this.setProjectsList({
                projects: newProjectsList,
                total: newProjectsList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    public setIsLoading(value: boolean) {
        this._isLoading = value;
    }

    public project(): IProject {
        return this._project
    }

    private setProject(project: IProject) {
        this._project = project
    }

    public projectsList(): IProjectsList {
        return this._projectsList
    }

    private setProjectsList(projectsList: IProjectsList) {
        this._projectsList = projectsList
    }

    public allUsers(): IAllUsers {
        return this._allUsers
    }

    private setAllUsers(users: IAllUsers) {
        this._allUsers = users
    }

    private _project: IProject = {
        id: 0,
        title: "",
        description: "",
        status: "",
        createdAt: "",
        creatorId: "",
        userCount: 0
    }
    private _projectsList: IProjectsList = {
        projects: [],
        total: 0
    }
    private _allUsers: IAllUsers = {
        users: [],
        total: 0
    }
    _isLoading: boolean = false
}
