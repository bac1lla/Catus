import styled from "styled-components";
import {Line} from "../../styles/styled-components";
import {LightText, MainTitleText, SecondaryTitleText} from "../../styles/fonts";
import {
    accentColor2,
    accentColor3,
    backgroundColor,
    mainColor,
    menuColor,
    textColorSecondary
} from "../../styles/colors";

const Window = styled.div`
  //width: 90%;
  width: 900px;
  min-height: 90%;
  margin: auto;

  @media (max-width: 1000px) {
    //max-width: 95%;
    width: 800px;
    max-width: 90%;
    //max-width: 90%;
  }
  //
  @media (max-width: 700px) {
    max-width: 95%;
    width: unset;
  }
`
const Header = styled(Line)`
  justify-content: space-between;
  margin-bottom: 30px;
  flex-wrap: wrap;
`
const Title = styled(MainTitleText)`
  color: ${mainColor};
`
const Count = styled(LightText)`
  color: ${backgroundColor};
  padding: 15px 20px;
  background: ${accentColor3};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  //height: 60px;
  //width: 130px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 500px) {
    padding: 5px 10px;
  }
`

const Btn = styled.button`
  color: ${backgroundColor};
  //padding: 10px;
  background: ${accentColor2};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  border: none;
  padding: 15px 20px;
  //height: 60px;
  //width: 130px;
  
  @media (max-width: 500px) {
    padding: 5px 10px;
  }
  
`
const List = styled.div`
  background: ${menuColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: 500px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`

export default Object.assign({Header, Title, Count, List, Btn}, Window)