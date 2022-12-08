import {IAllProjects, IAllUsers, IProject} from "../models/response/ProjectsResponse";
import ProjectsService from "../services/ProjectsService";
import {makeAutoObservable} from "mobx";

export default class ProjectsStore {

    constructor() {
        makeAutoObservable(this)
    }

    async fetchAllProjects(userId: number) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.fetchAllProjects(userId)
            // console.log("response----------",response)
            this.setProjectsList(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
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
            console.log(newProjectsList)
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
            this.setAllUsers(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
        return this._allUsers
    }

    async addMember(userId: number, projectId: number, memberId: number) {
        try {
            this.setIsLoading(true)
            const response = await ProjectsService.addMember(userId, projectId, memberId)
            this.setProject(response)
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

    private setIsLoading(value: boolean) {
        this._isLoading = value;
    }

    public project(): IProject {
        return this._project
    }

    private setProject(project: IProject) {
        this._project = project
    }

    public projectsList(): IAllProjects {
        return this._projectsList
    }

    private setProjectsList(projectsList: IAllProjects) {
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
    private _projectsList: IAllProjects = {
        projects: [],
        total: 0
    }
    private _allUsers: IAllUsers = {
        users: [],
        total: 0
    }
    private _isLoading: boolean = false
}