import Api from "../http";
import {IProjectsList, IAllUsers, IProject, IProjectCard} from "../models/response/ProjectsResponse";
import $api from "../http";
import {IUser} from "../models/IUser";

interface INewMember {
    id: number,
    title: string,
    description: string,
    createdAt: string,
    creatorId: number,
    userCount: number
}

export default class ProjectsService {

    static async fetchProject(userId: number, projectId: number): Promise<IProject> {
        return $api.get<IProject>(`/projects/${projectId}`)
            .then(response => response.data)
    }

    static async refreshProject(userId: number, projectId: number, body: Partial<IProject>): Promise<IProject> {
        return $api.put<IProject>(`/projects/${projectId}`, body)
            .then(response => response.data)
    }

    static async deleteProject(userId: number, projectId: number): Promise<void> {
        return $api.delete(`/projects/${projectId}`)
            .then(response => response.data)
    }

    static async getAllUsersInProject(userId: number, projectId: number): Promise<IAllUsers> {
        return $api.get<IAllUsers>(`/projects/${projectId}/users`)
            .then(response => response.data)
    }

    static async addMember(userId: number, projectId: number, memberId: number): Promise<IUser> {
        return $api.put<IUser>(`/projects/${projectId}/users`, {userId: memberId})
            .then(response => response.data)
    }

    static async fetchAllProjects(userId: number): Promise<IProjectsList> {
        return $api.get<IProjectsList>(`/projects`)
            .then(response => response.data)
    }

    static async createNewProject(userId: number, body: Partial<IProjectCard>): Promise<IProjectCard> {
        return $api.post<IProjectCard>(`/projects`, body)
            .then(response => response.data)
    }

    static async exitFromProject(userId: number, projectId: number): Promise<void> {
        return $api.delete(`/projects/${projectId}/users/${userId}`)
            // .then(response => response.data)
    }

}