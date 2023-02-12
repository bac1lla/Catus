import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../../index";
import {useParams} from "react-router";
import {ITask, ITaskCard} from "../../models/response/TasksResponse";
import {observer} from "mobx-react-lite";
import CommentsList from "../CommentsList/CommentsList";
import Wrapper from "./style";

interface ICommentsProps {
    task: ITaskCard,
}

const Comments: FC<ICommentsProps> = ({task}) => {

    const {comments, tasks} = useContext(Context)
    const [message, setMessage] = useState<string>("")
    const params = useParams()

    useEffect(() => {
        if (task.id) {
            tasks.fetchTask(Number(params.id), task.id)
        }
    }, [task])

    const sendMessage = async () => {
        await comments.createComment(Number(params.id), task.id, message)
            .then(() => setMessage(""))
            .then(() => tasks.fetchTask(Number(params.id), task.id))
    }

    return (
        <Wrapper>
            <CommentsList taskId={task.id}/>
            <Wrapper.Row>
                <Wrapper.Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Wrapper.Btn onClick={sendMessage}>Send</Wrapper.Btn>
            </Wrapper.Row>
        </Wrapper>
    );
};

export default observer(Comments);

