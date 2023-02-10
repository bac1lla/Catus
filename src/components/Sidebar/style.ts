import styled from "styled-components";
import {Column} from "../../styles/styled-components";
import {
    accentColor1,
    accentColor2,
    mainColor,
    menuColor,
    textColorPrimary,
    textColorSecondary
} from "../../styles/colors";
import {SIZE} from "../../styles/consts";
import {MainText} from "../../styles/fonts";

interface IProjectSidebarStyled {
    show: boolean
}

const SidebarStyled = styled(Column)<IProjectSidebarStyled>`
  background-color: ${mainColor};
  align-items: center;
  padding: 30px;
  gap: 60px;
  height: 100vh;
  min-height: 100vh;
  width: 427px;
  flex-shrink: 0;

  @media (max-width: ${SIZE.laptop}) {
  justify-content: space-between;
    gap: 20px;
    width: 300px;
  }

  @media (max-width: ${SIZE.tablet}) {
    display: ${({show}) => show ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  @media (max-width: ${SIZE.mobileL}) {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

`
const Logo = styled.div`
  width: 91px;
  height: 135px;
  background-repeat: no-repeat;
  background-image: url("../../assets/img/logo.svg");
  //margin-bottom: 10px;
  @media (max-width: ${SIZE.tablet}) {
    display: none;
  }
`
const PersonWrapper = styled.div`
  height: 230px;
  border-radius: 25px;
  background-color: ${menuColor};
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  padding: 58px 30px;
`
const Person = styled(Column)`
  gap: 15px;
  height: 230px;
  width: 100%;
`
const PersonLogo = styled.div`
  position: absolute;
  top: 33px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${accentColor2};
  width: 164px;
  height: 164px;
  border-radius: 50%;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.4);
  color: ${accentColor1};

  @media (max-width: ${SIZE.laptop}) {
    display: none;
  }
`
const PersonInfo = styled.div`
  color: ${textColorPrimary};
  border-radius: 10px;
  background-color: ${textColorSecondary};
  padding: 5px 12px;
  width: 100%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  justify-content: end;

  @media (max-width: ${SIZE.laptop}) {
    justify-content: center;
  }
`
const PersonInfoText = styled(MainText)`
  //width: 136px;
`
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${textColorSecondary};
  background-color: ${menuColor};
  //height: 78px;
  font-size: 30px;
  border-radius: 15px;
  width: 100%;
  height: 79px;
`
const InfoCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  color: ${textColorSecondary};
  background-color: ${accentColor2};
  height: 55px;
  color: ${accentColor1};
  border-radius: 15px;
`

const BurgerBtn = styled.div`
  height: 40px;
  width: 40px;
  background-image: url("../../assets/img/burger-menu.svg");
  background-repeat: no-repeat;
  margin-right: 30px;
  filter: invert(100%);
  align-self: end;

  @media (min-width: ${SIZE.tablet}) {
    display: none;
  }
`

const Sidebar = {
    Wrapper: SidebarStyled,
    Logo,
    Person: {
        Person,
        Wrapper: PersonWrapper,
        Logo: PersonLogo,
        Info: PersonInfo,
        InfoText: PersonInfoText
    },
    Info: {
        Text: Info,
        Value: InfoCount
    },
    BurgerBtn
}

export default Sidebar