import React, {FC} from 'react';
import styled from "styled-components";
import {backgroundColor} from "../../styles/colors";

interface IComment{
    comment: IComment
}

const Comment: FC<IComment> = ({comment}) => {
    return (
        <div>

        </div>
    );
};

export default Comment;

interface IWrapper {
    toMe?: boolean
}

const Wrapper = styled.div<IWrapper>`
  padding: 8px 15px;
  max-width: 90%;
  min-height: 80px;
  flex-shrink: 0;
  background-color: ${backgroundColor};
  align-self: ${({toMe}) => toMe ? "flex-start" : "flex-end" };
`
const Image = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`
const Content = styled.div`
  // 45px - Icon width 
  width: calc(100% - 45px);
  
`
