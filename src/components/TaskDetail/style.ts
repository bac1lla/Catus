import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {accentColor5, backgroundColor, mainColor} from "../../styles/colors";

const Task = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 900px;
  height: 90%;
  overflow: auto;

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

const Label = styled(TitleText)`
  color: ${mainColor};
`
const Btn = styled.button`
  background: ${accentColor5};
  border: none;
  border-radius: 10px;
  color: ${backgroundColor};
  padding: 15px 25px;
  margin-right: 10px;
  //height: 40px;
  //width: 80px;
`
const Input = styled.input`
  border: 1px solid #827A7A;
  border-radius: 10px;
  height: 40px;
  width: 100%;
`
const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid #827A7A;
  border-radius: 5px;
  resize: none;
  @media (max-width: 500px) {
    height: 100px;
  }
`
const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

const RowChange = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export default Object.assign({Col, RowChange, Row, TextArea, Input, Btn, Label}, Task)