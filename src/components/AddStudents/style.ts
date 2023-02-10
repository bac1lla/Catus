import styled from "styled-components";
import {LightText, MainTitleText} from "../../styles/fonts";
import {Column, Line} from "../../styles/styled-components";
import {
    accentColor3,
    accentColor4,
    accentColor5,
    backgroundColor,
    menuColor,
    textColorPrimary
} from "../../styles/colors";

const Header = styled(MainTitleText)`

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  max-width: 900px;
  width: 95%;
  margin: auto;


  @media (max-width: 700px) {
    min-width: 95%;
    width: unset;
    
  }
`

const Row = styled(Line)`
  width: 100%;
  justify-content: center;
  gap: 50px;

  @media (max-width: 1300px) {
    gap: 30px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 576px) {
    width: 95%;
  }
`
const Label = styled(LightText)`

  @media (max-width: 576px) {
    font-size: 14px;
  }
`
const Search = styled(Column)`
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`
const Input = styled.input`
  border: 1px solid ${textColorPrimary};
  border-radius: 50px;
  height: 40px;
  padding: 5px 15px;
  outline: none;
  width: 400px;
  max-width: 400px;

  @media (max-width: 1300px) {
    width: 350px;
    max-width: 350px;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`

interface IBtn {
    variant?: "green" | "blue" | "red"
}

const Btn = styled.button<IBtn>`
  width: 200px;
  height: 40px;
  border: 1px solid ${textColorPrimary};
  color: ${backgroundColor};
  border-radius: 15px;
  background-color: ${({variant}) => variant === "blue" ? accentColor3 : (variant === "red" ? accentColor5 : accentColor4)};

  @media (max-width: 1300px) {
    width: 150px;
  }

  @media (max-width: 700px) {
    width: 95%;
  }
`

const List = styled.div`
  background: ${menuColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  min-width: 90%;
  height: 400px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;

  @media (max-width: 1300px) {
    height: 350px;
    padding: 30px;
  }

  @media (max-width: 700px) {
    height: 300px;
    padding: 20px;
    border-radius: 20px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`

export default Object.assign({Header, Row, Label, Input, Search, List, Btn}, Wrapper)