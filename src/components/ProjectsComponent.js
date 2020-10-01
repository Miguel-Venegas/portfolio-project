import React from 'react';
import { Row, Col } from 'reactstrap';
import DisplayInfo from './DisplayComponent';
import Personal from './PersonalComponent';

const Projects = () => {
  return (
    <div style={{ backgroundColor: '#dfdfdf' }}>
          <Row>
            <Col style={{ display: 'flex', margin: 'auto' }} sm="10">
              <DisplayInfo/>
            </Col>
          </Row>
    </div>
  );
}
export default Projects;