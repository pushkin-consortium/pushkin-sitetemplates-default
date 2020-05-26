import React from 'react';

import { Card } from 'react-bootstrap';

const styles = {
  card: {
    backgroundColor: '#B7E0F2',
    borderRadius: 55
  },
  cardTitle: {
    fontSize: 26,
    fontWeight: 600
  },
  cardBody: {
    padding: '2.5rem'
  },
  cardImage: {
    width: '100%',
    height: '15vw',
    objectFit: 'cover',
    borderRadius: 55
  }
};

const TeamMember = props => {
  return (
    <Card>
      <Card className="border-0 shadow" style={styles.card}>
        <Card.Body style={styles.cardBody}>
          <Card.Img variant="top" src={props.image} style={styles.cardImage} />
          <Card.Title className="mt-4 mb-3" style={styles.cardTitle}>
            {props.name}
          </Card.Title>
          <Card.Text style={styles.cardText}>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Card>
  );
};

export default TeamMember;
