import React from "react";
import { Accordion, Card } from "react-bootstrap";

const Urgency = ({ dataSortSetup }) => {
    const sortList = [
        {
            text: "All",
            request: "/",
        },
        {
            text: "Low",
            request: "/urgency/low",
        },
        {
            text: "Medium",
            request: "/urgency/medium",
        },
        {
            text: "High",
            request: "/urgency/high",
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
                        <h6>Urgency</h6>
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
export default Urgency;