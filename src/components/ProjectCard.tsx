import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {accentColor4, backgroundColor, textColorPrimary, textColorSecondary} from "../styles/colors";
import {MainText} from "../styles/text";
import {Col} from "../styles/styled-components";
import TrashIcon from "../assets/img/trashIcon.png"
import {IProjectCard} from "../models/response/ProjectsResponse";
import {Context} from "../index";
import {IUser} from "../models/IUser";


interface IProjectCardProps {
    project: IProjectCard,
    // user: IUser
}

const ProjectCard: FC<IProjectCardProps> = ({project}) => {

    const {projects, user} = useContext(Context)


    return (
        <ProjectCardStyled>
            <ProjectCardImage/>
            <Col gap={10}>
                <ProjectCardRow>
                    <ProjectCardRowText>{project.title}</ProjectCardRowText>
                    <ProjectCardTrashIcon
                        src={TrashIcon}
                        // onClick={() => projects.deleteProject(user.user.id, project.id)}
                        onClick={() => {
                            projects.deleteProject(1, project.id)
                            console.log(projects.projectsList())
                        }}
                    />
                </ProjectCardRow>
                <ProjectCardRow>
                    <ProjectCardRowText>
                        Tasks
                        <ProjectCardRowInfo>
                            <ProjectCardRowInfoText>
                                {project.description}
                            </ProjectCardRowInfoText>
                        </ProjectCardRowInfo>
                    </ProjectCardRowText>
                </ProjectCardRow>
                <ProjectCardRow>
                    <ProjectCardRowText>
                        Students
                        <ProjectCardRowInfo>
                            <ProjectCardRowInfoText>
                                {project.userCount}
                            </ProjectCardRowInfoText>
                        </ProjectCardRowInfo>
                    </ProjectCardRowText>
                </ProjectCardRow>
                <ProjectCardRow>
                    <ProjectCardRowText>
                        Teacher
                        <ProjectCardRowInfo>
                            <ProjectCardRowInfoText>
                                {project.title}
                            </ProjectCardRowInfoText>
                        </ProjectCardRowInfo>
                    </ProjectCardRowText>
                </ProjectCardRow>
            </Col>
        </ProjectCardStyled>
    );
};

export default ProjectCard;

const ProjectCardStyled = styled.div`
  display: flex;
  padding: 20px;
  background: ${backgroundColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  gap: 11px;
  align-items: center;
  //max-height: 100vh;
`
const ProjectCardImage = styled.image`
  width: 163px;
  height: 158px;
  border-radius: 20px;
  background-color: ${accentColor4};
`
const ProjectCardRow = styled.div`
  background-color: ${textColorSecondary};
  border-radius: 20px;
  padding: 2px 0 2px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //width: 100%;
`
const ProjectCardRowText = styled(MainText)`
  color: ${textColorPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const ProjectCardRowInfo = styled(ProjectCardRow)`
  background-color: ${textColorPrimary};
  padding: 2px 10px;
`
const ProjectCardRowInfoText = styled(MainText)`
  color: ${textColorSecondary};
`
const ProjectCardTrashIcon = styled.img`
  width: 32px;
  height: 27px;
`
