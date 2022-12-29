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
    const [actualProject, setActualProject] = useState<IProjectCard>({} as IProjectCard)
    const navigate = useNavigate()

    useEffect(() => {
        projects.fetchAllProjects(user.user().id)
    }, [])

    const deleteProject = async (e: any, project: IProjectCard) => {
        // e.stopPropagation()

        await projects.deleteProject(user.user().id, actualProject.id)
        setShowModal(false)
    }

    const openProject = async (e: any, project: IProjectCard) => {
        await projects.fetchProjectById(user.user().id, project.id)
        navigate(PROJECT_ROUTE + `/${project.id}`)
    }

    const openModal = (e: any, project: IProjectCard): void => {
        e.stopPropagation()
        setActualProject(project)
        setShowModal(true)
        console.log(1)
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
                            openProject={openProject}
                            key={project.id}
                            project={project}
                            deleteProject={openModal}
                        />)
                }
                </ProjectsPage.List>
            </ProjectsPage.Projects>
            <Modal setShow={setShowModal} show={showModal}>
                <Confirm
                    setShow={setShowModal}
                    title={`Are you shure you want to delete project “${actualProject.title}”? You may not restore any its data later.`}
                    onConfirm={deleteProject}
                />
            </Modal>
        </ProjectsPage.Wrapper>
    );
};

export default observer(Projects);

