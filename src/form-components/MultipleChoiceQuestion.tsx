import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);

    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <div>
                <Form.Group controlId="usersAnswer">
                    <Form.Label>What is the answer?</Form.Label>
                    <Form.Select value={answer} onChange={updateAnswer}>
                        {options.map((option: string) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>
            </div>
            {answer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
}
