import styled from "styled-components";
import {TitleText} from "../../styles/fonts";
import {accentColor5, backgroundColor, mainColor} from "../../styles/colors";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 900px;

  @media (max-width: 1300px) {
    max-width: 800px;
  }

  @media (max-width: 700px) {
    max-width: 600px;
  }

  @media (max-width: 576px) {
    max-width: 95%;
  }
`

const Label = styled(TitleText)`
  color: ${mainColor};
`

interface IInput {
    error: boolean
}
const Input = styled.input<IInput>`
  border: 1px solid #827A7A;
  border-radius: 10px;
  height: 40px;
  width: 100%;
  padding: 5px 15px;
  outline: none;
  background-color: ${({error}) => error ? accentColor5 : backgroundColor};
`

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
`

export default Object.assign({Label, Input, Row}, Wrapper)