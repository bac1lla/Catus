import React, {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {LightText, MainTitleText} from "../../styles/fonts";
import {Context} from "../../index";
import Sidebar from './style';
import Modal from "../Modal/Modal";
import CreateGroup from "../Modal/CreateGroup";
import {GROUPS_ROUTE, PROJECTS_ROUTE} from "../../routes/consts";
import {useLocation, useNavigate} from "react-router-dom";
import CreateProject from "../CreateProject/CreateProject";
import {observer} from "mobx-react-lite";

interface IProjectSidebarProps {
    show: boolean
    toggleShow: Dispatch<SetStateAction<boolean>>
}

const ProjectSidebar: FC<IProjectSidebarProps> = ({show, toggleShow}) => {

    const {user, projects, groups} = useContext(Context)
    const [showCreateGroupModal, setShowCreateGroupModal] = useState<boolean>(false)
    const [showCreateProjectModal, setShowCreateProjectModal] = useState<boolean>(false)

    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = () => {
        if (location.pathname === PROJECTS_ROUTE) {
            setShowCreateProjectModal(true)
        } else if (location.pathname === GROUPS_ROUTE) {
            setShowCreateGroupModal(true)
        }
    }

    const createGroup = async (name: string) => {
        await groups.createGroup(name)
        setShowCreateGroupModal(false)
    }

    const createProject = async (name: string, description: string) => {
        await projects.createNewProject(user.user().id, name, description)
        setShowCreateProjectModal(false)
    }

    return (
        <Sidebar.Wrapper show={show}>
            <Sidebar.Logo/>
            <Sidebar.BurgerBtn onClick={() => toggleShow(!show)}/>
            <Sidebar.Person.Wrapper>
                <Sidebar.Person.Logo><MainTitleText>I</MainTitleText></Sidebar.Person.Logo>
                <Sidebar.Person.Person>
                    <Sidebar.Person.Info>
                        <Sidebar.Person.InfoText>{user.user().login}</Sidebar.Person.InfoText>
                    </Sidebar.Person.Info>
                    <Sidebar.Person.Info>
                        <Sidebar.Person.InfoText>{user.role()}</Sidebar.Person.InfoText>
                    </Sidebar.Person.Info>
                    <Sidebar.Person.Info>
                        <Sidebar.Person.InfoText>{user.user().name}</Sidebar.Person.InfoText>
                    </Sidebar.Person.Info>
                </Sidebar.Person.Person>
            </Sidebar.Person.Wrapper>
            <Sidebar.Info.Text onClick={() => navigate(GROUPS_ROUTE)}>
                <LightText>{user.role() === "Teacher" ? "Groups" : user.user().group.name}</LightText>
            </Sidebar.Info.Text>
            <Sidebar.Info.Text onClick={() => navigate(PROJECTS_ROUTE)}>
                <LightText>Projects</LightText>
                <Sidebar.Info.Value><LightText>{projects.projectsList().total}</LightText></Sidebar.Info.Value>
            </Sidebar.Info.Text>
            <Sidebar.Info.Value onClick={() => handleClick()}><LightText>ADD</LightText></Sidebar.Info.Value>
            <Modal setShow={setShowCreateGroupModal} show={showCreateGroupModal}>
                <CreateGroup setShow={setShowCreateGroupModal} onConfirm={createGroup} />
            </Modal>
            <Modal setShow={setShowCreateProjectModal} show={showCreateProjectModal}>
                <CreateProject setShow={setShowCreateProjectModal} onConfirm={createProject} />
            </Modal>
        </Sidebar.Wrapper>
    );
};

export default observer(ProjectSidebar);

