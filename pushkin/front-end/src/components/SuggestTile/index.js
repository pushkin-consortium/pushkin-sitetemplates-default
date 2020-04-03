// import React
import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
//import PropTypes from 'prop-types';

//Styling
import styles from './styles.css';
//import { Row, Col, Image, Card, Media, Button, Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//unneeded imports?
//import * as f from 'react-foundation';
//import Axios from 'axios';
//import * as i from 'react-social-icons';
//import { CONFIG } from '../../../config';

export function SuggestTile(props) {
  return (
      <Card bg="light">
        <Card.Header as="h4">
          {props.title}
        </Card.Header>
        <Card.Body className={styles.quizbox}>
          <Card.Img
            src={props.img}
            className="img-thumbnail"
            style={{ backgroundColor: 'transparent', border: 0 }}
        />
        <div className={styles.quizText}>
          {props.children}
          <div className={styles.buttonWrap}>
            <LinkContainer to="/feedback">
              <Button variant="primary">Submit Suggestion</Button>
            </LinkContainer>
          </div>
        </div>
        </Card.Body>
      </Card>
  );
}

// export default SuggestTile;