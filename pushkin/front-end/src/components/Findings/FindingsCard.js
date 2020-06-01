import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const styles = {
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: '2rem',
    color: '#FF6200',
    fontWeight: '600',
    fontSize: 24,
    border: '0',
    alignSelf: 'center',
    cursor: 'pointer'
  },
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 55,
    padding: '3vw',
    display: 'flex',
    flexDirection: 'row'
  },
  cardImage: {
    height: '100%',
    objectFit: 'cover',
    borderRadius: 55
  },
  cardTitle: {
    fontSize: '2.75vmax'
  },
  cardText: {
    fontSize: '1.7vmax'
  }
};

const FindingsCard = props => {
  return (
    <Card className="m-5 border-0 shadow" style={styles.card}>
      <Row>
        <Col md={5}>
          <Card.Img src={props.image} style={styles.cardImage} />
        </Col>
        <Col md={7}>
          <Card.Body>
            <Card.Title style={styles.cardTitle}>{props.title}</Card.Title>
            <Card.Text style={styles.cardText}>{props.description}</Card.Text>
          </Card.Body>
          {props.link && (
            <Button style={styles.button} href={props.url}>
              Read More
            </Button>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default FindingsCard;
