import React from 'react';

import EditProfile from './EditProfile';
import ExperimentHistory from './ExperimentHistory';

import { Container, Jumbotron, Image, Button, Row } from 'react-bootstrap';

import { useAuth0 } from '../../utils/react-auth0-spa';

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
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FF6200',
    border: '0',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 22,
    cursor: 'pointer'
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
          <Button style={styles.button}>Edit Profile</Button>
          <Button style={styles.button}>My Recent Experiments</Button>
        </Row>
      </Jumbotron>

      <EditProfile
        userEmail={user.email}
        userFirstName={user.given_name}
        userLastName={user.family_name}
      />

      <ExperimentHistory />
    </Container>
  );
};

export default Dashboard;
