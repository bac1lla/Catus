import React, {FC} from 'react';
import styled from "styled-components";
import {SecondaryTitleText} from "../styles/fonts";
import {Col} from "../styles/styled-components";
import {accentColor3, accentColor4, backgroundColor, textColorPrimary, textColorSecondary} from "../styles/colors";
import GroupTask from "./GroupTask";

interface ITasksTabProps {
    tabName: string,
    tasks: {
        type: string
        description: string
        groupDeadline: string
        comments: number
    }[],
    editable?: boolean
}

const TasksTab: FC<ITasksTabProps> = ({tabName, tasks, editable = true}) => {
    return (
        <TasksTabStyled gap={20}>
            <TabName><SecondaryTitleText>{tabName}</SecondaryTitleText></TabName>
            {
                tasks.map(
                    ({
                         type,
                         groupDeadline,
                         description,
                         comments
                     }) =>
                        <GroupTask
                            key={comments}
                            type={type}
                            groupDeadline={groupDeadline}
                            description={description}
                            comments={comments}/>)
            }
            {
                editable ? <AddGroupTaskBtn>Add</AddGroupTaskBtn> : <></>
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
  height: 800px;
`

const TabName = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  color: ${backgroundColor};
  background-color: ${accentColor4};
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