import React, { useState, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';
import { PROJECT_PAGES } from '../shared/projects';

class ModalInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            project_pages: PROJECT_PAGES,
        };
    }

    render(){   

        return(
            <>


                {this.state.project_pages.map(pg => (
                    <ModalContent
                        name={pg.name}
                        id={pg.id}
                        imageUrl={pg.imageUrl}
                        page={pg.page}
                        description={pg.description}
                        project={pg.project}
                        ux_description={pg.ux_description}
                        features={pg.features}
                    />
                ))}
            </>
        );
    }
}

class ModalContent extends Component {
    constructor(props){
        super(props);
    }


    render(){
        const {name, id, page, imageUrl, description, project, ux_description, features} = this.props;
    
        return(
            <>
            <ModalHeader>
                <h1 style={{color:'black', fontSize:40}}>{project}</h1>
            </ModalHeader>
            <Row>
                <Col>
                <ModalBody>
                    <h3>{name}</h3>
                    <h6>{page} Design</h6>
                    {/* <p>{ux_description}</p> */}
                    <p>{description}</p>
                    {/* <ul><li>{features}</li></ul> */}
                    <div><img style={{width:'100%', height:'auto'}} src={imageUrl}/></div>
                </ModalBody>
                </Col>
            </Row>
            {/* <ModalFooter>{}</ModalFooter> */}
            </>
        );
    }
}

const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  

  return (
    <div>
      <Button className='modal-button' style={{backgroundColor:'#02344b'}} onClick={toggle}>{buttonLabel}See my work</Button>
      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} className={className}>
        <ModalInfo/>
        <Button color="primary" style={{height:'auto', backgroundColor:'#02344b', width:'50%', margin:'auto', marginBottom:20,marginTop:20, padding:'5px'}} onClick={toggle}>Go Back</Button>{' '}
      </Modal>
    </div>
  );
}

export default ModalExample;