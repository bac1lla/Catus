import React, {FC, useContext, useEffect, useState} from 'react';
import ProjectSidebar from "../../components/ProjectSidebar/ProjectSidebar";
import {MainTitleText} from "../../styles/fonts";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ProjectsPage from './style';

const Projects: FC = () => {
    const {user, projects} = useContext(Context)
    const [show, toggleShow] = useState<boolean>(false)

    useEffect(() => {
        projects.fetchAllProjects(user.user().id)
    }, [])

    return (
        <ProjectsPage.Wrapper>
            <ProjectSidebar show={show} toggleShow={toggleShow}/>
            <ProjectsPage.Projects>
                <ProjectsPage.Title>
                    <ProjectsPage.BurgerBtn onClick={() => toggleShow(!show)} show={!show}/>
                    <MainTitleText>Your projects</MainTitleText>
                </ProjectsPage.Title>
                {
                    projects.projectsList().projects.map(project =>
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />)
                }
            </ProjectsPage.Projects>
        </ProjectsPage.Wrapper>
    );
};

export default observer(Projects);

