import React, {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "../Modal/style";
import Wrapper from "./style";

interface IChangePasswordProps {
    setShow: Dispatch<SetStateAction<boolean>>;
}

const ChangePassword: FC<IChangePasswordProps> = ({setShow}) => {

    const {user} = useContext(Context)
    const [password, setPassword] = useState<string>("")
    const [passwordRepeat, setPasswordRepeat] = useState<string>("")
    const [err, setErr] = useState<boolean>(false)

    const changePassword = async () => {
        if (password.trim() === passwordRepeat.trim()) {
            setErr(false)
            await user.changeUser(user.user().id, {
                password: password
            }).then(() => hide())
            setPassword("")
            setPasswordRepeat("")
        } else {
            setErr(true)
        }
    }

    const hide = () => {
        setShow(false)
    }

    return (
        <Wrapper>
            <Wrapper.Row>
                <Wrapper.Label>Password</Wrapper.Label>
                <Wrapper.Input
                    error={err}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Wrapper.Row>
            <Wrapper.Row>
                <Wrapper.Label>Repeat password</Wrapper.Label>
                <Wrapper.Input
                    error={err}
                    value={passwordRepeat}
                    onChange={(e) => setPasswordRepeat(e.target.value)}
                />
            </Wrapper.Row>
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
