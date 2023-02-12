import styled from "styled-components";
import {Column, Line} from "../../styles/styled-components";
import {accentColor2, backgroundColor, mainColor} from "../../styles/colors";
import {LittleText} from "../../styles/fonts";

const Member = styled(Line)`
  padding: 7px;
  background-color: ${backgroundColor};
  ${LittleText};
  align-items: flex-start;
  gap: 7px;
  width: 100%;
  border-radius: 10px;
  //width: 183px;
`
const Icon = styled.div`
  min-width: 30px;
  min-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${accentColor2};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${backgroundColor};
  font-size: 20px;

`
const Text = styled(LittleText)`
  color: ${mainColor};
  width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Col = styled(Column)`
  gap: 6px;
`
const Trash = styled.img`
  width: 15px;
  height: 15min-px;
  display: inline-block;
`

export default Object.assign({Icon, Text, Col, Trash}, Member)
