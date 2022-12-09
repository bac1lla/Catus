import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import RegistrationForm from "../../components/Auth/RegistrationForm";
import LoginForm from "../../components/Auth/LoginForm";
import {useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import Paper from "../../assets/img/Paper.svg"
import AuthPage from './style';
import { Col } from '../../styles/styled-components';

const Auth: FC = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE


    return (
        <AuthPage.Auth>
            <AuthPage.Logo/>
            <AuthPage.Paper>
                {/*<Col>*/}

                <AuthPage.PaperImg src={Paper}/>
                {
                    isLogin ?
                        <LoginForm user={user}/>
                        :
                        <RegistrationForm user={user}/>
                }
                {/*<>*/}
                {/*    {*/}
                {/*        isLogin ?*/}
                {/*            <AuthPage.Check checked={isLogin}*/}
                {/*                            onClick={() => navigate(REGISTRATION_ROUTE)}>New to Catus?</AuthPage.Check>*/}
                {/*            :*/}
                {/*            <AuthPage.Check checked={isLogin}*/}
                {/*                            onClick={() => navigate(LOGIN_ROUTE)}>Already a cat?</AuthPage.Check>*/}

                {/*    }*/}
                {/*</>*/}
                {/*</Col>*/}

                {/*</AuthPaperImg>*/}
            </AuthPage.Paper>
        </AuthPage.Auth>
    );
};

export default observer(Auth);



