import axios from "axios";
import { React, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";
import "./LoginScreen.css";
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const submitHandler = async (e) => {
        e.preventDefault();

        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            };
            setLoading(true);
            console.log(email, password);
            const { data } = await axios.post(
                "http://localhost:5000/api/users/login",
                {
                    email,
                    password,
                }
            );
            localStorage.setItem("userInfo", JSON.stringify(data));
            console.log(data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data.message);
        }
    };
    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        New Customer ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
};

export default LoginScreen;
