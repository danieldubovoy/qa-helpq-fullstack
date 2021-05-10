import React from "react";
import { Accordion, Card } from "react-bootstrap";

const Department = ({ dataSortSetup }) => {
    const sortList = [
        {
            text: "All",
            request: "/",
        },
        {
            text: "Front-End",
            request: "/department/frontend",
        },
        {
            text: "Back-End",
            request: "/department/backend",
        },
        {
            text: "Full-Stack",
            request: "/department/fullstack",
        },
    ];

    return (
        <Accordion>
            <Card className="featureStyle">
                <Accordion.Toggle
                    as={Card.Header}
                    eventKey="0"
                    className="p-0 featureStyle"
                >
                    <div className="featureStyleInner">
                        <h6>Department</h6>
                    </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="p-0">
                        {sortList.map((field) => (
                            <>
                                <div
                                    className="featureStyleInner inside"
                                    onClick={() => dataSortSetup(field.request)}
                                >
                                    <p>{field.text}</p>
                                </div>
                            </>
                        ))}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
};
export default Department;