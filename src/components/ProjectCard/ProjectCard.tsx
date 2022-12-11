import React, {FC, useContext} from 'react';
import {Row} from "../../styles/styled-components";
import TrashIcon from "../../assets/img/trashIcon.png"
import {IProjectCard} from "../../models/response/ProjectsResponse";
import {Context} from "../../index";
import Card from './style';
import {useNavigate} from "react-router-dom";
import {PROJECT_ROUTE} from "../../routes/consts";

interface IProjectCardProps {
    project: IProjectCard
}

const ProjectCard: FC<IProjectCardProps> = ({project}) => {

    const {user, projects} = useContext(Context)
    const navigate = useNavigate()

    const openProject = async () => {
        await projects.fetchProjectById(user.user().id, project.id)
        navigate(PROJECT_ROUTE + `/${project.id}`)
    }

    const deleteProject = async (e: any) => {
        e.stopPropagation()
        //переписать на компонент
        window.confirm("Вы уверены что хотитте удалить проект?") && await projects.deleteProject(user.user().id, project.id)
    }

    return (
        <Card.Wrapper
            onClick={(e) => openProject()}
        >
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
                        onClick={(e) => deleteProject(e)}
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

