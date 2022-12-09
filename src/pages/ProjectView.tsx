import React, {FC} from 'react';
import ProjectViewSidebar from "../components/ProjectViewSidebar";
import {Row} from '../styles/styled-components';
import styled from "styled-components";
import NavBar from "../components/NavBar";
import {HEADER_HEIGHT, WRAPPER_WIDTH} from "../styles/consts";
import {backgroundColor} from "../styles/colors";
import TasksTab from "../components/TasksTab";

//
// const members: IGroupMember[] = [
//     {name: "1", group: "567890"},
//     {name: "2", group: "567890"},
//     {name: "3", group: "567890"},
//     {name: "4", group: "567890"},
//     {name: "5", group: "567890"},
//     {name: "6", group: "5678956789876567890"},
//     {name: "7", group: "567890"},
//     {name: "8", group: "567yjnbhjmnbhjmnhjmn890567yjnbhjmnbhjmnhjmn890"},
//     {name: "9", group: "567890"},
//     {name: "10", group: "567890"},
//     {name: "11", group: "567890"},
//     {name: "12", group: "567890"},
//     {name: "13", group: "567890"},
//     {name: "14", group: "567890"},
//     {name: "15", group: "567890"},
//     {name: "16", group: "567890"},
// ]
//
// const tasks: IGroupTask[] = [
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
// ]
// const tasks1: IGroupTask[] = [
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
//     {type: "Homework", groupDeadline: "14.04", description: "Multiply matrix M on matrix N. Three times and then find the determinant.", comments: 23},
// ]

interface IProjectViewProps {

}

const ProjectView: FC<IProjectViewProps> = () => {
    return (
        <>
            <NavBar/>
            <ProjectWrapper>
                <Project>
                    {/*<ProjectViewSidebar members={members} name={"LA"}/>*/}
                    {/*<TasksTab tabName={"Overdue"} tasks={tasks}/>*/}
                    {/*<TasksTab tabName={"Active"} tasks={tasks}/>*/}
                    {/*<TasksTab tabName={"Planned"} tasks={tasks1}/>*/}
                    {/*<TasksTab tabName={"Finished"} tasks={[]} editable={false}/>*/}
                </Project>
            </ProjectWrapper>
        </>
    );
};

export default ProjectView;

const ProjectWrapper = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  min-width: ${WRAPPER_WIDTH};
  margin: auto;
  width: 90%;
`
const Project = styled(Row)`
  padding: 30px;
  //gap: 20px;
  background-color: ${backgroundColor};
  justify-content: space-between;
`

