import { React, useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
// import notes from "../../../data/notes";
import axios from "axios";
const MyNotes = () => {
    const [notes, setNotes] = useState([]);
    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure")) {
        }
    };
    const fetchNotes = async () => {
        const { data } = await axios.get("http://localhost:5000/api/notes");
        setNotes(data);
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        <MainScreen title="Welcome Back Jatin Mangle..">
            <Link to="createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>
            {notes.map((note) => (
                <Accordion key={note._id}>
                    <Card style={{ margin: 10 }}>
                        <Card.Header style={{ display: "flex" }}>
                            <span
                                style={{
                                    color: "black",
                                    textDecoration: "none",
                                    flex: 1,
                                    cursor: "pointer",
                                    alignSelf: "center",
                                    fontSize: 18,
                                }}
                            >
                                <Accordion.Header
                                    as={Card.Text}
                                    variant="link"
                                    eventKey="0"
                                >
                                    {note.title}
                                </Accordion.Header>
                            </span>
                            <div>
                                <Button href={`/note/${note._id}`}>Edit</Button>
                                <Button
                                    variant="danger"
                                    className="mx-2"
                                    onClick={() => deleteHandler(note._id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </Card.Header>
                        <Accordion.Body eventKey="0">
                            <Card.Body>
                                <h4>
                                    <Badge variant="success">
                                        Category -{note.category}
                                    </Badge>
                                </h4>
                                <blockquote class="blockquote mb-0">
                                    <p>{note.content}</p>
                                    <footer class="blockquote-footer">
                                        --created on
                                        <cite title="Source Title">Date</cite>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Accordion.Body>
                    </Card>
                </Accordion>
            ))}
        </MainScreen>
    );
};

export default MyNotes;
