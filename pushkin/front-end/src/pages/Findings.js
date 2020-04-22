import React from 'react';

import {
  Container,
  CardGroup,
  Card,
  Row,
  Col,
  Accordion
} from 'react-bootstrap';

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
  },
  accordionCollapse: {
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: '2rem',
    color: '#FF6200',
    fontWeight: '600',
    fontSize: 24,
    border: '0',
    alignSelf: 'center',
    cursor: 'pointer'
  }
};

export default function FindingsPage() {
  return (
    <Container fluid>
      <CardGroup className="m-5 d-block">
        <Accordion defaultActiveKey="0">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>
              <Col>
                <Card.Img
                  src={require('../assets/images/findingsPage/EnglishesOfTheWorld.jpg')}
                  style={styles.cardImage}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Card.Title as="h1">Englishes of the World</Card.Title>
                  <Card.Text as="h4" style={styles.cardText}>
                    How do your grammar intuitions depend on when and where you
                    learned English? Participants took a short grammar quiz,
                    which we are using to understand how grammar differs in
                    different parts of the English-speaking world (USA, Ireland,
                    Australia, etc.).
                  </Card.Text>
                  <Accordion.Collapse eventKey="1">
                    <Card.Text as="h4" style={styles.cardText}>
                      We are also investigating how grammar is different for
                      people who learn English later in life: Do they make
                      different mistakes if their first language is German as
                      opposed to Japanese?
                    </Card.Text>
                  </Accordion.Collapse>
                  <Accordion.Toggle
                    eventKey="1"
                    style={styles.accordionCollapse}
                  >
                    Read More
                  </Accordion.Toggle>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Accordion>
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Body>
                <Card.Title as="h1">
                  The king frightened the page because he...
                </Card.Title>
                <Card.Text as="h4" style={styles.cardText}>
                  This experiment was one in a line of pronoun experiments, most
                  of which were run on Amazon Mechanical Turk. Early summaries
                  of the findings can be found here and here. This experiment
                  was bundled into a larger paper on pronouns which will be
                  published somewhere in 2013/2014. You can read a description
                  of the paper, and find a link to the paper here.
                </Card.Text>
              </Card.Body>
            </Col>
            <Col>
              <Card.Img
                src={require('../assets/images/findingsPage/FrightenedKing.jpeg')}
                style={styles.cardImage}
              />
            </Col>
          </Row>
        </Card>
        <Card className="m-5 border-0 shadow" style={styles.card}>
          <Row>
            <Col>
              <Card.Img
                src={require('../assets/images/findingsPage/BirthOrder.jpeg')}
                style={styles.cardImage}
              />
            </Col>
            <Col>
              <Card.Body>
                <Card.Title as="h1">Birth Order and Love</Card.Title>
                <Card.Text as="h4" style={styles.cardText}>
                  Pop psychology assures us that your birth order (oldest,
                  middle, youngest, only) has a major effect on your
                  personality. Many books have been written on the subject. It
                  might surprise you, then, that scientists are not only not
                  sure how birth order affects personality, they are divided on
                  the question of whether birth order has any effect on
                  personality.
                </Card.Text>
                <Card.Text as="h4" style={styles.cardText}>
                  In this study, we asked people about their own birth order and
                  the birth order of their best friends and significant others,
                  as well as the birth order of their parents. It turns out that
                  people are slightly more likely to have a close friend or
                  significant other/spouse of the same birth order. We think
                  this suggests that birth order does in fact affect
                  personality, though no doubt the debate will continue. It's
                  important that the method we used -- especially the use of the
                  Internet -- avoided some of the typical confounds of birth
                  order studies.
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </CardGroup>
    </Container>
  );
}
