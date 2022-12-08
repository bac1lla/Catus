import React from 'react';
import styled from "styled-components";
import {accentColor1, accentColor2, mainColor, menuColor, textColorPrimary, textColorSecondary} from "../styles/colors";
import {Col} from "../styles/styled-components";
import {LightText, MainText, MainTitleText} from "../styles/text";

const ProjectSidebar = () => {
    return (
        <ProjectSidebarStyled>
            <ProjectSidebarLogo/>
            <ProjectSidebarPerson>
                <PersonLogo><MainTitleText>I</MainTitleText></PersonLogo>
                <Person gap={15}>
                    <PersonInfo>
                        <PersonInfoText>kkldskakakl;sdkl;adskl;asdklasdkl;kl;kl;kl;adslk;lk;sadkl;aldsklkasdask</PersonInfoText>
                    </PersonInfo>
                    <PersonInfo>
                        <PersonInfoText>Student</PersonInfoText>
                    </PersonInfo>
                    <PersonInfo>
                        <PersonInfoText>Ilyas</PersonInfoText>
                    </PersonInfo>
                </Person>
            </ProjectSidebarPerson>
            <SidebarInfo>
                <LightText>HIU7-23B</LightText>
                <SidebarInfoCount><LightText>5</LightText></SidebarInfoCount>
            </SidebarInfo>
            <SidebarInfo>
                <LightText>Projects</LightText>
                <SidebarInfoCount><LightText>8</LightText></SidebarInfoCount>
            </SidebarInfo>
        </ProjectSidebarStyled>
    );
};

export default ProjectSidebar;

const ProjectSidebarStyled = styled(Col)`
  width: 427px;
  background-color: ${mainColor};
  align-items: center;
  padding: 30px;
  gap: 50px;
  min-height: 100%;
`
const ProjectSidebarLogo = styled.img`
  width: 91px;
  height: 135px;
`
const ProjectSidebarPerson = styled.div`
  height: 230px;
  border-radius: 25px;
  background-color: ${menuColor};
  width: 370px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 58px 25px;
`
const Person = styled(Col)`
  gap: 15px;
  height: 230px;
  width: 100% ;
`
const PersonLogo = styled.div`
  position: absolute;
  top: 33px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${accentColor2};
  width: 164px;
  height: 164px;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.4);
  color: ${accentColor1};
`
const PersonInfo = styled.div`
  color: ${textColorPrimary};
  border-radius: 15px;
  background-color: ${textColorSecondary};
  padding: 5px 12px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: end;
`
const PersonInfoText = styled(MainText)`
  width: 136px;
`
const SidebarInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${textColorSecondary};
  background-color: ${menuColor};
  //height: 78px;
  font-size: 30px;
  border-radius: 20px;
  width: 100%;
`
const SidebarInfoCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${textColorSecondary};
  background-color: ${accentColor2};
  height: 55px;
  color: ${accentColor1};
  border-radius: 20px;
`
