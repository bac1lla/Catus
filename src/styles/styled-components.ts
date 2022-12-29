import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 1360px;
  //padding: 70px 110px;
  height: 100vh;
`

interface IColumn {
    gap?: number
}
export const Column = styled.div<IColumn>`
  display: flex;
  flex-direction: column;
  gap: ${({gap}) => gap || "unset"}px;
`
interface ILine {
    justifyContent?: string
    gap?: number
}
export const Line = styled.div<ILine>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "unset" };
  align-items: center;
  gap: ${({gap}) => gap || "unset"}px;
`