import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import Task from "./style"
import {ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";
import Comments from "../Comments/Comments";
import {Context} from "../../index";
import {useParams} from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";

interface IDetailTask {
    task: ITaskCard;
    setShow: Dispatch<SetStateAction<boolean>>;
    status: string
}

const statusArr = ["OVERDUE", "ACTIVE", "PLANNED", "FINISHED"]

const TaskDetail: FC<IDetailTask> = ({task, setShow, status}) => {

    const [change, setChange] = useState<boolean>(!task.id)
    const [name, setName] = useState<string>(task.title)
    const [type, setType] = useState<string>(task.type)
    const [statusTask, setStatus] = useState<string>(status)
    const [description, setDescription] = useState<string>(task.description)
    const {user, tasks} = useContext(Context)
    const params = useParams()
    const [date, setDate] = useState<number[]>([2023, 1, 1]);

    const handleDateChange = (newDate: number[]) => {
        setDate(newDate);
    };

    useEffect(() => {
        setChange(!task.id)
        if (!!task.id) {
            tasks.fetchTask(Number(params.id), task.id)
                .then(() =>
                    setDescription(tasks.task().description)
                )
            setName(task.title)
            setDate([2023, 1, 1])
            setType(task.type)
        }

        return () => {
            setDescription("")
            setName("")
            setDate([2023, 1, 1])
            setType("")
            setChange(!task.id)
            setStatus(status)
        }
    }, [task])

    const createTask = async (status: string) => {
        await tasks.createTask(Number(params.id), {
            "title": name,
            "description": description,
            "type": type,
            "status": statusTask.toUpperCase() || status.toUpperCase(),
            "dueDate": date
        }).finally(() =>
            setShow(false)
        )
    }

    const changeTask = async () => {
        await tasks.refreshTask(Number(params.id), task.id, {
            title: name,
            description: description,
            type: type,
            dueDate: date,
            status: statusTask.toUpperCase() || status.toUpperCase()
        }).finally(() =>
            setShow(false)
        )
    }

    const deleteTask = () => {
        tasks.deleteTask(Number(params.id), task.id).then(() => setShow(false))
    }

    const handleCLick = async () => {
        if (task.id) {
            await changeTask()
        } else {
            await createTask(status)
        }
        setChange(!change)
    }

    return (
        <Task>
            <Task.Row>
                <Task.Label>Task</Task.Label>
                <span>
                    {
                        ((user.user().role === "TEACHER") || (user.user().role === "ADMIN")) ?
                            change ?
                                <Task.Btn onClick={handleCLick}>Save</Task.Btn>
                                :
                                <Task.Btn onClick={() => setChange(!change)}>Change</Task.Btn>
                            :
                            ""
                    }
                    {
                        (user.user().role === "TEACHER") || (user.user().role === "ADMIN") ?
                            <Task.Btn onClick={deleteTask}>Delete</Task.Btn>
                            :
                            <></>
                    }
                    <Task.Btn onClick={() => setShow(false)}>Close</Task.Btn>
                </span>
            </Task.Row>
            <Task.Input
                disabled={!change}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Task.RowChange>
                <Task.Col>
                    <Task.Label>Description</Task.Label>
                    <Task.TextArea
                        disabled={!change}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Task.Col>
                <Task.Col>
                    <Task.Label>Type</Task.Label>
                    <Task.Input
                        disabled={!change}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <Task.Label>Status</Task.Label>
                    <Dropdown choices={statusArr} selected={statusTask} onChange={setStatus} disabled={!change}/>
                    <Task.Label>Date</Task.Label>
                    <DatePicker onChange={handleDateChange} disabled={!change}/>
                </Task.Col>
            </Task.RowChange>
            {
                task.id ?
                    <>
                        <Task.Label>Comments</Task.Label>
                        <Comments task={task}/>
                    </>
                    : <></>
            }
        </Task>
    );
};

export default observer(TaskDetail);
