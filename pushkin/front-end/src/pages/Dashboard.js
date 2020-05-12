import React from 'react';

import { Container, Jumbotron, Image, Button, Row } from 'react-bootstrap';

import { useAuth0 } from '../utils/react-auth0-spa';

// import Profile from '../components/User/Profile';

const styles = {
  jumbotron: {
    backgroundColor: '#3F729B'
  },
  avatar: {
    width: '10rem',
    height: '10rem'
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
        <h2 className="m-4">Hello, {user.name}!</h2>
        <Row>
          <Button>Edit Profile</Button>
          <Button>My Recent Experiments</Button>
        </Row>
      </Jumbotron>
    </Container>
  );
};

export default Dashboard;
