import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white"
];
const DEFAULT_COLOR = COLORS[0];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(DEFAULT_COLOR);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <div>
                {COLORS.map((theColor: string) => (
                    <Form.Check
                        key={theColor}
                        inline
                        type="radio"
                        name="options"
                        onChange={updateColor}
                        id="color-check"
                        label={
                            <div
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    backgroundColor: theColor
                                }}
                            >
                                {theColor}
                            </div>
                        }
                        value={theColor}
                    />
                ))}
            </div>
            <span>You have chosen </span>
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: color,
                    display: "inline-block"
                }}
            >
                {color}
            </div>
        </div>
    );
}
