import React, {useState} from "react";
import DropdownContainer from "./style";
import {observer} from "mobx-react-lite";

interface DropdownProps {
    choices: string[];
    selected: string;
    onChange: (selected: string) => void;
    disabled?: boolean
}

const Dropdown: React.FC<DropdownProps> = ({choices, selected, onChange, disabled = false}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <DropdownContainer>
            <DropdownContainer.Button disabled={disabled} onClick={() => setIsOpen(!isOpen)}>
                {selected}
            </DropdownContainer.Button>
            {isOpen && (
                <DropdownContainer.List>
                    {choices.map((choice) => (
                        <DropdownContainer.Item
                            key={choice}
                            onClick={() => {
                                onChange(choice);
                                setIsOpen(false);
                            }}
                        >
                            {choice}
                        </DropdownContainer.Item>
                    ))}
                </DropdownContainer.List>
            )}
        </DropdownContainer>
    );
};

export default observer(Dropdown);