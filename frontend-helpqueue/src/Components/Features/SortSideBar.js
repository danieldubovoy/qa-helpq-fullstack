import React from "react";
import { Accordion, Card } from "react-bootstrap";


const SortSideBar = ({ dataSortSetup }) => {
    const sortList = [
        {
            text: "All",
            request: "/",
        },
        {
            text: "Author",
            request: "/sort/author",
        },
        {
            text: "Time",
            request: "/sort/timeStamp",
        },
        {
            text: "Status",
            request: "/sort/status",
        },
        {
            text: "Title",
            request: "/sort/title",
        },
    ];

    return (
        <div className="featureStyle mb-3">
            <Accordion>
                <Card className="featureStyle">
                    <Accordion.Toggle
                        as={Card.Header}
                        eventKey="0"
                        className="p-0 featureStyle"
                    >
                        <div className="featureStyleInner">
                            <h4>Sort</h4>
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
        </div>
    );
};
export default SortSideBar;
