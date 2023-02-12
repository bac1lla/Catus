import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import CommentsIcon from "../../assets/img/comments-icon.png"
import Task from "./style";
import {ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

interface IGroupTaskProps {
    getTask: (task: ITaskCard) => void,
    task: ITaskCard,
}

const GroupTask: FC<IGroupTaskProps> = ({task, getTask}) => {
    const {user} = useContext(Context)

    return (
        <Task
            draggable={user.user().role !== "STUDENT"}
            onDragStart={(e) => {
                e.dataTransfer.setData("taskId", task.id + "");
            }}
            onClick={() => {getTask(task);}}
        >
            <Task.Col>
                <Task.Name>{task.type}</Task.Name>
                <Task.Description>{task.title}</Task.Description>
                <Task.Row>
                    <Task.Deadline>{`${task.dueDate[2]}.${task.dueDate[1]}.${task.dueDate[0]}`}</Task.Deadline>
                    <Task.Comment>
                        {task.commentCount}
                        <img src={CommentsIcon} alt=""/>
                    </Task.Comment>
                </Task.Row>
            </Task.Col>
        </Task>
    );
};

export default observer(GroupTask);
