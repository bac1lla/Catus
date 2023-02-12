import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import ProjectSidebar from "../Sidebar/ProjectSidebar";
import {MainTitleText} from "../../styles/fonts";
import ProjectCard from "../ProjectCard/ProjectCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ProjectsPage from './style';
import Modal from "../Modal/Modal";
import Confirm from "../Modal/Confirm";
import {PROJECT_ROUTE} from "../../routes/consts";
import {useNavigate} from "react-router-dom";
import {IProjectCard} from "../../models/response/ProjectsResponse";

interface IProjectsProps {
    showSidebar: boolean,
    toggleShowSidebar: Dispatch<SetStateAction<boolean>>
}

const Projects: FC<IProjectsProps> = ({showSidebar, toggleShowSidebar}) => {

    const {user, projects} = useContext(Context)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [actualProject, setActualProject] = useState<number>(0)
    const navigate = useNavigate()

    useEffect(() => {
        projects.fetchAllProjects(user.user().id)
    }, [])

    const deleteProject = async (projectId: number) => {
        await projects.deleteProject(user.user().id, actualProject)
        setShowModal(false)
    }

    const openProject = async (project: IProjectCard) => {
        await projects.fetchProjectById(user.user().id, project.id)
        navigate(PROJECT_ROUTE + `/${project.id}`)
    }

    const openModal = (e: any, projectId: number): void => {
        e.stopPropagation()
        setActualProject(projectId)
        setShowModal(true)
    }

    return (
        <ProjectsPage.Wrapper>
            <ProjectsPage.Projects>
                <ProjectsPage.Title>
                    <ProjectsPage.BurgerBtn onClick={() => toggleShowSidebar(!showSidebar)} show={!showSidebar}/>
                    <MainTitleText>Your projects</MainTitleText>
                </ProjectsPage.Title>
                <ProjectsPage.List>
                    {
                        projects.projectsList().projects.map(project =>
                            <ProjectCard
                                openProject={() => openProject(project)}
                                key={project.id}
                                project={project}
                                deleteProject={(e: any) => openModal(e, project.id)}
                            />)
                    }
                </ProjectsPage.List>
            </ProjectsPage.Projects>
            <Modal setShow={setShowModal} show={showModal}>
                <Confirm
                    setShow={setShowModal}
                    title={`Are you shure you want to delete project “${projects.projectsList().projects.filter(project => project.id === actualProject)[0]?.title}”? You may not restore any its data later.`}
                    onConfirm={deleteProject}
                />
            </Modal>
        </ProjectsPage.Wrapper>
    );
};

export default observer(Projects);

