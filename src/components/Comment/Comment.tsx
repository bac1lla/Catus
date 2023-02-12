import React, {FC, useContext} from 'react';
import {IComment} from "../../models/response/CommentsResponse";
import {Context} from "../../index";
import Wrapper from "./style";

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({comment}) => {

    const {user} = useContext(Context)

    return (
        <Wrapper toMe={user.user().id !== comment.author?.id}>
            <Wrapper.Author>{comment.author?.name}</Wrapper.Author>
            <Wrapper.Content>{comment.content}</Wrapper.Content>
        </Wrapper>
    );
};

export default Comment;
