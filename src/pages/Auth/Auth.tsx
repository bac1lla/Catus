import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import RegistrationForm from "../../components/Auth/RegistrationForm";
import LoginForm from "../../components/Auth/LoginForm";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE} from "../../routes/consts";
import Paper from "../../assets/img/Paper.svg"
import AuthPage from './style';

const Auth: FC = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <AuthPage.Auth>
            <AuthPage.Logo/>
            <AuthPage.Paper>
                <AuthPage.PaperImg src={Paper}/>
                {
                    isLogin ?
                        <LoginForm user={user}/>
                        :
                        <RegistrationForm user={user}/>
                }
            </AuthPage.Paper>
        </AuthPage.Auth>
    );
};

export default observer(Auth);



