import React, {FC, useContext} from 'react';
import {Row} from "../../styles/styled-components";
import TrashIcon from "../../assets/img/trashIcon.png"
import {IProjectCard} from "../../models/response/ProjectsResponse";
import {Context} from "../../index";
import Card from './style';

interface IProjectCardProps {
    project: IProjectCard
}

const ProjectCard: FC<IProjectCardProps> = ({project}) => {

    const {user, projects} = useContext(Context)

    return (
        <Card.Wrapper>
            <Card.Image/>
            <Card.Info>
                <Row>
                    <Card.Row.Row>
                        <Card.Row.Text>
                            {project.title}
                        </Card.Row.Text>
                    </Card.Row.Row>
                    <Card.Trash
                        src={TrashIcon}
                        onClick={() => projects.deleteProject(user.user().id, project.id)}
                        // onClick={() => projects.deleteProject(1, project.id)}
                    />
                </Row>
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

