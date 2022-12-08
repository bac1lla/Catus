import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {routes} from "../routes";
import Auth from "../pages/Auth";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )
            }
            <Route path="*" element={<Auth/>}/>
        </Routes>
    );
};

export default AppRouter;