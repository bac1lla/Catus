import styled from "styled-components";

const DropdownContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  width: 100%;
  background-color: white;
  color: black;
  padding: 8px 16px;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
`;

const DropdownList = styled.ul`
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
`;

const DropdownListItem = styled.li`
  color: black;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export default Object.assign({
    Button: DropdownButton,
    List: DropdownList,
    Item: DropdownListItem
}, DropdownContainer)