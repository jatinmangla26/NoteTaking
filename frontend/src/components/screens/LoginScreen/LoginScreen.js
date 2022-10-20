import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MainScreen from "../../MainScreen";
import { useDispatch, useSelector } from "react-redux";
import "./LoginScreen.css";
import { login } from "../../../actions/userActions";
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;
    useEffect(() => {
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };
    return (
        <MainScreen title="LOGIN">
            <div className="loginContainer">
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label className="mb-3">Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Label className="mb-3">Password</Form.Label>
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
