import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 1360px;
  //padding: 70px 110px;
  height: 100vh;
`

interface ICol {
    gap?: number
}
export const Col = styled.div<ICol>`
  display: flex;
  flex-direction: column;
  gap: ${({gap}) => gap || "unset"}px;
`
interface IRow {
    justifyContent?: string
    gap?: number
}
export const Row = styled.div<IRow>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || "unset" };
  align-items: center;
  gap: ${({gap}) => gap || "unset"}px;
`