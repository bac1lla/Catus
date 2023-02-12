import styled from "styled-components";
import {accentColor3, backgroundColor, menuColor, textColorPrimary} from "../../styles/colors";

const Wrapper = styled.div`
  width: 100%;
  background: ${menuColor};
  border: 1px solid ${textColorPrimary};
  border-radius: 20px;
  padding: 30px;
`
const Row = styled.div`
  display: flex;
  align-items: center;
`
const Input = styled.input`
  width: 100%;
  background: ${backgroundColor};
  border: none;
  border-radius: 10px 0 0 10px;
  height: 40px;
  outline: none;
`
const Btn = styled.button`
  background: ${accentColor3};
  border: none;
  border-radius: 0 10px 10px 0;
  color: white;
  padding: 10px 25px;
  height: 40px;
`


export default Object.assign({Row, Input, Btn}, Wrapper)