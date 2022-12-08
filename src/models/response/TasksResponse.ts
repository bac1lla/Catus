import {IUser} from "../IUser";

export interface ITask {
    id: number;
    title: string;
    description: string;
    creator: IUser;
}
export interface ITasksList {
    tasks: ITask[];
    total: number;
}
export interface INewTask {
    title: string;
    description: string;
    type: string;
    dueDate: string;
}