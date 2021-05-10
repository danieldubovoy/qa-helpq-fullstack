import { useState } from 'react';
import {Col, Form, Button, Modal} from 'react-bootstrap';
import axios from 'axios';

const CreateHelpTicket = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(false);
    const [title, setTitle] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [description, setDescription] = useState('');
    const [urgency, setUrgency] = useState('');
    const [department, setDepartment] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleSubmit = (event) => {
        const form = event.target;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        window.location.reload(false);
        console.log(title, firstName, lastName, description, urgency)
        const data = {
            title,
            "author": firstName + " " + lastName,
            description,
            urgency,
            department,
            "solution": "no solution",
            "status": false,
        }
        axios.post('http://localhost:8081/ticket/createTicket', data).then(response => {
            setfirstName('');
            setlastName('');
            setTitle('');
            setDescription('');
            setDepartment('');
            setUrgency('');
            setValidated(false);
            setModalShow(true);
        });
        setValidated(true);

    };

    return (
        <>
            <Button
                variant="primary"
                onClick={handleShow}>New Ticket
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                dialogClassName="ticketModal"
                scrollable={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create Help Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        required
                                        name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        value={firstName}
                                        onInput={e => setfirstName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onInput={e => setlastName(e.target.value)}
                                    />
                                </Form.Group>
                            <Form.Group as={Col} md="4">
                                <Form.Label>Department</Form.Label>
                                <Form.Control
                                    as="select"
                                    required
                                    name="department"
                                    value={department}
                                    onInput={e => setDepartment(e.target.value)}>
                                    <option value="unselected">Select Department</option>
                                    <option value="frontend">Front-End</option>
                                    <option value="backend">Back-End</option>
                                    <option value="fullstack">Full-Stack</option>
                                </Form.Control>
                            </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Title"
                                        required
                                        name="title"
                                        value={title}
                                        onInput={e => setTitle(e.target.value)} />
                                </Form.Group>
                             <Form.Group as={Col} md="4">
                                    <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Enter ticket details..."
                                            required
                                            name="description"
                                            value={description}
                                            onInput={e => setDescription(e.target.value)}></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} md="4">
                                    <Form.Label>Urgency</Form.Label>
                                    <Form.Control
                                        as="select"
                                        required
                                        name="urgency"
                                        value={urgency}
                                        onInput={e => setUrgency(e.target.value)}>
                                        <option value="unselected">Select Urgency</option>
                                        <option value="low">Low</option>
                                        <option value="medium">Medium</option>
                                        <option value="high">High</option>
                                    </Form.Control>
                                </Form.Group>
                        </Form>
                    <Button type="submit">Submit</Button>
                </Modal.Body>
            </Modal>

        </>
    );
}
export default CreateHelpTicket;