import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import state, {IState} from "./store";

export const Context = createContext<IState>(state)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={state}>
        <App/>
    </Context.Provider>
);