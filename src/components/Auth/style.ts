import styled from "styled-components";
import {Column} from "../../styles/styled-components";
import {LightText, LittleText, MainTitleText, TextInfo} from "../../styles/fonts";
import {SIZE} from "../../styles/consts";
import ZhushPurple from "../../assets/img/MarkerZhush-purple.svg";
import ZhushGreenInput from "../../assets/img/Marker-input-green.svg";
import ZhushBlueInput from "../../assets/img/Marker-input-blue.svg";
import ZhushGreen from "../../assets/img/MarkerZhush-green.svg";
import CheckRole from "../../assets/img/CheckRole.svg"

const AuthStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 50px;
  height: 100%;
  z-index: 1;

  @media (min-width: ${SIZE.laptop}) {
    padding: 150px 50px;
  }
  @media (max-width: ${SIZE.laptop}) {
    padding: 100px 50px;
  }
  @media (max-width: ${SIZE.tablet}) {
    padding: 150px 30px;
  }
  @media (max-width: ${SIZE.mobileL}) {
    padding: 70px 30px;
  }
  @media (max-width: ${SIZE.mobileM}) {
    padding: 120px 30px;
  }
  @media (max-width: ${SIZE.mobileS}) {
    padding: 150px 30px;
  }
`

const AuthTitleText = styled(MainTitleText)`
`

interface IImgProps {
    img?: string
}

const AuthTextWrapper = styled.div<IImgProps>`
  background-image: ${({img}) => img ? `url(${img})` : "none"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${SIZE.tablet}) {
    height: 120px;
  }
  @media (max-width: ${SIZE.mobileM}) {
    height: 70px;
    width: 70%;
  }
  
`

const AuthTextWrapperGreen = styled(AuthTextWrapper)`
  background-image: url(${ZhushGreen});
  margin-top: 30px;
`

const AuthTextWrapperPurple = styled(AuthTextWrapper)`
  background-image: url(${ZhushPurple});
`

const AuthForm = styled(Column)`
  gap: 20px;
  width: 100%;
  @media (max-width: ${SIZE.mobileL}) {
    gap: 5px;
  }
`

const AuthInputWrapper = styled.div<IImgProps>`
  width: 100%;
  display: flex;
  align-items: center;
  //width: 582px;
  background-image: ${({img}) => img ? `url(${img})` : "none"};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  justify-content: space-between;
  height: 56px;
  padding: 16px 44px;
  @media (max-width: ${SIZE.mobileM}) {
    height: 30px;
    //width: 70%;
  }
`

const AuthInputWrapperGreen = styled(AuthInputWrapper)`
  background-image: url(${ZhushGreenInput});
`

const AuthInputWrapperTransparent = styled(AuthInputWrapper)`
  background-color: transparent;
`

const AuthInputWrapperBlue = styled(AuthInputWrapper)`
  background-image: url(${ZhushBlueInput});
`

const AuthInputText = styled(LightText)`
  text-align: left;
`

const AuthInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 5px 20px;
`

const TransparentBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
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
const AuthCheck = styled(TextInfo)`
  background-image: url(${CheckRole});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  margin-top: 30px;
`

const Auth = {
    Wrapper: AuthStyled,
    Input: {
        Input: AuthInput,
        Wrapper: {
            Green: AuthInputWrapperGreen,
            Blue: AuthInputWrapperBlue,
            Transparent: AuthInputWrapperTransparent
        },
        Text: AuthInputText,
    },
    Form: AuthForm,
    Btn: TransparentBtn,
    Title: AuthTitleText,
    TitleWrapper: {
        Green: AuthTextWrapperGreen,
        Purple: AuthTextWrapperPurple,
    },
    CheckRole: AuthCheckRole,
    Check: AuthCheck
}

export default Auth