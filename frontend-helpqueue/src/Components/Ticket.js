import axios from "axios";
import React from "react";
import {Col, Row, Button, Card, Accordion} from "react-bootstrap";

import UpdateHelpTicket from "./UpdateHelpTicket";

const Ticket = ({
                     id,
                     title,
                     author,
                     description,
                     timeCreated,
                     solution,
                     urgency,
                     status,
                     department,

                 }) => {
    const deleteTicket = (e) => {
        console.log("delete data");
        axios.delete("http://localhost:8081/ticket/deleteTicket/" + id, {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(
            (response) => {
                console.log(response);
                window.location.reload(false);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    function refreshPage() {
        window.location.reload(false);
    }

    return (
        <Card className="viewList">
            <Card.Header>
                <Row>
                    <Accordion.Toggle as={Col} eventKey={title} xs={3}>
                        <p className="titleText">Title:</p>
                        <h5 className="dataText">
                            {title}
                        </h5>
                    </Accordion.Toggle>
                    <Col xs={2}>
                        <p className="titleText">Author:</p>
                        <h6 className="dataText">
                            {author}
                        </h6>
                    </Col>
                    <Col xs={2}>
                        <p className="titleText">Description:</p>
                        <h6 className="dataText">
                            {description}
                        </h6>
                    </Col>
                    <Col xs={2}>
                        <p className="titleText">Urgency:</p>
                        <h6 className="dataText">
                            {urgency}
                        </h6>
                    </Col>
                    <Col xs={2}>
                        <p className="titleText">Department:</p>
                        <h6 className="dataText">
                            {department}
                        </h6>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Footer>
                <Col>
                    <UpdateHelpTicket
                        id={id}
                        oldTitle={title}
                        oldAuthor={author}
                        oldDescription={description}
                        oldDepartment={department}
                        oldSolution={solution}
                        oldUrgency={urgency}
                        oldStatus={status}
                    />
                    <Button onClick={(e) => deleteTicket(e)} variant="danger">Delete</Button>
                    <div className={status}>{status}</div>
                </Col>
            </Card.Footer>
        </Card>
    );
};
export default Ticket;
