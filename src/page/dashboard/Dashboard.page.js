import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { TicketTable } from '../../components/ticket-table/TicketTable.comp';
import tickets from '../../assets/data/dummy-tickets.json'

export const Dashboard = () => {
    return (
        <Container>
            {/* Add New Ticket Button */}
            <Row>
                <Col className="text-center mt-5 mb-2">
                    <Button 
                        variant="info" 
                        style={{ fontSize: '2rem', padding: '10px 30px' }}
                    >
                        Add New Ticket
                    </Button>
                </Col>
            </Row>

            {/* Ticket Statistics */}
            <Row>
                <Col className="text-center mt-3 mb-3">
                    <div>Total Tickets: 50</div>
                    <div>Pending Tickets: 5</div>
                </Col>
            </Row>

            {/* Recently Added Tickets */}
            <Row>
                <Col className="mt-3">
                    <h5>Recently Added Tickets</h5>
                </Col>
            </Row>
            <Row>
                <Col className="recent-ticket">
                    <TicketTable ticket={tickets} />
                </Col>
            </Row>

            <hr />
        </Container>
    );
};
