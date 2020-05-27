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
    padding: '3rem'
  },
  cardImage: {
    height: '100%',
    objectFit: 'cover',
    borderRadius: 55
  }
};

const FindingsCard = props => {
  return (
    <Card className="m-5 border-0 shadow" style={styles.card}>
      <Row>
        <Col>
          <Card.Img src={props.image} style={styles.cardImage} />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title as="h1">{props.title}</Card.Title>
            <Card.Text as="h4" style={styles.cardText}>
              {props.description}
            </Card.Text>
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
