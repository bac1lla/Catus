import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useLayoutEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {
    accentColor4,
    accentColor5,
    backgroundColor,
    mainColor,
    textColorPrimary,
    textColorSecondary
} from "../../styles/colors";
import {ITask, ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";
import Comments from "../Comments/Comments";
import {Context} from "../../index";
import {useParams} from "react-router";
import Dropdown from "../Dropdown/Dropdown";
import DatePicker from "../DatePicker/DatePicker";

interface IDetailTask {
    onSave: (newTask: boolean) => void;
    task: ITaskCard;
    setShow: Dispatch<SetStateAction<boolean>>;
    status: string
    id: number
}

const statusArr = ["OVERDUE", "ACTIVE", "PLANNED", "FINISHED"]

const TaskDetail: FC<IDetailTask> = ({id, onSave, task, setShow, status}) => {

    const [change, setChange] = useState<boolean>(!task.id)
    const [name, setName] = useState<string>(task.title)
    const [type, setType] = useState<string>(task.type)
    const [statusTask, setStatus] = useState<string>(status)
    const [description, setDescription] = useState<string>(task.description)
    const [newTask, setNewTask] = useState<boolean>(!!task.id)
    const {user, tasks} = useContext(Context)
    const params = useParams()
    const [date, setDate] = useState<number[]>([2023, 1, 1]);

    const handleDateChange = (newDate: number[]) => {
        // console.log("newDate", newDate)
        setDate(newDate);
    };
    // console.log(user.user())
    useEffect(() => {
        // fetchTasks()
        setChange(!task.id)
        if (!!task.id) {
            tasks.fetchTask(Number(params.id), id)
                .then(() =>
                    setDescription(tasks.task().description)
                )
            setName(task.title)
            setDate([2023, 1, 1])
            setType(task.type)
        }
        // console.log(user.user().role)

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
        // console.log(status.toUpperCase())

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
        <DetailTask>
            <Row>
                <Label>Task</Label>
                <span>
                    {
                        ((user.user().role === "TEACHER") || (user.user().role === "ADMIN")) ?
                            change ?
                                <Btn onClick={handleCLick}>Save</Btn>
                                :
                                <Btn onClick={() => setChange(!change)}>Change</Btn>
                            :
                            ""
                    }
                    <Btn onClick={() => setShow(false)}>Close</Btn>
                    {
                        (user.user().role === "USER") || (user.user().role === "ADMIN") ?
                            <Btn onClick={deleteTask}>Delete</Btn>
                            :
                            <></>
                    }
                </span>
            </Row>
            <Input
                disabled={!change}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <RowChange>
                <Col>
                    <Label>Description</Label>
                    <TextArea
                        disabled={!change}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Col>
                <Col>
                    <Label>Type</Label>
                    <Input
                        disabled={!change}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <Label>Status</Label>
                    <Dropdown choices={statusArr} selected={statusTask} onChange={setStatus} disabled={!change}/>
                    <Label>Date</Label>
                    <DatePicker onChange={handleDateChange} disabled={!change}/>
                </Col>
            </RowChange>
            {
                task.id ?
                    <>
                        <Label>Comments</Label>
                        <Comments task={tasks.task()}/>
                    </>
                : <></>

            }

        </DetailTask>
    );
};

export default observer(TaskDetail);

const DetailTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 900px;
  height: 90%;
  overflow: auto;

  @media (max-width: 1000px) {
    //max-width: 95%;
    width: 800px;
    max-width: 90%;
    //max-width: 90%;
  }
  //
  @media (max-width: 700px) {
    max-width: 95%;
    width: unset;
  }
`

const Label = styled(TitleText)`
  color: ${mainColor};
`
const Btn = styled.button`
  background: ${accentColor5};
  border: none;
  border-radius: 10px;
  color: ${backgroundColor};
  padding: 15px 25px;
  //height: 40px;
  //width: 80px;
`
const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 10px;
  height: 40px;
  width: 100%;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #827A7A;
  border-radius: 5px;
  resize: none;
  @media (max-width: 500px) {
    height: 100px;
  }
`
const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

const RowChange = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

