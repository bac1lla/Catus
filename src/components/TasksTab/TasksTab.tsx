import React, {FC, useContext, useState} from 'react';
import styled from "styled-components";
import {SecondaryTitleText} from "../../styles/fonts";
import {Column} from "../../styles/styled-components";
import {accentColor3, accentColor4, backgroundColor, textColorPrimary, textColorSecondary} from "../../styles/colors";
import GroupTask from "../GroupTask/GroupTask";
import {ITaskCard} from "../../models/response/TasksResponse";
import Modal from "../Modal/Modal";
import TaskDetail from "../TaskDetail/TaskDetail";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useParams} from "react-router";

interface ITasksTabProps {
    tabName: string,
    tasks: ITaskCard[],
    color: string,
    editable?: boolean
}

const TasksTab: FC<ITasksTabProps> = ({tabName, tasks, editable = true , color}) => {
    const [showTaskDetail, setShowTaskDetail] = useState<boolean>(false)
    const [currentTask, setCurrentTask] = useState<ITaskCard>({} as ITaskCard)
    const Store = useContext(Context)
    const params = useParams()

    const getTask = async (task: ITaskCard) => {
        setCurrentTask(task)
        await Store.tasks.fetchTask(Number(params.id), task.id)
        setShowTaskDetail(true)
    }

    const createTask = () => {
        setCurrentTask({} as ITaskCard)
        setShowTaskDetail(true)
    }

    return (
        <TasksTabStyled
            onDrop={(e) => {
                const taskId = e.dataTransfer.getData("taskId");
                Store.tasks.refreshTask(Number(params.id), Number(taskId), {
                    status: tabName
                })
            }}
            onDragOver={(e) => e.preventDefault()}
        >
            <TabName color={color}><SecondaryTitleText>{tabName}</SecondaryTitleText></TabName>
            <TasksWrapper>
            {
                tasks ? tasks.map(
                    (task) =>
                        <GroupTask
                            key={task.id}
                            task={task}
                            getTask={getTask}
                        />) : <></>
            }
            </TasksWrapper>
            {
                editable && Store.user.user().role !== "STUDENT" ?
                <AddGroupTaskBtn onClick={createTask}>Add</AddGroupTaskBtn> : <></>
            }
            <Modal show={showTaskDetail} setShow={setShowTaskDetail}>
                <TaskDetail
                    setShow={setShowTaskDetail}
                    task={currentTask}
                    status={tabName}
                />
            </Modal>
        </TasksTabStyled>
    );
};

export default observer(TasksTab);

const TasksTabStyled = styled(Column)`
  padding: 17px 11px;
  background-color: ${textColorSecondary};
  border-radius: 20px;
  min-width: 260px;
  //width: 40%;
  height: 100%;
  gap: 20px;
`
const TasksWrapper = styled(Column)`
  border-radius: 20px;
  gap: 20px;
  overflow-y: auto;
  height: 100%;
  padding: 0 5px;
  
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
  border-radius: 15px;
`
const AddGroupTaskBtn = styled.div`
  background-color: ${accentColor3};
  width: 100%;
  //border: 2px solid ${textColorPrimary};
  color: ${backgroundColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  box-shadow: 1px 1px 0 0 ${textColorPrimary};
`