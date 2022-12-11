import React, {FC} from 'react';
import styled from "styled-components";
import {SecondaryTitleText} from "../styles/fonts";
import {Col} from "../styles/styled-components";
import {accentColor3, accentColor4, backgroundColor, textColorPrimary, textColorSecondary} from "../styles/colors";
import GroupTask from "./GroupTask";
import {ITaskCard} from "../models/response/TasksResponse";

interface ITasksTabProps {
    tabName: string,
    tasks: ITaskCard[],
    color: string,
    editable?: boolean
}

const TasksTab: FC<ITasksTabProps> = ({tabName, tasks, editable = true , color}) => {
    return (
        <TasksTabStyled>
            <TabName color={color}><SecondaryTitleText>{tabName}</SecondaryTitleText></TabName>
            <TasksWrapper>

            {
                tasks.map(
                    ({
                         type,
                         commentCount,
                         title,
                         id,
                         dueDate
                     }) =>
                        <GroupTask
                            key={id}
                            type={type}
                            groupDeadline={dueDate}
                            description={title}
                            comments={commentCount}/>)
            }
            </TasksWrapper>
            {
                editable && <AddGroupTaskBtn>Add</AddGroupTaskBtn>
            }

        </TasksTabStyled>
    );
};

export default TasksTab;

const TasksTabStyled = styled(Col)`
  padding: 17px 11px;
  background-color: ${textColorSecondary};
  border-radius: 40px;
  width: 260px;
  height: 100%;
  gap: 20px;
`
const TasksWrapper = styled(Col)`
  border-radius: 20px;
  gap: 20px;
  overflow-y: scroll;
  height: 100%;
  
`
interface ITabName {
    color?: string
}
const TabName = styled.div<ITabName>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  color: ${backgroundColor};
  background-color: ${({color}) => color ? color : accentColor4};
  border-radius: 40px;
`
const AddGroupTaskBtn = styled.div`
  background-color: ${accentColor3};
  width: 100%;
  border: 2px solid ${textColorPrimary};
  color: ${backgroundColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
`