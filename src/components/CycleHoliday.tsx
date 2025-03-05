import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday = "🎄" | "🎃" | "🎂" | "🍗" | "💘";

const ABC_HOLIDAYS: Record<Holiday, Holiday> = {
    "🎂": "🎄",
    "🎄": "🎃",
    "🎃": "🍗",
    "🍗": "💘",
    "💘": "🎂"
};

const CHRONO_HOLIDAYS: Record<Holiday, Holiday> = {
    "💘": "🎂",
    "🎂": "🎃",
    "🎃": "🍗",
    "🍗": "🎄",
    "🎄": "💘"
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function changeAbc(): void {
        const newHoliday = ABC_HOLIDAYS[holiday];
        setHoliday(newHoliday);
    }

    function changeChrono(): void {
        const newHoliday = CHRONO_HOLIDAYS[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeAbc}>Advance by Alphabet</Button>
            <Button onClick={changeChrono}>Advance by Time in Year</Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
