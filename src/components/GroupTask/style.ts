import styled from "styled-components";
import {accentColor2, accentColor5, backgroundColor, menuColor} from "../../styles/colors";
import {LittleText} from "../../styles/fonts";
import {Column, Line} from "../../styles/styled-components";

const Task = styled.div`
  background-color: ${backgroundColor};
  padding: 8px 15px;
  border-radius: 20px;
`
const Name = styled(LittleText)`
  color: ${backgroundColor};
  background-color: ${accentColor2};
  padding: 2px 4px;
  border-radius: 20px;
  width: fit-content;
`
const Description = styled(LittleText)`
  color: ${menuColor};
`
const Deadline = styled(LittleText)`
  border-radius: 20px;
  padding: 2px 4px;
  color: ${backgroundColor};
  background-color: ${accentColor5};
`
const Comment = styled(LittleText)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  color: ${backgroundColor};
  background-color: ${menuColor};
  padding: 2px 4px;

  && > img {
    width: 12px;
    height: 9px;
  }
`
const Col = styled(Column)`
  gap: 6px;
`
const Row = styled(Line)`
  justify-content: space-between;
  gap: 6px;
`

export default Object.assign({Name, Deadline, Description, Comment, Row, Col}, Task)