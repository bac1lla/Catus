import {IUser} from "../IUser";

export interface IComment {
    id: number;
    content: string;
    taskId: string;
    author: IUser;
}

export interface ICommentsList {
    comments: IComment[],
    total: number
}