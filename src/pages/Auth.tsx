import React, {FC, useContext, useEffect, useState} from 'react';
import {Col, Container} from '../styles/styled-components';
import styled from "styled-components";
import {menuColor} from "../styles/colors";
import {AuthText, LightText, MainText, MainTitleText} from '../styles/text';
import ZhushPurple from '../assets/img/MarkerZhush-purple.svg'
import ZhushGreen from '../assets/img/MarkerZhush-green.svg'
import ZhushGreenInput from '../assets/img/Marker-input-green.svg'
import ZhushBlueInput from '../assets/img/Marker-input-blue.svg'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {IAllProjects} from "../models/response/ProjectsResponse";
import ProjectCard from "../components/ProjectCard";

const Auth: FC = () => {
    const [login, setLogin] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [proj, setProj] = useState<IAllProjects>({projects: [], total: 0})
    const {user, projects} = useContext(Context)

    useEffect(() => {
        // projects.getAllProjects("1")
        projects.fetchAllProjects(1)
        // getProj()
    }, [])

    async function getProj() {
        // setProj(response)
        // return response
    }

    // projects.projectsList().projects.map(project => console.log(project))
    // console.log(projects.projectsList())

    return (
        <AuthStyled>
            <AuthLogo/>
            <AuthPaper>
                <AuthTextWrapper img={ZhushPurple}>
                    <MainTitleText>
                        {user.isAuth() ? "Welcome" : "Sign up"}
                    </MainTitleText>
                </AuthTextWrapper>
                <AuthForm gap={50}>
                    <AuthInputWrapper img={ZhushGreenInput}>
                        <AuthInputText>Login:</AuthInputText>
                        <AuthInput
                            value={login}
                            onChange={e => setLogin(e.target.value)}
                            type="text"
                            placeholder={"Text goes here..."}/>
                    </AuthInputWrapper>
                    <AuthInputWrapper img={ZhushBlueInput}>
                        <AuthInputText>Password:</AuthInputText>
                        <AuthInput
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            placeholder={"Text goes here..."}/>
                    </AuthInputWrapper>
                </AuthForm>
                {
                    projects.isLoading() ?
                        <p>Загрузка</p>
                        :
                        // "3"
                        // proj.projects.map(project => <ProjectCard project={project}/>)
                        projects.projectsList().projects.map(project => <ProjectCard project={project}/>)
                }
                {/*{*/}
                {/*    store.isAuth ?*/}
                {/*        <></>*/}
                {/*        :*/}
                {/*        <></>*/}
                {/*}*/}

                <AuthTextWrapper img={ZhushGreen}>
                    <TransparentBtn onClick={() => user.login(login, password)}>
                        <MainTitleText>
                            {user.isAuth() ? "Log in" : "Sign in"}
                        </MainTitleText>
                    </TransparentBtn>
                </AuthTextWrapper>

            </AuthPaper>
        </AuthStyled>
    );
};

export default observer(Auth);

const AuthStyled = styled.div`
  background-color: ${menuColor};

`
const AuthLogo = styled.img`
  width: 270px;
  height: 400px;
`
const AuthPaper = styled.div`
  height: 100%;
  width: 737px;
  position: absolute;
  top: 0;
  right: 0;
  background-image: url("../assets/img/Paper.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 150px 100px;
`
const AuthInputWrapper = styled.div<IImgProps>`
  display: flex;
  align-items: center;
  width: 582px;
  background-image: ${({img}) => img ? `url(${img})` : "none"};
  background-repeat: no-repeat;
  justify-content: space-between;
  height: 56px;
  padding: 16px 44px;
`
const AuthInputText = styled(LightText)`
  //width: 120px;
  text-align: left;
`
const AuthInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 5px 20px;
`

interface IImgProps {
    img?: string
}

const AuthTextWrapper = styled.div<IImgProps>`
  background-image: ${({img}) => img ? `url(${img})` : "none"};
  background-repeat: no-repeat;
  width: 505px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const AuthForm = styled(Col)`
  gap: 20px;
  width: 100%;
`
const TransparentBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
`
