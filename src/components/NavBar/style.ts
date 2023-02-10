import styled from "styled-components";
import {mainColor, textColorPrimary} from "../../styles/colors";
import {HEADER_HEIGHT, WRAPPER_WIDTH} from "../../styles/consts";
import {MainTitleText} from "../../styles/fonts";
import {Line} from "../../styles/styled-components";

const Wrapper = styled.div`
  background-color: ${mainColor};
  width: 100%;
  height: ${HEADER_HEIGHT};
`
const NavBarMenu = styled.div`
  height: ${HEADER_HEIGHT};
  margin: auto;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  //min-width: ${WRAPPER_WIDTH};
  width: 90%;

`
const MenuHeader = styled(MainTitleText)`
  color: ${textColorPrimary};
`
const MenuLogo = styled.img`
  width: 77px;
  height: 73px;
`
const MenuNav = styled(Line)`
  gap: 20px;
`
interface IMenuButton {
    img?: string
}
const MenuButton = styled.button<IMenuButton>`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #827A7A;
  border-radius: 10px;
  //padding: 5px;
  background-color: ${mainColor};
  background-size: contain;
  background-image: ${({img}) => img ? `url(${img})` : "none"};
  background-repeat: no-repeat;
  background-position: center;
`

const Menu = {
    NavBar: NavBarMenu,
    Wrapper,
    Header: MenuHeader,
    Logo: MenuLogo,
    Nav: MenuNav,
    Btn: MenuButton,

}

export default Menu