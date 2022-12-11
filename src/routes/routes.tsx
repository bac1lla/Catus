import {FC, ReactComponentElement} from "react";
import {LOGIN_ROUTE, PROJECT_ROUTE, PROJECTS_ROUTE, REGISTRATION_ROUTE} from "./consts";
import Auth from "../pages/Auth/Auth";
import ProjectView from "../pages/ProjectView/ProjectView";
import Projects from "../pages/Projects/Projects";

interface IRoute {
    path: string,
    Component: ReactComponentElement<FC>
}

export const authRoutes: IRoute[] = [
    {
        path: PROJECT_ROUTE  + "/:id",
        Component: <ProjectView />
    },
    {
        path: PROJECTS_ROUTE,
        Component: <Projects />
    }
]

export const publicRoutes: IRoute[] = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    }
]