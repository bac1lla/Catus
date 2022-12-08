import Api from "../http";
import {IAllTasks, ICreatedTask, ITask} from "../models/response/TasksResponse";

export default class TasksService {

    static async fetchTask(projectId: number, taskId: number): Promise<ITask> {
        return Api.get<ITask>(`/projects/${projectId}/tasks/${taskId}`)
    }

    static async refreshTask(projectId: number, taskId: number, body: Partial<ITask>): Promise<ITask> {
        return Api.put<ITask>(`/projects/${projectId}/tasks/${taskId}`, body)
    }

    static async deleteTask(projectId: number, taskId: number): Promise<void> {
        return Api.delete(`/projects/${projectId}/tasks/${taskId}`)
    }

    static async fetchAllTasks(projectId: number): Promise<IAllTasks> {
        return Api.get<IAllTasks>(`/projects/${projectId}/tasks`)
    }

    static async createTask(projectId: number, body: ICreatedTask): Promise<ITask> {
        return Api.post<ITask>(`/projects/${projectId}/tasks`, body)
    }


}