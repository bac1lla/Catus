import React, { useState } from "react";
import styled from "styled-components";
import {observer} from "mobx-react-lite";

interface DatePickerProps {
    onChange: (date: number[]) => void;
    disabled?: boolean
}

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

const DatePicker: React.FC<DatePickerProps> = ({ onChange, disabled = false }) => {
    const [day, setDay] = useState("01");
    const [month, setMonth] = useState("01");
    const [year, setYear] = useState("2023");

    const handleChange = (): void => {
        onChange([+year, +month, +day]);
        // onChange([+day, +month, +year]);
    };

    return (
        <DatePickerContainer>
            <DatePickerSelect disabled={disabled} value={day} onChange={(e) => { setDay(e.target.value); handleChange(); }}>
                {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                        {i + 1}
                    </option>
                ))}
            </DatePickerSelect>
            <DatePickerSelect disabled={disabled} value={month} onChange={(e) => { setMonth(e.target.value); handleChange(); }}>
                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={String(i + 1).padStart(2, "0")}>
                        {i + 1}
                    </option>
                ))}
            </DatePickerSelect>
            <DatePickerSelect disabled={disabled} value={year} onChange={(e) => { setYear(e.target.value); handleChange(); }}>
                {Array.from({ length: 10 }, (_, i) => (
                    <option key={2025 - i} value={String(2025 - i)}>
                        {2025 - i}
                    </option>
                ))}
            </DatePickerSelect>
        </DatePickerContainer>
    );
};

export default observer(DatePicker);