import {IUser} from "../IUser";

export interface IProject {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    creator: IUser
    userCount: number;
    taskCount: number
}

export interface IAllUsers {
    users: IUser[];
    total: number;
}

export interface IProjectCard {
    id: number,
    title: string;
    description: string;
    userCount: number;
}

export interface IProjectsList {
    projects: IProject[];
    total: number;
}