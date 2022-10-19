import axios from "axios";
import { React, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../MainScreen";
import "./LoginScreen.css";
const RegisterScreen = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(false);
    const [pic, setPic] = useState("https://picsum.photos/200/300");
    const [password, setPassword] = useState("");
    const [Confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email, password, Confirmpassword, name);
        if (password != Confirmpassword) {
            setMessage("Passwords Do Not Match");
            setShow(true);
        } else {
            setShow(false);
            setMessage(null);
            try {
                setLoading(true);
                console.log(email, password);
                const { data } = await axios.post(
                    "http://localhost:5000/api/users",
                    {
                        name,
                        email,
                        password,
                        pic,
                    }
                );
                localStorage.setItem("userInfo", JSON.stringify(data));
                console.log(data);
                setLoading(false);
            } catch (error) {
                setError(error.response.data.message);
            }
        }
    };
    return (
        <MainScreen title="REGISTER">
            <div className="loginContainer">
                {show && (
                    <Alert
                        variant="danger"
                        onClose={() => {
                            setShow(false);
                        }}
                        dismissible
                    >
                        {message}
                    </Alert>
                )}

                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name" className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail" className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirm Password"
                            value={Confirmpassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group constrolId="pic" className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control type="file" size="lg" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row className="py-3">
                    <Col>
                        Aready Have a Account ?{" "}
                        <Link to="/login">Login Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
};

export default RegisterScreen;
