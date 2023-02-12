import React, {Dispatch, FC, SetStateAction, useContext, useState} from 'react'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "./../Modal/style"
import {useParams} from "react-router";
import Wrapper from "./style";

interface IChangeProjectNameProps {
    setShow: Dispatch<SetStateAction<boolean>>
}

const ChangeProjectName: FC<IChangeProjectNameProps> = ({setShow}) => {

    const {user, projects} = useContext(Context)
    const [projectName, setProjectName] = useState<string>(projects.project().title)
    const params = useParams()

    const changeProjectName = async () => {
        await projects.refreshProject(user.user().id, Number(params.id), {
            title: projectName
        }).then(() => hide())
    }

    const hide = () => {
        setShow(false)
    }

    return (
        <Wrapper>
            <Wrapper.Label>Project title:</Wrapper.Label>
            <Wrapper.Row>
                <Wrapper.Input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </Wrapper.Row>
            <ModalStyled.Footer>
                <ModalStyled.Btn
                    variant={"green"}
                    onClick={changeProjectName}
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

export default observer(ChangeProjectName);

