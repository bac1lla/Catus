import Api from "../http";
import {IProjectsList, IAllUsers, IProject, IProjectCard} from "../models/response/ProjectsResponse";

export default class ProjectsService {

    static async fetchProject(userId: number, projectId: number): Promise<IProject> {
        return Api.get<IProject>(`/users/${userId}/projects/${projectId}`)
    }

    static async refreshProject(userId: number, projectId: number, body: Partial<IProject>): Promise<IProject> {
        return Api.put<IProject>(`/users/${userId}/projects/${projectId}`, body)
    }

    static async deleteProject(userId: number, projectId: number): Promise<void> {
        return Api.delete(`/users/${userId}/projects/${projectId}`)
    }

    static async getAllUsersInProject(userId: number, projectId: number): Promise<IAllUsers> {
        return Api.get<IAllUsers>(`/users/${userId}/projects/${projectId}/users`)
    }

    static async addMember(userId: number, projectId: number, memberId: number): Promise<IAllUsers> {
        return Api.put<IAllUsers>(`/users/${userId}/projects/${projectId}`, {userId: memberId})
    }

    static async fetchAllProjects(userId: number): Promise<IProjectsList> {
        return Api.get<IProjectsList>(`/users/${userId}/projects/`)
    }

    static async createNewProject(userId: number, body: Partial<IProjectCard>): Promise<IProjectCard> {
        return Api.post<IProjectCard>(`/users/${userId}/projects/`, body)
    }

}