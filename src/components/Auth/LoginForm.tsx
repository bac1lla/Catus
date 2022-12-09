import React, {FC, useState} from 'react';
import UserStore from "../../store/UserStore";
import {useNavigate} from "react-router-dom";
import {PROJECTS_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import Auth from './style';

interface ILoginFormProps {
    user: UserStore
}

const LoginForm: FC<ILoginFormProps> = ({user}) => {

    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const navigate = useNavigate()

    const auth = async () => {
        await user.login(login, password)
        if (user.isAuth()) {
            navigate(PROJECTS_ROUTE)
        }
    }

    return (
        <Auth.Wrapper>
            <Auth.TitleWrapper.Purple>
                <Auth.Title>Welcome</Auth.Title>
            </Auth.TitleWrapper.Purple>
            <Auth.Form gap={50}>
                <Auth.Input.Wrapper.Green>
                    <Auth.Input.Text>Login:</Auth.Input.Text>
                    <Auth.Input.Input
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        type="text"
                        placeholder={"Text goes here..."}/>
                </Auth.Input.Wrapper.Green>
                <Auth.Input.Wrapper.Blue>
                    <Auth.Input.Text>Password:</Auth.Input.Text>
                    <Auth.Input.Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder={"Text goes here..."}/>
                </Auth.Input.Wrapper.Blue>
            </Auth.Form>
            <Auth.TitleWrapper.Green>
                <Auth.Btn onClick={() => auth()}>
                    <Auth.Title>Log in</Auth.Title>
                </Auth.Btn>
            </Auth.TitleWrapper.Green>
            <Auth.Check onClick={() => navigate(REGISTRATION_ROUTE)}>
                New to Catus?
            </Auth.Check>
        </Auth.Wrapper>
    )

};

export default LoginForm;


