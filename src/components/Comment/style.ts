import styled from "styled-components";
import {backgroundColor, textColorPrimary} from "../../styles/colors";

interface IWrapper {
    toMe?: boolean
}

const Wrapper = styled.div<IWrapper>`
  padding: 8px 25px;
  max-width: 90%;
  min-height: 50px;
  flex-shrink: 0;
  background-color: ${backgroundColor};
  align-self: ${({toMe}) => toMe ? "flex-start" : "flex-end"};
  border-radius: 10px;
  margin-bottom: 5px;
  //min-width: 90%;
`
const Image = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`
const Author = styled.span`
  display: block;
  margin-bottom: 5px;
  color: ${textColorPrimary};
`
const Content = styled.div`
  // 45px - Icon width 
  //width: calc(100% - 45px);

`

export default Object.assign({Image, Author, Content}, Wrapper)