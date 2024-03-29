import React, {Dispatch, FC, SetStateAction, useState} from "react";
import ModalStyled, {Container, Input} from "../Modal/style";
import {LightText, MainTitleText} from "../../styles/fonts";

interface ICreateProjectProps {
    setShow: Dispatch<SetStateAction<boolean>>;
    onConfirm: (name: string) => void
}

const CreateProject: FC<ICreateProjectProps> = ({setShow, onConfirm}) => {

    const [name, setName] = useState<string>("")

    return (
        <Container>
            <MainTitleText>Create Project</MainTitleText>
            <LightText>Name:</LightText>
            <Input value={name} onChange={e => setName(e.target.value)}/>
            <ModalStyled.Footer>
                <ModalStyled.Btn
                    variant={"green"}
                    onClick={() => onConfirm(name)}
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

export default CreateProject;