import React, {FC, useContext, useEffect} from "react";
import {Context} from "../../index";
import {useParams} from "react-router";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

interface ICommentsListProps {
    taskId: number
}
const CommentsList: FC<ICommentsListProps> = ({taskId}) => {

    const {comments} = useContext(Context)
    const params = useParams()

    useEffect(() => {
        comments.fetchCommentsList(Number(params.id), taskId)
    }, [taskId])

    return (
        <List>
            {
                comments.commentsList().comments.map(comment => <p>{comment.content}</p>)
            }
        </List>
    )
}

export default observer(CommentsList)

const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`