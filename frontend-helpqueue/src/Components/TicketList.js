import React from "react";
import { Accordion } from "react-bootstrap";

import Ticket from "./Ticket";

const TicketList = ({ data }) => {
     return (
            <>
                <Accordion defaultActiveKey="0">
                    {data.map((ticket) => (
                        <Ticket
                            id={ticket.id}
                            title={ticket.title}
                            author={ticket.author}
                            description={ticket.description}
                            department = {ticket.department}
                            timeCreated={ticket.timeCreated}
                            solution={ticket.solution}
                            urgency={ticket.urgency}
                            status={ticket.status}
                            topic={ticket.topic}
                        />
                    ))}
                </Accordion>
            </>
        );
};
export default TicketList;