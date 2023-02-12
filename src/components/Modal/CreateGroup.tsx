import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {MainTitleText} from '../../styles/fonts';
import ModalStyled, {Container, Input} from './style';

interface ICreateGroup {
    setShow: Dispatch<SetStateAction<boolean>>;
    onConfirm: (name: string) => void
}

const CreateGroup: FC<ICreateGroup> = ({setShow, onConfirm}) => {

    const [text, setText] = useState<string>("")

    return (
        <Container>
            <MainTitleText>Create Group</MainTitleText>
            <Input value={text} onChange={e => setText(e.target.value)}/>
            <ModalStyled.Footer>
                <ModalStyled.Btn
                    variant={"green"}
                    onClick={() => onConfirm(text)}
                >
                    Confirm
                </ModalStyled.Btn>
                <ModalStyled.Btn
                    variant={"blue"}
                    onClick={() => setShow(false)}
                >
                    Cancel
                </ModalStyled.Btn>
            </ModalStyled.Footer>
        </Container>
    );
};

export default CreateGroup;