import React from 'react';

import people from '../components/TeamMember/People';
import TeamMember from '../components/TeamMember/TeamMember';

// styling
import { Container, Row, Card, CardDeck } from 'react-bootstrap';

export default function AboutPage(props) {
  if (!props.children) {
    return (
      <Container className="p-0 text-center" fluid>
        <Card className="bg-dark text-white" style={{ borderRadius: 0 }}>
          <Card.Img src={require('../assets/images/aboutPage/AboutUs.jpeg')} />
          <Card.ImgOverlay>
            <Card.Title as="h1" style={{ marginTop: '12rem' }}>
              Who We Are
            </Card.Title>
            <Card.Text as="h4" className="m-5">
              We do citizen science to learn how the the mind works.
            </Card.Text>
            <Card.Text as="h4">We are awesome scientists!</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Container>
          <Row className="h1 mt-5 mb-3 justify-content-center">
            Meet Our Team Members!
          </Row>
          <hr />
          <Row>
            {people.map(p => {
              return (
                <TeamMember
                  name={p.name}
                  description={p.description}
                  image={require('../assets/images/teamMember/' + p.image)}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    );
  }
  return props.children;
}
