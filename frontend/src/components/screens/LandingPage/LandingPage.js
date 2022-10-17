import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
    return (
        <div className="main">
            <Container>
                <Row>
                    <div className="intro-text">
                        <div>
                            <h1 className="title">Welcome to Note Taker</h1>
                            <p className="subtitle">
                                One Safe Place For all Your Notes
                            </p>
                        </div>
                        <div className="buttonContainer">
                            <a href="/login">
                                <Button size="lg" className="landingButton">
                                    Login
                                </Button>
                            </a>
                            <a href="/signup">
                                <Button
                                    size="lg"
                                    className="landingButton"
                                    variant="outline-primary"
                                >
                                    Sign Up
                                </Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default LandingPage;
