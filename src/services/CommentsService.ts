import {IComment, ICommentsList} from "../models/response/CommentsResponse";
import Api from "../http";

export default class CommentsService {

    static async fetchComment(projectId: number, taskId: number, commentId: number): Promise<IComment> {
        return Api.get<IComment>(`/projects/${projectId}/tasks/${taskId}/comments/${commentId}`)
            .then(response => response.data)
    }

    static async changeComment(projectId: number, taskId: number, commentId: number, content: string): Promise<IComment> {
        return Api.put<IComment>(`/projects/${projectId}/tasks/${taskId}/comments/${commentId}`, {content: content})
            .then(response => response.data)
    }

    static async deleteComment(projectId: number, taskId: number, commentId: number): Promise<void> {
        return Api.delete(`/projects/${projectId}/tasks/${taskId}/comments/${commentId}`)
            .then(response => response.data)
    }

    static async fetchCommentsList(projectId: number, taskId: number): Promise<ICommentsList> {
        return Api.get<ICommentsList>(`/projects/${projectId}/tasks/${taskId}/comments`)
            .then(response => response.data)
    }

    static async createComment(projectId: number, taskId: number, content: string): Promise<IComment> {
        return Api.post<IComment>(`/projects/${projectId}/tasks/${taskId}/comments`, {content: content})
            .then(response => response.data)
    }
}