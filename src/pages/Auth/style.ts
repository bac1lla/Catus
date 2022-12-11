import styled from "styled-components";
import {menuColor} from "../../styles/colors";
import {SIZE} from "../../styles/consts";
import {LightText} from "../../styles/fonts";
import CheckRole from "../../assets/img/CheckRole.svg";

const AuthStyled = styled.div`
  background-color: ${menuColor};
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${SIZE.laptop}) {
    display: block;
    margin: auto;
    padding: 30px;
  }
`
const AuthLogo = styled.div`
  width: 270px;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("./../../assets/img/logo.svg");

  @media (max-width: ${SIZE.laptop}) {
    display: none;
  }
`
const AuthPaper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZE.mobileL}) {
    margin-top: 40%;
    height: 70%;
  }
`
const AuthPaperImg = styled.img`
  height: 100%;
  position: absolute;
  //width: 100%;
  @media (max-width: ${SIZE.laptop}) {
    width: 100%;
    //display: none;
  }
`
interface IAuthCheckRole {
    checked: boolean
}
const AuthCheckRole = styled(LightText)<IAuthCheckRole>`
  background-image: ${({checked}) => checked ? `url(${CheckRole})` : "none"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const AuthPage = {
    Auth: AuthStyled,
    Logo: AuthLogo,
    PaperImg: AuthPaperImg,
    Paper: AuthPaper,
    Check: AuthCheckRole
}

export default AuthPage