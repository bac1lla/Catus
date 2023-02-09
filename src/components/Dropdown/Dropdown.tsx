import React, { useState } from "react";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

interface DropdownProps {
    choices: string[];
    selected: string;
    onChange: (selected: string) => void;
    disabled?: boolean
}

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

const Dropdown: React.FC<DropdownProps> = ({ choices, selected, onChange, disabled = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContainer>
            <DropdownButton disabled={disabled} onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </DropdownButton>
            {isOpen && (
                <DropdownList>
                    {choices.map((choice) => (
                        <DropdownListItem
                            key={choice}
                            onClick={() => {
                                onChange(choice);
                                setIsOpen(false);
                            }}
                        >
                            {choice}
                        </DropdownListItem>
                    ))}
                </DropdownList>
            )}
        </DropdownContainer>
    );
};

export default observer(Dropdown);