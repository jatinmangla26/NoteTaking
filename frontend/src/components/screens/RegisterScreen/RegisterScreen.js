import axios from "axios";
import { React, useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import MainScreen from "../../MainScreen";
import { register } from "../../../actions/userActions";
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

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;
    useEffect(() => {
        if (userInfo) {
            navigate("/mynotes");
        }
    }, [navigate, userInfo]);
    const submitHandler = async (e) => {
        e.preventDefault();
        if (password != Confirmpassword) {
            setMessage("Passwords Do Not Match");
            setShow(true);
        } else {
            setShow(false);
            setMessage(null);
            dispatch(register(name, email, password, pic));
        }
    };

    const postPic = async (pics) => {
        if (!pics) return setPicMessage("Please Select a Image");
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "notetaker");
            data.append("cloud_name", "dfr5ujsd1");
            fetch("https://api.cloudinary.com/v1_1/dfr5ujsd1/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setPic(data.url.toString());
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            return setPicMessage("Please Select an Image");
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
                {error && (
                    <Alert
                        variant="danger"
                        onClose={() => {
                            setShow(false);
                        }}
                        dismissible
                    >
                        {error}
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
                    {picMessage && <Alert variant="danger">{picMessage}</Alert>}
                    <Form.Group constrolId="pic" className="mb-3">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            type="file"
                            size="lg"
                            onChange={(e) => postPic(e.target.files[0])}
                        />
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
