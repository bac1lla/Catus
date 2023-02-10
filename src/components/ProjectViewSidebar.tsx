import React, {FC, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {Column} from "../styles/styled-components";
import {
    accentColor2, accentColor3, accentColor4,
    backgroundColor,
    mainColor,
    menuColor,
    textColorPrimary,
    textColorSecondary
} from "../styles/colors";
import {LightText, TitleText} from "../styles/fonts";
import GroupMember from "./GroupMember/GroupMember";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Modal from "./Modal/Modal";
import AddStudents from "./AddStudents/AddStudents";
import {IUser} from "../models/IUser";
import {useParams} from "react-router";

const ProjectViewSidebar: FC = () => {

    const [showAddUsers, setShowAddUsers] = useState<boolean>(false)
    const {projects, user} = useContext(Context)
    const params = useParams()

    useEffect(() => {
        // user.fetchUser(Number(localStorage.getItem("id")))
        projects.fetchAllUsersInProject(user.user().id, Number(params.id))

    }, [projects.projectsList()])

    const addUsers = async (users: Set<IUser>) => {
        // console.log(users)
        users.forEach((userSet) => {
            // console.log(userSet)
            projects.addMember(user.user().id, projects.project().id, userSet.id)
        })
        setShowAddUsers(false)
        // for(let i = 0; i < users.size; i++) {
        // }
    }

    return (
        <ProjectSidebarStyled gap={20}>
            <SidebarImage>{projects.project().title}</SidebarImage>
            <MembersHeader>
                <MembersHeaderTitle>Members:</MembersHeaderTitle>
                <MembersCount>{projects.allUsers().total}</MembersCount>
            </MembersHeader>
            <Members>
                {
                    projects.allUsers().users.map(user =>
                        // <GroupMember key={user.id} group={user.group.name} name={user.name}/>)
                        <GroupMember key={user.id} groupName={user.group?.name || ""} name={user.name}/>)
                }
            </Members>
            {
                ((user.user().role === "TEACHER") || (user.user().role === "ADMIN")) ?
                    <MembersAddBtn onClick={() => setShowAddUsers(true)}>ADD</MembersAddBtn>
                    :
                    <></>
            }
            <Modal setShow={setShowAddUsers} show={showAddUsers}>
                <AddStudents setShow={setShowAddUsers} onConfirm={addUsers}/>
            </Modal>
        </ProjectSidebarStyled>
    );
};

export default observer(ProjectViewSidebar);

const ProjectSidebarStyled = styled(Column)`
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
  border-radius: 20px;
`
const Members = styled(Column)`
  width: 215px;
  //height: 100px;
  overflow-y: scroll;
  //position: relative;
  gap: 20px;
  padding: 20px 15px;
  align-items: center;
  //justify-content: center;
  background-color: ${menuColor};
  border-radius: 10px;
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
  border-radius: 10px;
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
  background-color: ${accentColor2};
  color: ${backgroundColor};
  border: none;
  //border: 2px solid ${textColorPrimary};
  box-shadow: 1px 1px ${backgroundColor};
`

