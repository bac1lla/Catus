import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {mainColor, menuColor, textColorPrimary} from "../styles/colors";
import {MainTitleText} from "../styles/fonts";
import {Row} from "../styles/styled-components";
import Logo from "../assets/img/logo-nav.svg"
import LogOut from "../assets/img/logOut-navBtn.svg"
import Task from "../assets/img/task-navBtn.svg"
import Profile from "../assets/img/profile-navBtn.svg"
import {HEADER_HEIGHT, WRAPPER_WIDTH} from "../styles/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from 'react-router-dom';
import {LOGIN_ROUTE} from "../utils/consts";

// state manager to actual project name

const NavBar: FC = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    async function logout() {
        await user.logout()
        navigate(LOGIN_ROUTE)
    }

    return (
        <Menu>
            <Wrapper>
                <MenuLogo src={Logo}/>
                <MenuHeader>
                    "Project Name"
                </MenuHeader>
                <MenuNav>
                    <MenuButton><MenuButtonIcon src={Profile} alt={""}/></MenuButton>
                    <MenuButton><MenuButtonIcon src={Task} alt={""}/></MenuButton>
                    <MenuButton
                        onClick={() => logout()}
                    ><MenuButtonIcon src={LogOut} alt={""}/></MenuButton>
                </MenuNav>
            </Wrapper>
        </Menu>
    );
};

export default observer(NavBar);

const Menu = styled.div`
  background-color: ${mainColor};
  width: 100%;
  height: ${HEADER_HEIGHT};
`
const Wrapper = styled.div`
  height: ${HEADER_HEIGHT};
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${WRAPPER_WIDTH};
  width: 90%;

`
const MenuHeader = styled(MainTitleText)`
  color: ${textColorPrimary};
`
const MenuLogo = styled.img`
  width: 77px;
  height: 73px;
`
const MenuNav = styled(Row)`
  gap: 20px;
`
const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #827A7A;
  border-radius: 10px;
  background-color: ${mainColor};
`
const MenuButtonIcon = styled.img`
  object-fit: contain;
`