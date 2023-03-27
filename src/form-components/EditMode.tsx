import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function EditMode(): JSX.Element {
    const [inEditMode, setInEditMode] = useState<boolean>(false);
    const [usersName, setUsersName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setInEditMode(event.target.checked);
    }
    function updateUser(event: React.ChangeEvent<HTMLInputElement>) {
        setUsersName(event.target.value);
    }
    function updateStudentStatus(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <div>
                <Form.Check
                    type="switch"
                    id="in-edit-mode-check"
                    label="Edit Mode?"
                    checked={inEditMode}
                    onChange={updateEditMode}
                />
            </div>
            <div>
                {inEditMode === true && (
                    <Form.Group controlId="formUpdateName">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control value={usersName} onChange={updateUser} />
                    </Form.Group>
                )}
            </div>
            <div>
                {inEditMode === true && (
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateStudentStatus}
                    />
                )}
            </div>
            <div>
                {usersName} is{" "}
                {isStudent === true ? "a student" : "not a student"}
            </div>
        </div>
    );
}
