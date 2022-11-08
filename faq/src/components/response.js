import React from "react";
import { ListGroup, Badge } from 'react-bootstrap';

class RESPONSES extends React.Component {
    render() {
        return (
            <div>
                <h1 className='mb-2'>Responses <Badge bg="secondary">{this.props.data.length}</Badge></h1>
                <ListGroup as="ol" numbered>
                    {this.props.data.map(data => (
                        <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={data}>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{data.email}</div>
                                <p>{data.suggestion}</p>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
        );
    }
}

export default RESPONSES;