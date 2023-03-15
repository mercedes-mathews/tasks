import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<string>("Christmas");

    function advanceByAlphabet(): void {
        if (holiday === "Christmas") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("St. Patricks Day");
        } else if (holiday === "St. Patricks Day") {
            setHoliday("Thanksgiving");
        } else {
            setHoliday("Christmas");
        }
    }

    function advanceByYear(): void {
        if (holiday === "St. Patricks Day") {
            setHoliday("Easter");
        } else if (holiday === "Easter") {
            setHoliday("Halloween");
        } else if (holiday === "Halloween") {
            setHoliday("Thanksgiving");
        } else if (holiday === "Thanksgiving") {
            setHoliday("Christmas");
        } else {
            setHoliday("St. Patricks Day");
        }
    }

    function holidayEmoji(): string {
        if (holiday === "Christmas") {
            return "🎄";
        } else if (holiday === "Easter") {
            return "🐰";
        } else if (holiday === "Halloween") {
            return "🎃";
        } else if (holiday === "St. Patricks Day") {
            return "🍀";
        } else {
            return "🦃";
        }
    }

    return (
        <div>
            <Button onClick={advanceByAlphabet}>Advance By Alphabet</Button>
            <Button onClick={advanceByYear}>Advance By Year</Button>
            <span>Holiday: {holidayEmoji()}</span>
        </div>
    );
}
