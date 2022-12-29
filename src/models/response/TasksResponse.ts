import {IUser} from "../IUser";

export interface ITask {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    creator: IUser;
}

export interface ITaskCard {
    id: number,
    title: string,
    type: string,
    dueDate: string,
    status: string,
    commentCount: number,
    description: string;
}

export interface ITasksList {
    tasks: ITaskCard[];
    total: number;
}

export interface INewTask {
    title: string;
    description: string;
    type: string;
    dueDate: string;
}