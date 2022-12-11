import React, {FC, ReactNode, useContext, useEffect, useState} from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Project from './style';
import {ITaskCard} from "../../models/response/TasksResponse";
import {Context} from "../../index";
import TasksTab from "../../components/TasksTab";
import ProjectViewSidebar from "../../components/ProjectViewSidebar";
import {observer} from "mobx-react-lite";
import {accentColor2} from "../../styles/colors";

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

    return separatedTasks
}


const ProjectView: FC = () => {

    const {projects, tasks} = useContext(Context)
    const [separatedTasks, setSeparatedTasks] = useState<ISeparatedTasks>({})

    useEffect(() => {
        getTasks()
    }, [])

    const getTasks = async () => {
        const response = await tasks.fetchAllTasks(projects.project().id)
        setSeparatedTasks(separateTasks(tasks.tasksList().tasks))
        return response
    }

    const renderTabs = (separatedTasks: ISeparatedTasks): ReactNode[] => {
        let tabsArr: ReactNode[] = []
        for (let key in separatedTasks) {
            tabsArr.push((
                <TasksTab key={key} tabName={key} tasks={separatedTasks[key]} editable={false} color={accentColor2}/>
            ))
        }
        return tabsArr
    }

    return (
        <>
            <NavBar/>
            <Project.Wrapper>
                <Project.ProjectView>
                    <ProjectViewSidebar />
                    <div style={{height: "100%", display: "flex", gap: "20px", overflowX: "scroll"}}>
                    {
                        renderTabs(separatedTasks)
                    }
                    </div>
                </Project.ProjectView>
            </Project.Wrapper>
        </>
    );
};

export default observer(ProjectView);


