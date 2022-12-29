import styled from "styled-components";
import {Line} from "../../styles/styled-components";
import {MainTitleText, SecondaryTitleText} from "../../styles/fonts";
import {accentColor3, backgroundColor, mainColor, menuColor} from "../../styles/colors";

const Window = styled.div`
  width: 90%;
  height: 800px;
  margin: auto;
`
const Header = styled(Line)`
  justify-content: space-between;
  margin-bottom: 30px;
`
const Title = styled(MainTitleText)`
  color: ${mainColor};
`
const Count = styled(SecondaryTitleText)`
  color: ${backgroundColor};
  padding: 25px 40px;
  background: ${accentColor3};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`
const List = styled.div`
  background: ${menuColor};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
  width: 100%;
  height: 85%;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
`

export default Object.assign({Header, Title, Count, List}, Window)