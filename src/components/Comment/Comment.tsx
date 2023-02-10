import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {backgroundColor, textColorPrimary} from "../../styles/colors";
import {IComment} from "../../models/response/CommentsResponse";
import {Context} from "../../index";

interface ICommentProps {
    comment: IComment
}

const Comment: FC<ICommentProps> = ({comment}) => {

    const {user} = useContext(Context)

    return (
        <Wrapper toMe={user.user().id !== comment.author?.id}>
            <Author>{comment.author?.name}</Author>
            <Content>{comment.content}</Content>
        </Wrapper>
    );
};

export default Comment;

interface IWrapper {
    toMe?: boolean
}

const Wrapper = styled.div<IWrapper>`
  padding: 8px 25px;
  max-width: 90%;
  min-height: 50px;
  flex-shrink: 0;
  background-color: ${backgroundColor};
  align-self: ${({toMe}) => toMe ? "flex-start" : "flex-end"};
  border-radius: 10px;
  margin-bottom: 5px;
  //min-width: 90%;
`
const Image = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`
const Author = styled.span`
  display: block;
  margin-bottom: 5px;
  color: ${textColorPrimary};
`
const Content = styled.div`
  // 45px - Icon width 
  //width: calc(100% - 45px);

`
