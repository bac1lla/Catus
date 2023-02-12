import React, {Dispatch, FC, SetStateAction} from 'react';
import CommentsIcon from "../../assets/img/comments-icon.png"
import Task from "./style";
import {ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";

interface IGroupTaskProps {
    getTask: (task: ITaskCard) => void,
    task: ITaskCard,
}

const GroupTask: FC<IGroupTaskProps> = ({task, getTask}) => {
    return (
        <Task
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
