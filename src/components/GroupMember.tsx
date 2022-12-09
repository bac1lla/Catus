import React, {FC} from 'react';
import styled from "styled-components";
import {accentColor2, backgroundColor, mainColor} from "../styles/colors";
import {LittleText} from "../styles/fonts";
import {Row, Col} from "../styles/styled-components";

interface IGroupMemberProps{
    name: string;
    group: string;
}

const GroupMember: FC<IGroupMemberProps> = ({name,group}) => {
    return (
        <GroupMemberStyled>
            <GroupMemberIcon>{name[0]}</GroupMemberIcon>
            <Col gap={6}>
                <GroupMemberText>{name}</GroupMemberText>
                <GroupMemberText>{group}</GroupMemberText>
            </Col>
        </GroupMemberStyled>
    );
};

export default GroupMember;

const GroupMemberStyled = styled(Row)`
  padding: 7px;
  background-color: ${backgroundColor};
  ${LittleText};
  align-items: flex-start;
  gap: 7px;
  width: 100%;
  border-radius: 10px;
  //width: 183px;
`
const GroupMemberIcon = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${accentColor2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${backgroundColor};
  font-size: 20px;
`
const GroupMemberText = styled(LittleText)`
  color: ${mainColor};
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`
