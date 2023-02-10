import styled from "styled-components";
import {HEADER_HEIGHT, WRAPPER_WIDTH} from "../../styles/consts";
import {Line} from "../../styles/styled-components";
import {backgroundColor} from "../../styles/colors";

const ProjectWrapper = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  //min-width: ${WRAPPER_WIDTH};
  margin: auto;
  width: 90%;
  //position: relative;
`
const ProjectView = styled(Line)`
  //max-width: 80%;
  padding: 30px;
  //gap: 20px;
  background-color: ${backgroundColor};
  gap: 20px;
  //justify-content: space-between;
  height: 100%;
  //position: relative;
  //overflow: hidden;
  overflow-x: auto;
  //width: 100%;
`

const ProjectList = styled.div`
  height: 100%; 
  width: 100%;
  max-width: calc(100% - 255px - 10%);
  display: flex; 
  gap: 20px; 
`

const Project = {
    Wrapper: ProjectWrapper,
    ProjectView,
    ProjectList
}

export default Project