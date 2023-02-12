import styled from "styled-components";

const DatePickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DatePickerSelect = styled.select`
  margin: 0 8px;
  padding: 8px 12px;
  border: 1px solid black;
  border-radius: 4px;
`;

export default Object.assign({Select: DatePickerSelect}, DatePickerContainer)

