import React, {Dispatch, FC, ReactNode, SetStateAction, useEffect} from 'react';
import ModalStyled from "./style";
import {observer} from "mobx-react-lite";

interface Modal {
    setShow: Dispatch<SetStateAction<boolean>>,
    children: ReactNode,
    show: boolean
}

const Modal: FC<Modal> = ({show, setShow, children}) => {

    const closeOnEscapeKeyDown = (e: any) => {
        if ((e.charCode || e.keyCode) === 27) {
            setShow(false)
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    return (
        <ModalStyled onClick={() => setShow(false)} show={show}>
            <ModalStyled.Content onClick={e => e.stopPropagation()}>
                <ModalStyled.Body>{children}</ModalStyled.Body>
            </ModalStyled.Content>
        </ModalStyled>
    );
};

export default observer(Modal);

