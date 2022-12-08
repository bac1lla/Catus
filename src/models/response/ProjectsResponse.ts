import {IUser} from "../IUser";

export interface IProject {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: string;
    creatorId: string;
    userCount: number;
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
    projects: IProjectCard[];
    total: number;
}