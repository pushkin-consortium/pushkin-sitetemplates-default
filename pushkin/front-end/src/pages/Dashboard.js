import React from 'react';

import {
  Container,
  Jumbotron,
  Image,
  Button,
  Row,
  Col,
  CardGroup,
  Card
} from 'react-bootstrap';

import { useAuth0 } from '../utils/react-auth0-spa';

const styles = {
  jumbotron: {
    backgroundColor: '#3F729B'
  },
  avatar: {
    width: '10rem',
    height: '10rem'
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

const Dashboard = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Container fluid className="m-0 p-0">
      <Jumbotron fluid style={styles.jumbotron}>
        <Image src={user.picture} style={styles.avatar} />
        <h2 className="m-4 text-white">Hello, {user.name}!</h2>
        <Row className="justify-content-center m-1">
          <Button>Edit Profile</Button>
          <Button>My Recent Experiments</Button>
        </Row>
      </Jumbotron>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img
                src={require('../assets/images/quiz/Mind.png')}
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
    </Container>
  );
};

export default Dashboard;
