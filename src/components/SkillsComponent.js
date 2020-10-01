import React, {Component} from 'react';
import {Container, Row, Col, Progress} from 'reactstrap';

class Skills extends Component {
    render(){
        return(
            <Container>
                <Row>
                    <Col sm="12">
                        <div style={{marginTop:'10px', textAlign:'center'}}>
                        <h5 style={{display:'block'}}>{this.props.percentage}</h5>
                        <div style={{display:'flex'}}>{this.props.name}<Progress style={{margin:'auto', width:'75%'}} progress={this.props.progress} value={this.props.value}/></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Skills;