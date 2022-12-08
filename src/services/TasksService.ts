import Api from "../http";
import {ITasksList, INewTask, ITask} from "../models/response/TasksResponse";

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

    static async fetchAllTasks(projectId: number): Promise<ITasksList> {
        return Api.get<ITasksList>(`/projects/${projectId}/tasks`)
    }

    static async createTask(projectId: number, body: INewTask): Promise<ITask> {
        return Api.post<ITask>(`/projects/${projectId}/tasks`, body)
    }


}