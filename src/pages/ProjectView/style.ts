import styled from "styled-components";
import {HEADER_HEIGHT, WRAPPER_WIDTH} from "../../styles/consts";
import {Line} from "../../styles/styled-components";
import {backgroundColor} from "../../styles/colors";

const ProjectWrapper = styled.div`
  height: calc(100% - ${HEADER_HEIGHT});
  min-width: ${WRAPPER_WIDTH};
  margin: auto;
  width: 90%;
`
const ProjectView = styled(Line)`
  padding: 30px;
  //gap: 20px;
  background-color: ${backgroundColor};
  gap: 20px;
  //justify-content: space-between;
  height: 100%;
`

const Project = {
    Wrapper: ProjectWrapper,
    ProjectView
}

export default Project