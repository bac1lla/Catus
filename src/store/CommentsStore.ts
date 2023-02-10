import {makeAutoObservable} from "mobx";
import {IComment, ICommentsList} from "../models/response/CommentsResponse";
import Api from "../http";
import {IUser} from "../models/IUser";
import {IAllUsers} from "../models/response/ProjectsResponse";
import UsersService from "../services/UsersService";
import CommentsService from "../services/CommentsService";


export default class CommentsStore {

    constructor() {
        makeAutoObservable(this)
    }

    async fetchComment(projectId: number, taskId: number, commentId: number) {
        try {
            this.setIsLoading(true)
            const response = await CommentsService.fetchComment(projectId, taskId, commentId)
            this.setComment(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async changeComment(projectId: number, taskId: number, commentId: number, content: string) {
        try {
            this.setIsLoading(true)
            const response = await CommentsService.changeComment(projectId, taskId, commentId, content)
            const newCommentsList = this.commentsList().comments.map(comment => comment.id === commentId ? response : comment)
            this.setCommentsList({
                comments: newCommentsList,
                total: newCommentsList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async deleteComment(projectId: number, taskId: number, commentId: number) {
        try {
            this.setIsLoading(true)
            await CommentsService.deleteComment(projectId, taskId, commentId)
            const newCommentsList = this.commentsList().comments.filter(comment => comment.id !== commentId)
            this.setCommentsList({
                comments: newCommentsList,
                total: newCommentsList.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async fetchCommentsList(projectId: number, taskId: number) {
        try {
            this.setIsLoading(true)
            const response = await CommentsService.fetchCommentsList(projectId, taskId)
            this.setCommentsList(response)
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    async createComment(projectId: number, taskId: number, content: string) {
        try {
            this.setIsLoading(true)
            const response = await CommentsService.createComment(projectId, taskId, content)
            const newComments = [...this.commentsList().comments, response]
            this.setCommentsList({
                comments: newComments,
                total: newComments.length
            })
        } catch (e) {
            console.log(e)
        } finally {
            this.setIsLoading(false)
        }
    }

    public comment(): IComment {
        return this._comment
    }

    private setComment(comment: IComment) {
        this._comment = comment
    }

    public commentsList(): ICommentsList {
        return this._commentsList
    }

    private setCommentsList(commentsList: ICommentsList) {
        this._commentsList = commentsList
    }

    public isLoading(): boolean {
        return this._isLoading;
    }

    private setIsLoading(bool: boolean) {
        this._isLoading = bool
    }

    private _comment: IComment = {
        id: 0,
        content: "",
        taskId: "",
        authorId: 0
    }
    private _commentsList: ICommentsList = {
        comments: [],
        total: 0
    }
    private _isLoading: boolean = false

}