import React, {FC, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {accentColor3, backgroundColor, menuColor, textColorPrimary} from "../../styles/colors";
import {Context} from "../../index";
import comment from "../Comment/Comment";
import {useParams} from "react-router";
import {ITask} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";
import CommentsList from "../CommentsList/CommentsList";

interface ICommentsProps {
    task: ITask,
}

const Comments: FC<ICommentsProps> = ({task}) => {

    const {comments, tasks} = useContext(Context)
    const [message, setMessage] = useState<string>("")
    const params = useParams()

    useEffect(() => {
        // tasks.fetchTask(Number(params.id), task.id)
    }, [task])

    const sendMessage = async () => {
        await comments.createComment(Number(params.id), task.id, message)
            .then(() => setMessage(""))
    }

    return (
        <Wrapper>
            <CommentsList taskId={task.id}/>
            <Row>
                <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Btn onClick={sendMessage}>Send</Btn>
            </Row>
        </Wrapper>
    );
};

export default observer(Comments);



const Wrapper = styled.div`
  width: 100%;
  background: ${menuColor};
  border: 1px solid ${textColorPrimary};
  border-radius: 20px;
  padding: 30px;
`

const Row = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  background: ${backgroundColor};
  border: none;
  border-radius: 10px 0 0 10px;
  height: 40px;
  outline: none;
`
const Btn = styled.button`
  background: ${accentColor3};
  border: none;
  border-radius: 0 10px 10px 0;
  color: white;
  padding: 10px 25px;
  height: 40px;
`
