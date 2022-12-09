import React, {Dispatch, FC, SetStateAction, useContext} from 'react';
import {LightText, MainTitleText} from "../../styles/fonts";
import {Context} from "../../index";
import Sidebar from './style';

interface IProjectSidebarProps {
    show: boolean
    toggleShow: Dispatch<SetStateAction<boolean>>
}

const ProjectSidebar: FC<IProjectSidebarProps> = ({show, toggleShow}) => {

    const {user, projects} = useContext(Context)

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
            <Sidebar.Info.Text>
                <LightText>{user.user().group.name}</LightText>
                {
                    user.role() === "Teacher" && <Sidebar.Info.Value><LightText>5</LightText></Sidebar.Info.Value>
                }
            </Sidebar.Info.Text>
            <Sidebar.Info.Text>
                <LightText>Projects</LightText>
                <Sidebar.Info.Value><LightText>{projects.projectsList().total}</LightText></Sidebar.Info.Value>
            </Sidebar.Info.Text>
        </Sidebar.Wrapper>
    );
};

export default ProjectSidebar;

