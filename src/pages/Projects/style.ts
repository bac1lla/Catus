import styled from "styled-components";
import {SIZE} from "../../styles/consts";
import {mainColor} from "../../styles/colors";

const ProjectsWrapper = styled.div`
  display: flex;
`
const ProjectsStyled = styled.div`
  height: 100vh;
  padding: 50px;
  overflow-y: scroll;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  @media (max-width: ${SIZE.laptop}) {
    padding: 30px;
    gap: 10px;
  }
`
const ProjectsTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${mainColor};
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

const ProjectsPage = {
    Title: ProjectsTitle,
    Wrapper: ProjectsWrapper,
    Projects: ProjectsStyled,
    BurgerBtn: BurgerBtn,
}

export default ProjectsPage