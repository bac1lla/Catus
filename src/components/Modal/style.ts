import styled from "styled-components";
import {MainTitleText, TitleText} from "../../styles/fonts";
import {
    accentColor2,
    accentColor3,
    accentColor4,
    accentColor5,
    backgroundColor,
    textColorPrimary
} from "../../styles/colors";


interface IModalStyled {
    show: boolean
}

const ModalStyled = styled.div<IModalStyled>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({show}) => show ? "flex" : "none"};
  align-items: center;
  justify-content: center;
`


const Content = styled.div`
  //width: 500px;
  background-color: ${backgroundColor};
  //transform: translateY(-200px);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  max-height: 90%;
  max-width: 95%;
  overflow-y: auto;
`

const Header = styled.div`
  padding: 10px;
`

const Footer = styled.div`
  //display: flex;
  align-items: center;
  //gap: 50px;
  justify-content: space-around;
  padding: 10px;
  width: 100%;
  display: flex;
  //width: 500px;
`

const Title = styled(TitleText)`

`

interface IContainer {
    width?: string,
    height?: string
}
const Body = styled.div`
  //padding: 10px;
  //border-top: 1px solid #eee;
  //border-bottom: 1px solid #eee;
`

interface IBtn {
    variant?: "green" | "blue" | "red"
}

const Btn = styled.button<IBtn>`
  width: 200px;
  //height: 40px;
  padding: 15px 25px;
  border: none;
  color: ${backgroundColor};
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: ${({variant}) => variant === "blue" ? accentColor3 : (variant === "red" ? accentColor5 : accentColor2)};
`

export default Object.assign({Title, Content, Header, Footer, Body, Btn}, ModalStyled)

export const Container = styled.div<IContainer>`
 //display: flex;
 // height: 300px;
 // width: 700px;
  width: ${({width}) => width ? (width + "px") : "700px"};
  height: ${({height}) => height ? (height + "px") : "400px"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
 
`

export const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 10px;
  width: 600px;
  height: 40px;
  padding: 5px 15px;
`

export const Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
