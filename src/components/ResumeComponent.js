import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Education from './EducationComponent';
import Experience from './ExperienceComponent';
import Skills from './SkillsComponent';
import {JOBS, EDUCATION, SKILLS, PERSONAL_INFO} from '../shared/resumeInfo';
import Personal from './PersonalComponent'


class Resume extends Component {
    constructor(props){
        super(props);
        this.state = {
         jobs : JOBS, 
         education: EDUCATION,
         skills: SKILLS,
         personalInfo: PERSONAL_INFO,
        }
    }
    render() {
       
        return (
            <Container fluid="lg">
                <Row>
                    <Col className="resume-left-col" sm="4" style={{ backgroundColor: 'rgb(223, 223, 223)'}}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                className='main-gradient-color'
                                src="https://kahoot.com/files/2017/05/james_trans.png"
                                alt="avatar"
                                style={{ height: "200px", borderRadius: '15%', marginTop: '25px' }}
                            />
                        </div>
                        {this.state.personalInfo.map((p) => (
                                <Personal 
                                    id={p.id} 
                                    name={p.name}   
                                    title={p.title} 
                                    summary={p.summary} 
                                    address={p.address}
                                    phone={p.phone}
                                    email={p.email}
                                    website={p.website} 
                                />
                            ))}
                            
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Col>
                    <Col className="resume-right-col" sm="8">
                        <h2>Education</h2>
                            {this.state.education.map((e) => (
                                <Education 
                                    id={e.id} 
                                    name={e.name}   
                                    startYear={e.start} 
                                    endYear={e.end} 
                                    degree={e.degree} 
                                />
                            ))}
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        {this.state.skills.map((s) => (
                                <Skills 
                                    className="text-center"
                                    id={s.id} 
                                    name={s.name} 
                                    value={s.value} 
                                    percentage={s.percentage} 
                                />
                            ))}
                         <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                            {this.state.jobs.map((j) => (
                                <Experience 
                                    id={j.id} 
                                    name={j.name} 
                                    startYear={j.start} 
                                    endYear={j.end} 
                                    jobDescription={j.jobDescription} 
                                />
                            ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Resume;