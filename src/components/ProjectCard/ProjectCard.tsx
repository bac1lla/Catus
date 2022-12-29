import React, {FC, useContext} from 'react';
import {Line} from "../../styles/styled-components";
import TrashIcon from "../../assets/img/trashIcon.png"
import {IProjectCard} from "../../models/response/ProjectsResponse";
import Card from './style';

interface IProjectCardProps {
    project: IProjectCard;
    openProject: any;
    deleteProject: any;
}

const ProjectCard: FC<IProjectCardProps> = ({project, openProject, deleteProject}) => {

    return (
        <Card.Wrapper
            onClick={(e) => openProject(e, project)}
        >
            <Card.Image />
            <Card.Info>
                <Line>
                    <Card.Row.Row>
                        <Card.Row.Text>
                            {project.title}
                        </Card.Row.Text>
                    </Card.Row.Row>
                    <Card.Trash
                        src={TrashIcon}
                        onClick={(e) => deleteProject(e, project)}
                    />
                </Line>
                <Card.Row.Row>
                    <Card.Row.Wrapper>
                        <Card.Row.Text>Tasks</Card.Row.Text>
                        <Card.Row.Value><Card.Row.Info>
                            {project.description}
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
                            {project.title}
                        </Card.Row.Info></Card.Row.Value>
                    </Card.Row.Wrapper>
                </Card.Row.Row>
            </Card.Info>
        </Card.Wrapper>
    );
};

export default ProjectCard;

