import React, {FC, useState} from 'react';
import UserStore from "../../store/UserStore";
import Auth from "./style";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, PROJECTS_ROUTE} from "../../utils/consts";

interface IRegistrationFormProps {
    user: UserStore
}

const RegistrationForm: FC<IRegistrationFormProps> = ({user}) => {

    const [login, setLogin] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordCheck, setPasswordCheck] = useState<string>("")
    const [role, setRole] = useState<string>("Student")
    const navigate = useNavigate()

    async function registration() {
        await user.registration(login, password, name, role)
        if (user.isAuth()) {
            navigate(PROJECTS_ROUTE)
        }
    }

    return (
        <Auth.Wrapper>
            <Auth.TitleWrapper.Purple>
                <Auth.Title>Sign up</Auth.Title>
            </Auth.TitleWrapper.Purple>
            <Auth.Form gap={50}>
                <Auth.Input.Wrapper.Green>
                    <Auth.Input.Text>Login:</Auth.Input.Text>
                    <Auth.Input.Input
                        value={login}
                        onChange={e => setLogin(e.target.value)}
                        type="login"
                        placeholder={"Text goes here..."}/>
                </Auth.Input.Wrapper.Green>
                <Auth.Input.Wrapper.Green>
                    <Auth.Input.Text>Name:</Auth.Input.Text>
                    <Auth.Input.Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="name"
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
                <Auth.Input.Wrapper.Blue>
                    <Auth.Input.Text>Repeat:</Auth.Input.Text>
                    <Auth.Input.Input
                        value={passwordCheck}
                        onChange={e => setPasswordCheck(e.target.value)}
                        type="password"
                        placeholder={"Text goes here..."}/>
                </Auth.Input.Wrapper.Blue>
                <Auth.Input.Wrapper.Transparent>
                    <Auth.Input.Text>Role:</Auth.Input.Text>
                    <Auth.CheckRole checked={role === "Student"}
                                    onClick={() => setRole("Student")}>Student</Auth.CheckRole>
                    <Auth.CheckRole checked={role === "Teacher"}
                                    onClick={() => setRole("Teacher")}>Teacher</Auth.CheckRole>
                </Auth.Input.Wrapper.Transparent>
            </Auth.Form>
            <Auth.TitleWrapper.Green>
                <Auth.Btn onClick={() => registration()}>
                    <Auth.Title>Sign in</Auth.Title>
                </Auth.Btn>
            </Auth.TitleWrapper.Green>

            <Auth.Check onClick={() => navigate(LOGIN_ROUTE)}>
                Already a cat?
            </Auth.Check>
        </Auth.Wrapper>
    );
};

export default RegistrationForm;