export interface IUser {
    id: number,
    login: string,
    name: string,
    title: string,
    group: IUserGroup
}

export interface IUserRequest {
    name: string;
    login: string;
    password: string;
    title: string;
    groupId?: string;
}

export interface IUserGroup {
    id: number,
    name: string,
    userCount: number
}