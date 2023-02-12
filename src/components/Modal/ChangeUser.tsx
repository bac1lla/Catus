import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {accentColor5, backgroundColor, mainColor, textColorSecondary} from "../../styles/colors";
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
    const [showChangePassword, setShowChangePassword] = useState<boolean>(false)
    const navigate = useNavigate()

    useEffect(() => {
        // groups.fetchGroup(user.user().group.id || 0)
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
            <Row>
                <Btn onClick={logout}>Log out</Btn>
            </Row>
            <Row>
                <Label>Login</Label>
                <Label>{user.user().login}</Label>
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
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        :
                        <Label>{user.user().name}</Label>
                }
            </Row>
            {
                user.user().role === "STUDENT" ?
                    <Row>
                        <Label>Group</Label>
                        <Label>{groups.group().name}</Label>
                    </Row> :
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
  color: ${mainColor};
`
const Btn = styled.button`
  background: ${accentColor5};
  //border: 2px solid #827A7A;
  border-radius: 10px;
  color: ${backgroundColor};
  //width: 80px;
  //height: 40px;
  padding: 15px 25px;
  border: none;
`
const Input = styled.input`
  border: 1px solid black;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  text-align: end;
  outline: none;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

