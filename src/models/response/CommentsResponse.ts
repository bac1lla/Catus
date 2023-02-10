import {IUser} from "../IUser";

export interface IComment {
    id: number;
    content: string;
    taskId: string;
    authorId: number;
}

export interface ICommentsList {
    comments: IComment[],
    total: number
}