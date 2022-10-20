import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import { FormControl } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../actions/userActions";
const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(logOut());
        navigate("/");
    };
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Note Taker</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="/myNotes">My Notes</Link>
                        </Nav.Link>

                        <NavDropdown title="Jatin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                My profile
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={submitHandler}>
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
