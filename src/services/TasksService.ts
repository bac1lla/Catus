import Api from "../http";
import {ITasksList, INewTask, ITask} from "../models/response/TasksResponse";
import $api from "../http";

export default class TasksService {

    static async fetchTask(projectId: number, taskId: number): Promise<ITask> {
        return $api.get<ITask>(`/projects/${projectId}/tasks/${taskId}`)
            .then(response => response.data)
    }

    static async refreshTask(projectId: number, taskId: number, body: Partial<ITask>): Promise<ITask> {
        return $api.put<ITask>(`/projects/${projectId}/tasks/${taskId}`, body)
            .then(response => response.data)
    }

    static async changeStatus(projectId: number, taskId: number, body: Partial<ITask>): Promise<ITask> {
        return $api.patch<ITask>(`/projects/${projectId}/tasks/${taskId}`, body)
            .then(response => response.data)
    }

    static async deleteTask(projectId: number, taskId: number): Promise<void> {
        return $api.delete(`/projects/${projectId}/tasks/${taskId}`)
            .then(response => response.data)
    }

    static async fetchAllTasks(projectId: number): Promise<ITasksList> {
        return $api.get<ITasksList>(`/projects/${projectId}/tasks`)
            .then(response => response.data)
    }

    static async createTask(projectId: number, body: INewTask): Promise<ITask> {
        return $api.post<ITask>(`/projects/${projectId}/tasks`, body)
            .then(response => response.data)
    }


}