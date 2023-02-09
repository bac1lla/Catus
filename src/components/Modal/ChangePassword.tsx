import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {accentColor2, backgroundColor, textColorSecondary} from "../../styles/colors";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "./style";

interface IChangePasswordProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    onConfirm?: (name: string, description: string) => void
}

const ChangePassword: FC<IChangePasswordProps> = ({setShow, onConfirm}) => {

    const {user} = useContext(Context)
    const [password, setPassword] = useState<string>("")
    const [passwordRepeat, setPasswordRepeat] = useState<string>("")
    const [err, setErr] = useState<boolean>(false)

    useEffect(() => {
    }, [])

    const changePassword = () => {
        if (password === passwordRepeat) {
            setErr(false)
            user.changeUser(user.user().id, {
                password: password
            }).then(() => hide())
        } else {
            setErr(true)
        }
    }

    const hide = () => {
        setShow(false)
    }


    return (
        <Wrapper>

            <Row>
                <Label>Password</Label>
                <Input
                    error={err}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Row>
            <Row>
                <Label>Repeat password</Label>
                <Input
                    error={err}
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
            </Row>
            <ModalStyled.Footer>

                <ModalStyled.Btn
                    variant={"green"}
                    onClick={() => changePassword()}
                >
                    Save
                </ModalStyled.Btn>
                <ModalStyled.Btn
                    variant={"blue"}
                    onClick={hide}
                >
                    Cancel
                </ModalStyled.Btn>
            </ModalStyled.Footer>
        </Wrapper>
    );
};

export default observer(ChangePassword);

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
`
interface IInput {
    error: boolean
}
const Input = styled.input<IInput>`
  border: 1px solid ${({error}) => error ? accentColor2 : "#827A7A"};
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
