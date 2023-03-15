import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(4);

    function leftRoll(): void {
        setLeftDie(d6());
    }
    function rightRoll(): void {
        setRightDie(d6());
    }
    function showResult(): string {
        if (leftDie === rightDie) {
            if (leftDie === 1) {
                return "Lose";
            } else {
                return "Win";
            }
        }
        return "";
    }

    return (
        <div>
            <Button onClick={leftRoll}>Roll Left</Button>
            <Button onClick={rightRoll}>Roll Right</Button>
            <span data-testid="left-die">Left: {leftDie} </span>
            <span data-testid="right-die">Right: {rightDie}</span>
            <span> Result: {showResult()}</span>
        </div>
    );
}
