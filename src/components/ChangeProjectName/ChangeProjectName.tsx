import React, {Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {accentColor2, backgroundColor, mainColor, textColorSecondary} from "../../styles/colors";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ModalStyled from "./../Modal/style"
import {useParams} from "react-router";

interface IChangeProjectNameProps {
    setShow: Dispatch<SetStateAction<boolean>>
}

const ChangeProjectName: FC<IChangeProjectNameProps> = ({setShow}) => {

    const {user, projects} = useContext(Context)
    const [projectName, setProjectName] = useState<string>(projects.project().title)
    const params = useParams()

    useEffect(() => {
        // projects.fetchProjectById(user.user().id, Number(params.id))
    }, [])

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
                <Label>Project title:</Label>
            <Row>
                <Input
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                />
            </Row>
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

const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  padding: 5px 15px;
`

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`
