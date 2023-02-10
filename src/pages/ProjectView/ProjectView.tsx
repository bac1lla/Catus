import React, {FC, ReactNode, useContext, useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Project from './style';
import {ITaskCard} from "../../models/response/TasksResponse";
import {Context} from "../../index";
import TasksTab from "../../components/TasksTab";
import ProjectViewSidebar from "../../components/ProjectViewSidebar";
import {observer} from "mobx-react-lite";
import {accentColor1, accentColor2, accentColor3, accentColor4, accentColor5, accentColor6} from "../../styles/colors";
import Modal from "../../components/Modal/Modal";
import TaskDetail from "../../components/Modal/TaskDetail";
import {useParams} from "react-router";

interface ISeparatedTasks {
    [key: string]: ITaskCard[];
}

const separateTasks = (tasks: ITaskCard[]): ISeparatedTasks => {

    const separatedTasks: ISeparatedTasks = {}

    for (let i = 0; i < tasks.length; i++) {
        if (!separatedTasks[tasks[i].status]) {
            separatedTasks[tasks[i].status] = []
        }
        separatedTasks[tasks[i].status].push(tasks[i])
    }

    // for (let i = 0; i < tasks.length; i++) {
    //
    // }
    return separatedTasks
}


const ProjectView: FC = () => {

    const {projects, tasks, user} = useContext(Context)
    const [separatedTasks, setSeparatedTasks] = useState<ISeparatedTasks>({})
    const [showModal, setShowModal] = useState(false)
    // const [update, setUpdate] = useState(true)
    const params = useParams()

    useEffect(() => {
        // console.log("params", params.id)
        // projects.fetchProjectById(0, Number(params.id))
        getTasks()
        // console.log(separatedTasks)

    }, [])

    useEffect(() => {
        getTasks()

    }, [tasks.task()])

    const getTasks = async () => {
        const response = await tasks.fetchAllTasks(Number(params.id))
        // console.log("getTasks", response)
        setSeparatedTasks(separateTasks(tasks.tasksList().tasks))
        return response
    }

    const createTask = () => {

    }



    return (
        <>
            <NavBar/>
            <Project.Wrapper>
                <Project.ProjectView>
                    <ProjectViewSidebar/>
                    <Project.ProjectList>
                            <TasksTab tabName={"OVERDUE"} tasks={separatedTasks["OVERDUE"]} editable={true} color={accentColor2} />
                            <TasksTab tabName={"ACTIVE"} tasks={separatedTasks["ACTIVE"]} editable={true} color={accentColor3} />
                            <TasksTab tabName={"PLANNED"} tasks={separatedTasks["PLANNED"]} editable={true} color={accentColor6} />
                            <TasksTab tabName={"FINISHED"} tasks={separatedTasks["FINISHED"]} editable={false} color={accentColor5} />
                    </Project.ProjectList>
                </Project.ProjectView>
            </Project.Wrapper>

        </>
    );
};

export default observer(ProjectView);


