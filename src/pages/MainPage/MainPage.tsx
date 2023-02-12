import React, {useState} from 'react';
import ProjectSidebar from "../../components/Sidebar/ProjectSidebar";
import Main from "./style";
import {useLocation} from "react-router-dom";
import {GROUPS_ROUTE, PROJECTS_ROUTE} from "../../routes/consts";
import Projects from "../../components/Projects/Projects";
import GroupList from "../../components/GroupsList/GroupsList";

const MainPage = () => {
        const [show, toggleShow] = useState<boolean>(false)

        const location = useLocation()

        const locations = {
            [PROJECTS_ROUTE]: <Projects showSidebar={show} toggleShowSidebar={toggleShow}/>,
            [GROUPS_ROUTE]: <GroupList showSidebar={show} toggleShowSidebar={toggleShow}/>
        }

        return (
            <Main>
                <ProjectSidebar show={show} toggleShow={toggleShow}/>
                <Main.Content>
                    {
                        locations[location.pathname]
                    }
                </Main.Content>
            </Main>
        );
    }
;

export default MainPage;