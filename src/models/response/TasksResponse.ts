import {IUser} from "../IUser";

export interface ITask {
    id: number;
    title: string;
    description: string;
    creator: IUser;
}
export interface IAllTasks {
    tasks: ITask[];
    total: number;
}
export interface ICreatedTask {
    title: string;
    description: string;
    type: string;
    dueDate: string;
}