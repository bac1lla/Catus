import styled from "styled-components";
import {accentColor4, backgroundColor, textColorPrimary, textColorSecondary} from "../../styles/colors";
import {SIZE} from "../../styles/consts";
import {MainText} from "../../styles/fonts";
import {Col} from "../../styles/styled-components";

const ProjectCardStyled = styled.div`
  display: flex;
  padding: 20px;
  background: ${backgroundColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  gap: 11px;
  align-items: center;
  width: 420px;
  height: 200px;
  
  @media (max-width: ${SIZE.laptop}) {
    width: 300px;
    padding: 10px;
  }
  @media (max-width: ${SIZE.tablet}) {
    width: 300px;
  }
`
const ProjectCardImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 20px;
  background-color: ${accentColor4};
  flex-shrink: 0;
  display: flex;
  
  @media (max-width: ${SIZE.laptop}) {
    align-self: flex-start;
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${SIZE.tablet}) {
    display: none;
  }
`
const ProjectCardRow = styled.div`
  background-color: ${textColorSecondary};
  border-radius: 20px;
  padding: 2px 0 2px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 27px;
`
const ProjectCardRowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const ProjectCardRowText = styled(MainText)`
  color: ${textColorPrimary};
`
const ProjectCardRowValue = styled(ProjectCardRow)`
  background-color: ${textColorPrimary};
  padding: 2px 10px;
  width: unset;
`
const ProjectCardRowInfoText = styled(MainText)`
  color: ${textColorSecondary};
`
const ProjectCardTrashIcon = styled.img`
  width: 32px;
  height: 27px;
`
const ProjectCardInfo = styled(Col)`
  gap: 10px;
  width: 100%;
`

const Card = {
    Wrapper: ProjectCardStyled,
    Image: ProjectCardImage,
    Row: {
        Wrapper: ProjectCardRowWrapper,
        Row: ProjectCardRow,
        Text: ProjectCardRowText,
        Value: ProjectCardRowValue,
        Info: ProjectCardRowInfoText
    },
    Info: ProjectCardInfo,
    Trash: ProjectCardTrashIcon
}

export default Card