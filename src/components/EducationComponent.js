import React, {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

class Education extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col sm="4">
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Col>
                     <Col sm="8">
                        <h4 style={{margin:'0'}}>{this.props.name}</h4>
                        <p>{this.props.degree}</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Education;