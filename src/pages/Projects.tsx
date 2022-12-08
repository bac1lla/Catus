import React, {useContext} from 'react';
import ProjectSidebar from "../components/ProjectSidebar";
import styled from "styled-components";
import {MainTitleText} from "../styles/text";
import {mainColor} from "../styles/colors";
import ProjectCard from "../components/ProjectCard";
import {Context} from "../index";

// const projects: IProjectCard[] = [
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
//     {lessonName: "string", tasks: 123, students: 134, teacherName: "Zalupa"},
// ]

const Projects = () => {
        const {projects} = useContext(Context)
    return (

        <ProjectsWrapper>
            <ProjectSidebar />
            <ProjectsStyled>
                <ProjectsTitle><MainTitleText>Your projects</MainTitleText></ProjectsTitle>
                {
                    projects.projectsList().projects.map(project => <ProjectCard project={project}/>)
                }
            </ProjectsStyled>
        </ProjectsWrapper>
    );
};

export default Projects;

const ProjectsWrapper = styled.div`
  display: flex;
`
const ProjectsStyled = styled.div`
  height: 100vh;
  padding: 54px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`
const ProjectsTitle = styled.div`
  width: 100%;
  color: ${mainColor};
`