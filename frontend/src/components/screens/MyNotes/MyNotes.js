import React from "react";
import { Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import notes from "../../../data/notes";
const MyNotes = () => {
    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure")) {
        }
    };
    return (
        <MainScreen title="Welcome Back Jatin Mangle..">
            <Link to="createnote">
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
                    Create New Note
                </Button>
            </Link>
            {notes.map((note) => (
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
                            {note.title}
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
                </Card>
            ))}
        </MainScreen>
    );
};

export default MyNotes;
