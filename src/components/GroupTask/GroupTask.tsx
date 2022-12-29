import React, {Dispatch, FC, SetStateAction} from 'react';
import CommentsIcon from "../../assets/img/comments-icon.png"
import Task from "./style";
import {ITaskCard} from "../../models/response/TasksResponse";

interface IGroupTaskProps {
    getTask: (task: ITaskCard) => void,
    task: ITaskCard,
    setTask: Dispatch<SetStateAction<ITaskCard>>
}

const GroupTask: FC<IGroupTaskProps> = ({task, getTask, setTask}) => {
    return (
        <Task
            onClick={() => {getTask(task);setTask(task)}}
        >
            <Task.Col>
                <Task.Name>{task.type}</Task.Name>
                <Task.Description>{task.title}</Task.Description>
                <Task.Row>
                    <Task.Deadline>{task.dueDate}</Task.Deadline>
                    <Task.Comment>
                        {task.commentCount}
                        <img src={CommentsIcon} alt=""/>
                    </Task.Comment>
                </Task.Row>
            </Task.Col>
        </Task>
    );
};

export default GroupTask;
