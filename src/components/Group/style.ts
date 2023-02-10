import styled from "styled-components";
import {LightText} from "../../styles/fonts";
import {accentColor3, mainColor, textColorSecondary} from "../../styles/colors";

const GroupStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
`
const Name = styled(LightText)`
  color: ${mainColor};
  background: ${textColorSecondary};
  border-radius: 10px;
  padding: 5px 15px;
  text-transform: uppercase;
`
const Count = styled(LightText)`
  background: ${accentColor3};
  border-radius: 10px;
  padding: 5px 15px;
`

export default Object.assign({Name, Count}, GroupStyled)