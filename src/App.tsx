import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UD CISC275 - Mercedes Mathews </h1>
            </header>
            <p>
                <img
                    src="https://i.pinimg.com/originals/17/e8/86/17e88607786ac60648034610d02271d6.jpg"
                    alt="A smiley face"
                    width="200"
                    height="200"
                />
            </p>
            <ul>
                <li>I am 21 years old!</li>
                <li>I am a junior and a Comp Sci major</li>
                <li>I have lived in Delaware my whole life</li>
            </ul>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            First Column
                            <div id="rectangle"></div>
                        </Col>
                        <Col>
                            Second Column
                            <div id="rectangle"></div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
