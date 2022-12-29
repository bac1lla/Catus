import styled from "styled-components";
import {SIZE} from "../../styles/consts";

const Main = styled.div`
    display: flex;
    
`
const Content = styled.div`
  height: 100vh;
  max-height: 100vh;
  padding: 50px;
  overflow: hidden;
  width: 100%;
  //display: flex;
  //flex-wrap: wrap;
  //justify-content: space-between;
  //gap: 20px;
  //align-items: flex-start;
  @media (max-width: ${SIZE.laptop}) {
    padding: 30px;
    //gap: 10px;
  }
  
`
export default Object.assign({Content},Main)