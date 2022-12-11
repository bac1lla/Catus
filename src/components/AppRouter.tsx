import React, {FC, useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes/routes";
import {Context} from "../index";
import NotFound from "../pages/NotFound";
import {observer} from "mobx-react-lite";

const AppRouter: FC = () => {

    const {user} = useContext(Context)

    return (
        <Routes>
            {user.isAuth() && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component}/>
            )}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default observer(AppRouter);