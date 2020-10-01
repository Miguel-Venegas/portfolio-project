import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'reactstrap';
import JobTitle from './JobTitleComponent';

class Home extends Component {
    render(){
        return(
            <Container style={{width:'100', margin:'0'}} fluid="xl">
                <Row className="home-grid">
                    <Col sm='2'>
                    <img 
                        className='main-gradient-color'
                        src="https://kahoot.com/files/2017/05/james_trans.png"
                        alt="avatar"
                        style={{height:"250px", borderRadius:'25%', margin:'20px',backgroundColor:'#d3cfd0'}}
                        />
                    </Col>
                    <Col sm='10'>
                        <div style={{height:'50%', marginTop:50}} className="banner-text">
                            {/* <h1>Full Stack Web Developer</h1> */}
                            <JobTitle/>
                            <hr/>
                            <p> HTML | CSS | Bootstrap | JavaScript | React | React Native | MongoDB | Express | Node JS </p>
                            <div className="social-links">
                                {/*Linkedin*/}
                                <Link to="https://www.google.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"/></Link>
                                {/*GitHub*/}
                                <Link to="https://www.google.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-github-square" aria-hidden="true"/></Link>
                                {/*Freecodecamp*/}
                                <Link to="https://www.google.com/" rel="noopener noreferrer" target="_blank"><i className="fa fa-free-code-camp" aria-hidden="true"/></Link>
                            </div>
                        </div>
                    </Col>  
                </Row>
            </Container>
        );
    }
}

export default Home;