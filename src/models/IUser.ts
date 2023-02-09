export interface IUser {
    id: number,
    login: string,
    name: string,
    title: string,
    groupID: number,
    role: string
}

export interface IUserRequest {
    name: string;
    login: string;
    password: string;
    title: string;
    groupId?: number;
}

export interface IUserGroup {
    id: number,
    name: string,
    userCount: number
}