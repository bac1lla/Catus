import React, {FC} from 'react';
import {accentColor2, accentColor5, backgroundColor, menuColor} from "../styles/colors";
import styled from "styled-components";
import {HomeworkText, LittleText} from "../styles/fonts";
import {Col, Row} from "../styles/styled-components";
import CommentsIcon from "../assets/img/comments-icon.png"

interface IGroupTaskProps {
    type: string
    description: string
    groupDeadline: string
    comments: number
}

const GroupTask: FC<IGroupTaskProps> = ({type, description, groupDeadline, comments}) => {
    return (
        <GroupTaskStyled>
            <Col gap={6}>
                <GroupName>{type}</GroupName>
                <Description>{description}</Description>
                <Row justifyContent={"space-between"} gap={6}>
                    <GroupDeadline>{groupDeadline}</GroupDeadline>
                    <GroupComment>
                        {comments}
                        <img src={CommentsIcon} alt=""/>
                    </GroupComment>
                </Row>
            </Col>
        </GroupTaskStyled>
    );
};

export default GroupTask;

const GroupTaskStyled = styled.div`
  background-color: ${backgroundColor};
  padding: 8px 15px;
  border-radius: 20px;
`
const GroupName = styled(LittleText)`
  color: ${backgroundColor};
  background-color: ${accentColor2};
  padding: 2px 4px;
  border-radius: 20px;
  width: fit-content;
`
const Description = styled(LittleText)`
  color: ${menuColor};
`
const GroupDeadline = styled(LittleText)`
  border-radius: 20px;
  padding: 2px 4px;
  color: ${backgroundColor};
  background-color: ${accentColor5};
`
const GroupComment = styled(LittleText)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: ${backgroundColor};
  background-color: ${menuColor};
  padding: 2px 4px;

  && > img {
    width: 12px;
    height: 9px;
  }
`