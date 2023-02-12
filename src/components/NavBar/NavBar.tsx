import React, {FC, useContext, useEffect, useState} from 'react';
import Logo from "../../assets/img/logo.svg"
import LogOut from "../../assets/img/logOut-navBtn.svg"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';
import Menu from './style';
import {LOGIN_ROUTE, MAIN_ROUTE} from "../../routes/consts";
import {useParams} from "react-router";
import MainPage from "../../pages/MainPage/MainPage";
import Confirm from "../Modal/Confirm";
import Modal from "../Modal/Modal";
import ChangeProjectName from "../ChangeProjectName/ChangeProjectName";
import Task from "../../assets/img/edit-icon.svg";


const NavBar: FC = () => {
    const {user, projects} = useContext(Context)
    const [showConfirm, setShowConfirm] = useState(false)
    const [showChangeProjectName, setShowChangeProjectName] = useState(false)
    const navigate = useNavigate()
    const params = useParams()

    useEffect(() => {
        if (!projects.project().id) {
            projects.fetchProjectById(0, Number(params.id))
        }
    }, [])

    const logout = async () => {
        await projects.exitFromProject(user.user().id, Number(params.id))
        setShowConfirm(false)
        navigate(MAIN_ROUTE)
    }

    const handleClick = () => {
        if (user.user().role !== "STUDENT") {
            navigate(MAIN_ROUTE)
        } else {
            setShowConfirm(true)
        }
    }

    return (
        <Menu.Wrapper>
            <Menu.NavBar>
                <Menu.Logo src={Logo} onClick={() => navigate(MAIN_ROUTE)}/>
                <Menu.Header>
                    {projects.project().title}
                </Menu.Header>
                <Menu.Nav>
                    {/*<Menu.Btn img={Profile}/>*/}
                    {
                        user.user().role !== "STUDENT" ?
                            <Menu.Btn img={Task} onClick={() => setShowChangeProjectName(true)}/>
                            : <></>
                    }
                    <Menu.Btn
                        img={LogOut}
                        onClick={handleClick}
                    />
                </Menu.Nav>
            </Menu.NavBar>
            <Modal setShow={setShowChangeProjectName} show={showChangeProjectName}>
                <ChangeProjectName setShow={setShowChangeProjectName}/>
            </Modal>
            <Modal setShow={setShowConfirm} show={showConfirm}>
                <Confirm onConfirm={logout}
                         title={`Are you sure you want to exit from project?`}
                         setShow={setShowConfirm}/>
            </Modal>
        </Menu.Wrapper>
    );
};

export default observer(NavBar);