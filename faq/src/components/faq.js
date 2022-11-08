import React from "react";
import { Accordion } from 'react-bootstrap';

class Faq extends React.Component {
    render() {
        return (
            <div>
                <div className='faq-section'>
                    <div className='container mt-4'>
                        <h1 className='mb-2'>FAQ's</h1>
                        {this.props.data.map(data => (
                            <Accordion key={data.id}>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{data.question}</Accordion.Header>
                                    <Accordion.Body>{data.answer}</Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Faq;