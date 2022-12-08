import {IUser} from "../IUser";

export interface IGroup {
    id: number;
    name: string;
    users: IUser[];
}

export interface IGroupMin {
    id: number;
    name: string;
    userCount: number;
}

export interface IGroupsList {
    groups: IGroupMin[];
    total: number
}