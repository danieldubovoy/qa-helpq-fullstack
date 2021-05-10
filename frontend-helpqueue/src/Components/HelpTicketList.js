import React, {useEffect, useState} from "react";
import {Row, Container} from "react-bootstrap";
import axios from "axios";


import TicketList from "./TicketList";
import CreateHelpTicket from "./CreateHelpTicket";
import SideBar from "./Features/MainFeature";


const HelpTicketList = () => {
    const [error, setError] = useState(`false`);
    const [isLoaded, setLoaded] = useState(false);
    const [ticketData, setTicketData] = useState([]);
    const [isUpdate, setIsUpdate] = useState(true);
    const [dataSort, setDataSort] = useState(`http://localhost:8081/ticket/readTickets`);

    const dataSortSetup = (field) => {
        setDataSort("http://localhost:8081/ticket/readTickets" + field);
    };

    useEffect(() => {
        setIsUpdate(false);
        axios.get(dataSort, {
                headers: {
                    'Access-Control-Allow-Origin': '*'
                }
            }
        )
            .then(
                (data) => {
                    setLoaded(true);
                    setError(false);
                    setTicketData(data.data);
                    console.log(ticketData);
                },
                (error) => {
                    setLoaded(true);
                    setError(error);
                }
            );
    }, [dataSort]);

    return (
        <Container class="container">

            <div class="toppane"></div>
            <div class="rightpane">
                <CreateHelpTicket/>
                <SideBar dataSortSetup={dataSortSetup}/>
            </div>


            <Row dataSortSetup={dataSortSetup}/>

            <div class="leftpane">
                <TicketList data={ticketData} error={error} isLoaded={isLoaded}/>
            </div>
        </Container>
    );
};
export default HelpTicketList;
