import React, {FC, useContext, useEffect, useState} from 'react';
import {Line} from "../../styles/styled-components";
import TrashIcon from "../../assets/img/trashIcon.png"
import {IProject, IProjectCard} from "../../models/response/ProjectsResponse";
import Card from './style';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

interface IProjectCardProps {
    project: IProject;
    openProject: any;
    deleteProject: any;
}

const ProjectCard: FC<IProjectCardProps> = ({project, openProject, deleteProject}) => {

    const {user} = useContext(Context)

    return (
        <Card.Wrapper
            onClick={() => openProject(project)}
        >
            <Card.Image/>
            <Card.Info>
                <Line>
                    <Card.Row.Row>
                        <Card.Row.Text>
                            {project.title}
                        </Card.Row.Text>
                    </Card.Row.Row>
                    {
                        ((user.user().role === "TEACHER") || (user.user().role === "ADMIN")) ?
                            <Card.Trash
                                src={TrashIcon}
                                onClick={(e) => deleteProject(e, project)}
                            />
                            :
                            <></>
                    }
                </Line>
                <Card.Row.Row>
                    <Card.Row.Wrapper>
                        <Card.Row.Text>Tasks</Card.Row.Text>
                        <Card.Row.Value><Card.Row.Info>
                            {/*{tasks.tasksList().total}*/}
                            {project.taskCount}
                        </Card.Row.Info></Card.Row.Value>
                    </Card.Row.Wrapper>
                </Card.Row.Row>
                <Card.Row.Row>
                    <Card.Row.Wrapper>
                        <Card.Row.Text>Students</Card.Row.Text>
                        <Card.Row.Value><Card.Row.Info>
                            {project.userCount}
                        </Card.Row.Info></Card.Row.Value>
                    </Card.Row.Wrapper>
                </Card.Row.Row>
                <Card.Row.Row>
                    <Card.Row.Wrapper>
                        <Card.Row.Text>Teacher</Card.Row.Text>
                        <Card.Row.Value><Card.Row.Info>
                            {project.creator.name}
                        </Card.Row.Info></Card.Row.Value>
                    </Card.Row.Wrapper>
                </Card.Row.Row>
            </Card.Info>
        </Card.Wrapper>
    );
};

export default observer(ProjectCard);

