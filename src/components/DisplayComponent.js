import React, { Component, useState } from 'react';
import { Card, CardBody, CardLink, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import imageUrl from '../images/Home.png';
import '../css/DisplayCard.css';
import { PROJECTS, PROJECT_PAGES } from '../shared/projects';
import {PERSONAL_INFO} from '../shared/resumeInfo';
import Personal from './PersonalComponent';
import ModalExample from './ModalComponent';

class DisplayInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects : PROJECTS,
            personalInfo: PERSONAL_INFO,


        };
    }

    render() {
        
        return (
            <>
            {this.state.projects.map(p => (
                    <DisplayCard
                        name={p.name}
                        id={p.id}
                        description={p.description}
                        imageUrl={p.imageUrl}
                        usedToBuild={p.usedToBuild}
                    />
                ))}

            </>
        );
    }
}

class DisplayCard extends Component {
    render() {
        const {name, description, usedToBuild} = this.props;
        let imgSrc = `${imageUrl}`;

        return (
            <div className="DisplayCard">
                <Card className="card-gradient" style={{ padding: '10px', margin: '10px', textAlign: 'center' }}>
                    <CardBody>
                        <CardTitle style={{ color: 'black'}}><h3>{name}</h3></CardTitle>
                        <CardSubtitle><h5>Used {usedToBuild}</h5></CardSubtitle>
                    <div> 
                    <img src={imgSrc}/>
                    
                    </div>
                        <CardText>{description}</CardText>
                        <ModalExample/>
                        <CardLink href="#">Another Link</CardLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}


export default DisplayInfo;