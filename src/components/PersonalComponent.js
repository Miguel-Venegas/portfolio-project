import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Personal extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm="12">
                        <h2 style={{ paddingTop: '2em' }}>{this.props.name}</h2>
                        <h4 style={{ color: 'black' }}>{this.props.title}</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p >{this.props.summary}</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>{this.props.address}</p>
                        <h5>Phone</h5>
                        <p>{this.props.phone}</p>
                        <h5>Email</h5>
                        <p>{this.props.email}</p>
                        <h5>Web</h5>
                        <p>{this.props.website}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Personal;


