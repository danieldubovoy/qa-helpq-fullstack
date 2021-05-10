import React from "react";
import { Accordion, Card } from "react-bootstrap";


import Urgency from "./Urgency";
import Department from "./Department";

const FilterSideBarContainer = ({ dataSortSetup }) => {
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
                            <h4 className="text">Filter</h4>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="p-0">
                            <Urgency dataSortSetup={dataSortSetup} />
                            <Department dataSortSetup={dataSortSetup} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};
export default FilterSideBarContainer;