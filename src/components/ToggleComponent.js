import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Toggle = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
  
      <Button onClick={toggle} style={{ marginBottom: '1rem', border:'5px solid #02344b', color:'white' }}>Lean More</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
          Anim pariatur cliche reprehenderit,
           enim eiusmod high life accusamus terry richardson ad squid. Nihil
           anim keffiyeh helvetica, craft beer labore wes anderson cred
           nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Toggle;