import React from 'react';

import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap';

export default function FindingsPage() {
  return (
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Card className="m-5 border-0">
          <Row>
            <Col>
              <Card.Img
                src={require('../assets/images/aboutPage/AboutUs.jpeg')}
                style={{ width: '45rem', height: 'auto' }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title as="h1">Englishes of the World</Card.Title>
                <Card.Text as="h4">
                  How do your grammar intuitions depend on when and where you
                  learned English? Participants took a short grammar quiz, which
                  we are using to understand how grammar differs in different
                  parts of the English-speaking world (USA, Ireland, Australia,
                  etc.). We are also investigating how grammar is different for
                  people who learn English later in life: Do they make different
                  mistakes if their first language is German as opposed to
                  Japanese? How do your grammar intuitions depend on when and
                  where you learned English? Participants took a short grammar
                  quiz, which we are using to understand how grammar differs in
                  different parts of the English-speaking world (USA, Ireland,
                  Australia, etc.). We are also investigating how grammar is
                  different for people who learn English later in life: Do they
                  make different mistakes if their first language is German as
                  opposed to Japanese?
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
        <Card className="m-5 border-0">
          <Row>
            <Col>
              <Card.Body>
                <Card.Title as="h1">Title</Card.Title>
                <Card.Text as="h4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={require('../assets/images/aboutPage/AboutUs.jpeg')}
                style={{ width: '45rem', height: 'auto' }}
              />
            </Col>
          </Row>
        </Card>
        <Card className="m-5 border-0">
          <Row>
            <Col>
              <Card.Img
                src={require('../assets/images/aboutPage/AboutUs.jpeg')}
                style={{ width: '45rem', height: 'auto' }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title as="h1">Title</Card.Title>
                <Card.Text as="h4">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
}
