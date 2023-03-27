import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequestedAttempts(parseInt(event.target.value) || 0);
    }
    return (
        <div>
            <div>Attempts: {attempts}</div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateRequested}
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(attempts + requestedAttempts)}>
                gain
            </Button>
        </div>
    );
}
