import React, {FC, useContext, useEffect} from 'react';
import styled from "styled-components";
import {Col} from "../styles/styled-components";
import {
    accentColor2, accentColor4,
    backgroundColor,
    mainColor,
    menuColor,
    textColorPrimary,
    textColorSecondary
} from "../styles/colors";
import {LightText, TitleText} from "../styles/fonts";
import GroupMember from "./GroupMember";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const ProjectViewSidebar: FC = () => {

    const {projects, user} = useContext(Context)

    const getMembers = async () => {
        await projects.fetchAllUsersInProject(user.user().id, projects.project().id)
        // console.log(projects.allUsers())
    }

    useEffect(() => {
        getMembers()
    }, [])

    return (
        <ProjectSidebarStyled gap={20}>
            <SidebarImage>{projects.project().title}</SidebarImage>
                <MembersHeader>
                    <MembersHeaderTitle>Members:</MembersHeaderTitle>
                    <MembersCount>{projects.allUsers().total}</MembersCount>
                </MembersHeader>
            <Members>
                {
                    projects.allUsers().users.map(user => <GroupMember key={user.id} group={user.group.name} name={user.name} />)
                }
            </Members>
                <MembersAddBtn>ADD</MembersAddBtn>
        </ProjectSidebarStyled>
    );
};

export default observer(ProjectViewSidebar);

const ProjectSidebarStyled = styled(Col)`
  width: 260px;
  padding: 20px;
  background-color: ${mainColor};
  height: 100%;
  border-radius: 20px;
  justify-content: space-around;
`
const SidebarImage = styled(TitleText)`
  min-width: 215px;
  min-height: 215px;
  background-color: ${accentColor2};
  color: ${backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`
const Members = styled(Col)`
  width: 215px;
  //height: 100px;
  overflow-y: scroll;
  //position: relative;
  gap: 20px;
  padding: 20px 15px;
  align-items: center;
  //justify-content: center;
  background-color: ${menuColor};
  border-radius: 20px;
  max-height: 70%;
`
const MembersHeader = styled.div`
  background-color: ${textColorPrimary};
  color: ${textColorSecondary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  //position: absolute;
  //top: 0;
  //left: 0;
  width: 100%;
  //z-index: 1;
  padding: 6px 16px;
  border-radius: 20px;
`
const MembersHeaderTitle = styled(LightText)`
`

const MembersCount = styled(LightText)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 7px;
  border-radius: 10px;
  background-color: ${menuColor};
`
const MembersAddBtn = styled.button`
  height: 40px;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${accentColor4};
  color: ${backgroundColor};
  border: 2px solid ${textColorPrimary};
  
`

