import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {backgroundColor, textColorSecondary} from "../../styles/colors";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "./style";
import Modal from "./Modal";
import ChangePassword from "./ChangePassword";
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
    const [login, setLogin] = useState<string>("")
    const [showChangePassword, setShowChangePassword] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        groups.fetchGroup(user.user().groupID)
    }, [])

    const changeUser = () => {
        user.changeUser(user.user().id, {
            login: login,
            name: name
        }).then(() =>
            setChange(false)
        ).catch(e => console.log(false))
    }

    const handelClick = () => {
        setName(user.user().name)
        setLogin(user.user().login)
        setChange(true)
    }

    const hide = () => {
        setChange(false)
        setShow(false)
    }

    const logout = async () => {
        user.logout()
        navigate(LOGIN_ROUTE)
    }

    return (
        <Wrapper>
            <Row>
                <Btn onClick={logout}>Log out</Btn>
            </Row>
            <Row>
                <Label>Login</Label>
                {
                    change ?
                        <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        :
                        <Label>{user.user().login}</Label>
                }
            </Row>
            <Row>
                <Label>Password</Label>
                <Btn onClick={() => setShowChangePassword(true)}>Change password</Btn>
            </Row>
            <Row>
                <Label>Name</Label>
                {
                    change ?
                        <Input
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                        :
                        <Label>{user.user().name}</Label>
                }
            </Row>
            <Row>
                <Label>Group</Label>
                <Label>{groups.group().name}</Label>
            </Row>
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
                {/*<ModalStyled.Btn*/}
                {/*    variant={"green"}*/}
                {/*    onClick={() => onConfirm(name, name)}*/}
                {/*>*/}
                {/*    Change*/}
                {/*</ModalStyled.Btn>*/}
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 900px;

  @media (max-width: 1300px) {
    max-width: 800px;
  }

  @media (max-width: 700px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 95%;
  }
`

const Label = styled(TitleText)`
  color: ${textColorSecondary};
`
const Btn = styled.button`
  background: #B5C29E;
  border: 2px solid #827A7A;
  border-radius: 15px;
  color: ${backgroundColor};
  width: 80px;
  height: 40px;
  
`
const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 50px;
  height: 57px;
  width: 100%;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #827A7A;
  border-radius: 5px;
  resize: none;
`
const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

const Col = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`
