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
  //position: relative;

  @media (max-width: ${SIZE.laptop}) {
    display: block;
    margin: auto;
    //align-items: center;
    //justify-content: center;
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
  //width: 100%;
  //width: 737px;
  //max-width: 737px;
  //background-image: url("../../assets/img/Paper.svg");
  //background-repeat: no-repeat;
  //background-size: contain;
  //background-size: 100% 100%;
  //background-position: center;
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //justify-content: space-between;
  //padding: 150px 100px;

  @media (max-width: ${SIZE.mobileL}) {
    //width: 100%;
    margin-top: 40%;
    height: 70%;
  }
`
const AuthPaperImg = styled.img`
  //background-image: url("../../assets/img/Paper.svg");
  //background-repeat: no-repeat;
  //background-size: contain;
  //background-size: 100% 100%;
  //background-position: center;
  height: 100%;
  //align-self: center;
  position: absolute;
  //top: 0;
  width: 100%;
  //display: none;
  @media (max-width: ${SIZE.laptop}) {
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