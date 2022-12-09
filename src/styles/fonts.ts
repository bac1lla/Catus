import styled from "styled-components";
import {SIZE} from "./consts";

export const MainText = styled.span`
  font-weight: 400;
  font-size: 16px;
`
export const LightText = styled.span`
  font-weight: 300;
  font-size: 25px;

  @media (max-width: ${SIZE.laptop}) {
    font-size: 20px;
  }
  @media (max-width: ${SIZE.mobileL}) {
    font-size: 18px;
  }
  @media (max-width: ${SIZE.mobileS}) {
    font-size: 14px;
  }
`
export const HeaderText = styled.span`
  font-weight: 300;
  font-size: 60px;
  
  @media (max-width: ${SIZE.laptop}) {
    font-size: 55px;
  }
  @media (max-width: ${SIZE.tablet}) {
    font-size: 35px;
  }
  @media (max-width: ${SIZE.mobileL}) {
    font-size: 24px;
  }
  @media (max-width: ${SIZE.mobileS}) {
    font-size: 20px;
  }
`
export const TextInfo = styled.span`
  font-weight: 300;
  font-size: 25px;
`
export const LittleText = styled.span`
  font-weight: 300;
  font-size: 8px;
`
export const MainTitleText = styled.span`
  font-weight: 400;
  font-size: 60px;

  @media (max-width: ${SIZE.laptop}) {
    font-size: 55px;
  }
  @media (max-width: ${SIZE.tablet}) {
    font-size: 35px;
  }
  @media (max-width: ${SIZE.mobileL}) {
    font-size: 24px;
  }
  @media (max-width: ${SIZE.mobileS}) {
    font-size: 20px;
  }
  
`
export const SecondaryTitleText = styled.span`
  font-weight: 400;
  font-size: 30px;
`
export const TitleText = styled.span`
  font-weight: 400;
  font-size: 30px;
`
export const StudentsText = styled.span`
  font-weight: 400;
  font-size: 16px;
`
export const HomeworkText = styled.span`
  font-weight: 300;
  font-size: 10px;
`
export const AuthText = styled.span`
  font-weight: 400;
  font-size: 20px;
`