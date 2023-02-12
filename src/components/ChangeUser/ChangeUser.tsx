import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import Wrapper from "./style"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "../Modal/style";
import Modal from "../Modal/Modal";
import ChangePassword from "../ChangePassword/ChangePassword";
import {LOGIN_ROUTE} from "../../routes/consts";
import {useNavigate} from "react-router-dom";

interface IChangeUserProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    onConfirm: (name: string, description: string) => void
}

const ChangeUser: FC<IChangeUserProps> = ({setShow, onConfirm}) => {

    const {user, groups} = useContext(Context)
    const [change, setChange] = useState<boolean>(false)
    const [name, setName] = useState<string>("")
    const [showChangePassword, setShowChangePassword] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
    }, [])

    const changeUser = async () => {
        await user.changeUser(user.user().id, {
            name: name
        }).then(() =>
            setChange(false)
        ).catch(e => console.log(e))
    }

    const handelClick = () => {
        setName(user.user().name)
        setChange(true)
    }

    const hide = () => {
        setChange(false)
        setShow(false)
    }

    const logout = async () => {
        await user.logout()
        navigate(LOGIN_ROUTE)
    }

    return (
        <Wrapper>
            <Wrapper.Row>
                <Wrapper.Btn onClick={logout}>Log out</Wrapper.Btn>
            </Wrapper.Row>
            <Wrapper.Row>
                <Wrapper.Label>Login</Wrapper.Label>
                <Wrapper.Label>{user.user().login}</Wrapper.Label>
            </Wrapper.Row>
            <Wrapper.Row>
                <Wrapper.Label>Password</Wrapper.Label>
                <Wrapper.Btn onClick={() => setShowChangePassword(true)}>Change password</Wrapper.Btn>
            </Wrapper.Row>
            <Wrapper.Row>
                <Wrapper.Label>Name</Wrapper.Label>
                {
                    change ?
                        <Wrapper.Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        :
                        <Wrapper.Label>{user.user().name}</Wrapper.Label>
                }
            </Wrapper.Row>
            {
                user.user().role === "STUDENT" ?
                    <Wrapper.Row>
                        <Wrapper.Label>Group</Wrapper.Label>
                        <Wrapper.Label>{user.user().group?.name ? user.user().group?.name : "Not in group"}</Wrapper.Label>
                    </Wrapper.Row> :
                    <></>

            }
            <ModalStyled.Footer>
                {
                    change ?
                        <ModalStyled.Btn
                            variant={"green"}
                            onClick={() => changeUser()}
                        >
                            Save
                        </ModalStyled.Btn>
                        :
                        <ModalStyled.Btn
                            variant={"green"}
                            onClick={handelClick}
                        >
                            Change
                        </ModalStyled.Btn>
                }
                <ModalStyled.Btn
                    variant={"blue"}
                    onClick={hide}
                >
                    Cancel
                </ModalStyled.Btn>
            </ModalStyled.Footer>
            <Modal setShow={setShowChangePassword} show={showChangePassword}>
                <ChangePassword setShow={setShowChangePassword}/>
            </Modal>
        </Wrapper>
    );
};

export default observer(ChangeUser);

