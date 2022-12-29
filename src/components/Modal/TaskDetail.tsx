import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {backgroundColor, textColorSecondary} from "../../styles/colors";
import {ITask, ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";

interface IDetailTask {
    onSave: () => void;
    task: ITaskCard;
    setShow: Dispatch<SetStateAction<boolean>>
}

const TaskDetail: FC<IDetailTask> = ({onSave, task, setShow}) => {

    const [change, setChange] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [date, setDate] = useState<string>("")

    useEffect(() => {
        setDescription(task.description)
        setName(task.title)
        setDate(task.dueDate)
    }, [])

    return (
        <DetailTask>
            <Row>
                <Label>Task</Label>
                <span>
                    {
                        change ?
                            <Btn onClick={() => setChange(!change)}>Save</Btn>
                            :
                            <Btn onClick={() => setChange(!change)}>Change</Btn>
                    }
                    <Btn onClick={() => setShow(false)}>Close</Btn>
                </span>
            </Row>
            <Input
                disabled={!change}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Row>
                <Col>
                    <Label>Description</Label>
                    <Input
                        disabled={!change}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Col>
                <Col>
                    <Label>Type</Label>
                    <Input disabled={!change}/>
                    <Label>Date</Label>
                    <Input
                        disabled={!change}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Col>
            </Row>
            <Label onClick={() => {
                console.log(date,name, description)}}>Comments</Label>
        </DetailTask>
    );
};

export default observer(TaskDetail);

const DetailTask = styled.div`

`

const Label = styled(TitleText)`
  color: ${textColorSecondary};
`
const Btn = styled.button`
  background: #B5C29E;
  border: 2px solid #827A7A;
  border-radius: 15px;
  color: ${backgroundColor};
`
const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 50px;
  height: 57px;
  width: 100%;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Col = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

