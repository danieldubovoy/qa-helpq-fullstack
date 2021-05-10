import React, { useState } from "react";
import axios from "axios";
import { Col, Button, Modal, Form } from "react-bootstrap";


const UpdateHelpTicket = ({
                              id,
                              oldTitle,
                              oldAuthor,
                              oldDescription,
                              oldDepartment,
                              oldSolution,
                              oldUrgency,
                              oldStatus,
                          }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, settitle] = useState(oldTitle);
    const [author, setauthor] = useState(oldAuthor);
    const [description, setdescription] = useState(oldDescription);
    const [department, setDepartment] = useState(oldDepartment);
    const [solution, setsolution] = useState(oldSolution);
    const [urgency, seturgency] = useState(oldUrgency);
    const [status, setstatus] = useState(oldStatus);

    const ticketData = {
        title: title,
        author: oldAuthor,
        description: description,
        department: department,
        // timeCreated: timeCreated,
        solution: solution,
        urgency: urgency,
        status: status,
    };

    const updateData = (e) => {
        axios
            .put("http://localhost:8081/ticket/updateTicket/" + id, ticketData, {
                headers: {
                    'Access-Control-Allow-Origin' : '*'
                }
            })
            .then(function (response) {
                console.log(response);
                console.log(response);
                window.location.reload(false);
            })
            .catch(function (error) {
                console.log(ticketData);
                console.log(error);
            });
        handleClose();
    };

    return (
        <>
            <Button variant="link" onClick={handleShow}>
                <Button type="submit" style={{ marginRight: "1em" }} variant="warning" >Edit Ticket</Button>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="ticketModal"
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Col} md="4">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                defaultValue={oldTitle}
                                placeholder="Title Name"
                                onChange={(e) => {
                                    settitle(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group as={Col} md="4">
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                                as="select"
                                defaultValue={oldStatus}
                                onChange={(e) => {
                                    setstatus(e.target.value);
                                }}
                            >
                                <option>Unresolved</option>
                                <option>Pending</option>
                                <option>Resolved</option>
                            </Form.Control>
                        </Form.Group>

                    </Form>
                    <Button onClick={(e) => updateData(e)} variant="primary">Update Ticket</Button>
                </Modal.Body>
            </Modal>
        </>
    );
};
export default UpdateHelpTicket;
