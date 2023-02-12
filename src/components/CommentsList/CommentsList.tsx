import React, {FC, useContext, useEffect} from "react";
import {Context} from "../../index";
import {useParams} from "react-router";
import {observer} from "mobx-react-lite";
import Comment from "../Comment/Comment";
import List from "./style";

interface ICommentsListProps {
    taskId: number
}

const CommentsList: FC<ICommentsListProps> = ({taskId}) => {

    const {comments} = useContext(Context)
    const params = useParams()

    useEffect(() => {
        fetchComments()
    }, [taskId])

    const fetchComments = async () => {
        await comments.fetchCommentsList(Number(params.id), taskId)
    }

    return (
        <List>
            {
                comments.commentsList().comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </List>
    )
}

export default observer(CommentsList)
