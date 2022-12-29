import styled from "styled-components";
import {MainTitleText} from "../../styles/fonts";
import {mainColor} from "../../styles/colors";
import {SIZE} from "../../styles/consts";

const Groups = styled.div`
  //display: flex;
  //flex-direction: column;
  //align-items: center;
  //gap: 40px;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Title = styled(MainTitleText)`
  color: ${mainColor};
`
const Search = styled.input`
  height: 40px;
  padding: 5px 15px;
  outline: none;
  max-width: 450px;
  border: 1px solid #827A7A;
  border-radius: 50px;
`
const List = styled.div`
  padding: 10px;
  display: flex;
  //flex-wrap: wrap;
  //justify-content: space-between;
  gap: 20px;
  flex-direction: column;
  //align-items: flex-start;
  @media (max-width: ${SIZE.laptop}) {
    //padding: 30px;
    gap: 10px;
  }
`
interface IBurgerBtn {
    show: boolean
}
const BurgerBtn = styled.div<IBurgerBtn>`
  height: 85px;
  width: 85px;
  background-image: url("../../assets/img/burger-menu.svg");
  background-repeat: no-repeat;
  margin-right: 30px;

  @media (min-width: ${SIZE.tablet}) {
    display: none;
  }
  @media (max-width: ${SIZE.tablet}) {
    display: ${({show}) => show ? "inline-block" : "none"};
  }
  @media (max-width: ${SIZE.laptop}) {
    margin-right: 20px;
    height: 40px;
    width: 40px;
  }
`

export default Object.assign({Header, Title, Search, List, BurgerBtn}, Groups)