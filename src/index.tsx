import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore"
import ProjectsStore from "./store/ProjectsStore";

interface IState {
    user: UserStore
    projects: ProjectsStore
}

export const user = new UserStore()
export const projects = new ProjectsStore()

export const Context = createContext<IState>({
    user,
    projects
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        user,
        projects
    }}>
        <App/>
    </Context.Provider>
);