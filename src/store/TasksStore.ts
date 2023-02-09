import {makeAutoObservable} from "mobx";
import {ITasksList, INewTask, ITask} from "../models/response/TasksResponse";
import {IUser} from "../models/IUser";
import TasksService from "../services/TasksService";


export default class TasksStore {

    constructor() {
        makeAutoObservable(this)
    }

    async fetchTask(projectId: number, taskId: number) {
        try {
            this.setIsLoading(true)
            const response = await TasksService.fetchTask(projectId, taskId)
            this.setTask(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async refreshTask(projectId: number, taskId: number, body: Partial<ITask>) {
        try {
            this.setIsLoading(true)
            const response = await TasksService.refreshTask(projectId, taskId, body)
            this.setTask(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteTask(projectId: number, taskId: number) {
        try {
            this.setIsLoading(true)
            await TasksService.deleteTask(projectId, taskId)
            this.setTask({} as ITask)
            const newTasksList = this.tasksList().tasks.filter(task => task.id !== taskId)
            this.setTasksList({
                tasks: newTasksList,
                total: newTasksList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchAllTasks(projectId: number): Promise<number | undefined> {
        try {
            this.setIsLoading(true)
            const response = await TasksService.fetchAllTasks(projectId)
            this.setTasksList(response)
            return response.total
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async createTask(projectId: number, body: INewTask) {
        try {
            this.setIsLoading(true)
            const newTask = await TasksService.createTask(projectId, body)
            this.setTask(newTask)
            const newTaskList = await TasksService.fetchAllTasks(projectId)
            this.setTasksList(newTaskList)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public task(): ITask {
        return this._task;
    }

    private setTask(value: ITask) {
        this._task = value;
    }

    public tasksList(): ITasksList {
        return this._tasksList;
    }

    private setTasksList(value: ITasksList) {
        this._tasksList = value;
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    private setIsLoading(value: boolean) {
        this._isLoading = value;
    }

    private _task: ITask = {
        id: 0,
        title: "",
        description: "",
        creator: {} as IUser,
        dueDate: "",
        type: ""
    }
    private _tasksList: ITasksList = {
        tasks: [],
        total: 0
    }
    private _isLoading: boolean = false


}