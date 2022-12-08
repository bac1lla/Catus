import React, {FC} from 'react';
import styled from "styled-components";
import {Col, Container} from "../styles/styled-components";
import {
    accentColor2, accentColor4,
    backgroundColor,
    mainColor,
    menuColor,
    textColorPrimary,
    textColorSecondary
} from "../styles/colors";
import {LightText, TitleText} from "../styles/text";
import {IGroupMember} from "../types/types";
import GroupMember from "./GroupMember";

interface IProjectSidebarProps {
    name: string,
    members: IGroupMember[]
}

const ProjectViewSidebar: FC<IProjectSidebarProps> = ({name, members}) => {
    return (
        <ProjectSidebarStyled gap={20}>
            <SidebarImage>{name}</SidebarImage>
                <MembersHeader>
                    <MembersHeaderTitle>Members:</MembersHeaderTitle>
                    <MembersCount>{members.length}</MembersCount>
                </MembersHeader>
            <Members>
                {
                    members.map((member) => <GroupMember {...member} />)
                }
            </Members>
                <MembersAddBtn>ADD</MembersAddBtn>
        </ProjectSidebarStyled>
    );
};

export default ProjectViewSidebar;

const ProjectSidebarStyled = styled(Col)`
  width: 260px;
  padding: 20px;
  background-color: ${mainColor};
  max-height: 100%;
  border-radius: 20px;
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
  height: 100px;
  overflow-y: scroll;
  //position: relative;
  gap: 20px;
  padding: 380px 15px 20px 15px;
  align-items: center;
  justify-content: center;
  background-color: ${menuColor};
  border-radius: 20px;
  max-height: 430px;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${accentColor4};
  color: ${backgroundColor};
  border: 2px solid ${textColorPrimary};
  
`

