import React, {FC, useContext} from 'react';
import Logo from "../../assets/img/logo-nav.svg"
import LogOut from "../../assets/img/logOut-navBtn.svg"
import Task from "../../assets/img/task-navBtn.svg"
import Profile from "../../assets/img/profile-navBtn.svg"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';
import Menu from './style';
import {LOGIN_ROUTE} from "../../routes/consts";


const NavBar: FC = () => {
    const {user, projects} = useContext(Context)
    const navigate = useNavigate()

    const logout = async () => {
        user.logout()
        navigate(LOGIN_ROUTE)
    }

    return (
        <Menu.Wrapper>
            <Menu.NavBar>
                <Menu.Logo src={Logo}/>
                <Menu.Header>
                    {projects.project().title}
                </Menu.Header>
                <Menu.Nav>
                    <Menu.Btn img={Profile}/>
                    <Menu.Btn img={Task}/>
                    <Menu.Btn
                        img={LogOut}
                        onClick={() => logout()}
                    />
                </Menu.Nav>
            </Menu.NavBar>
        </Menu.Wrapper>
    );
};

export default observer(NavBar);