// import React
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
//import PropTypes from 'prop-types';

//Styling
import { Card, Button } from 'react-bootstrap';

//unneeded imports?
//import * as f from 'react-foundation';
//import Axios from 'axios';
//import * as i from 'react-social-icons';
//import { CONFIG } from '../../../config';

export function SuggestTile(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Img variant="top" src={props.img} />
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.children}
          <LinkContainer to="/feedback">
            <Button className="font-weight-bold" variant="primary" size="lg">
              Submit Suggestion
            </Button>
          </LinkContainer>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

// export default SuggestTile;
