import {FC, ReactComponentElement} from "react";
import {LOGIN_ROUTE, PROJECTS_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import ProjectView from "./pages/ProjectView";
import Projects from "./pages/Projects";

interface IRoute {
    path: string,
    Component: ReactComponentElement<FC>
}

export const routes: IRoute[] = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: PROJECTS_ROUTE,
        Component: <ProjectView />
    },
    {
        path: PROJECTS_ROUTE + "3",
        Component: <Projects />
    }
]