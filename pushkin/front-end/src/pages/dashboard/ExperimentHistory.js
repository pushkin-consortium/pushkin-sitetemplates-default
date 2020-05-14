import React from 'react';

import { CardGroup, Card, Row, Col } from 'react-bootstrap';

const styles = {
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

const ExperimentHistory = () => {
  return (
    <CardGroup className="m-5 d-block">
      <Card className="m-5 border-0 shadow" style={styles.card}>
        <Row>
          <Col>
            <Card.Img
              src={require('../../assets/images/quiz/Mind.png')}
              style={styles.cardImage}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title as="h1">Experiment Title</Card.Title>
              <Card.Text as="h4" style={styles.cardText}>
                description and results
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </CardGroup>
  );
};

export default ExperimentHistory;
