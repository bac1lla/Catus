import styled from "styled-components";
import {
    accentColor2,
    accentColor3,
    backgroundColor,
    mainColor,
    textColorPrimary,
    textColorSecondary
} from "../../styles/colors";
import {LightText} from "../../styles/fonts";

interface ICard {
    canDelete?: boolean,
    choose?:boolean
}

const Card = styled.div<ICard>`
  background: ${({choose}) => choose ? accentColor2 : backgroundColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px;
  width: ${({canDelete}) => canDelete ? "370px" : "250px"};
  overflow-y: auto;
`
const Image = styled.div`
  background-color: ${accentColor3};
  border-radius: 100%;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 500px) {
    display: none;
  }
`
const Name = styled(LightText)`
  color: ${mainColor};
`
const Group = styled(LightText)`
  color: ${textColorPrimary};
`
interface ITrash {
    show?: boolean
}
const Trash = styled.img<ITrash>`
  width: 32px;
  height: 27px;
  display: ${({show}) => show ? "inline-block" : "none"};
`
const Info = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-direction: column;
`

export default Object.assign({Image, Name, Trash, Info, Group}, Card)