export interface IUser {
    id: number,
    login: string,
    name: string,
    title: string,
    group: {
        id: number,
        name: string
    } | null
    role: string,
    token?: string
}

export interface IUserRequest {
    name: string;
    login: string;
    password: string;
    title: string;
    group?: null | {
        id: number,
        name: string
    }
    groupId?: number
}

export interface IUserGroup {
    id: number,
    name: string,
    userCount: number
}