// react imports
import React from 'react';
//import PropTypes from 'prop-types';
//import { LinkContainer } from 'react-router-bootstrap';

// styling
//import { Row, Image, Card, Media, Button, Table } from 'react-bootstrap'; //  Clearfix,
import {
  Container,
  Row,
  Image,
  Card,
  CardColumns,
  OverlayTrigger
} from 'react-bootstrap'; //  Clearfix,

export default function AboutPage(props) {
  if (!props.children) {
    return (
      <Container className="p-0" fluid>
        <Card className="bg-dark text-white">
          <Card.Img src={require('../../assets/images/AboutUs.jpeg')} />
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
          <CardColumns className="mt-5">
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={require('../../assets/images/profile/Josh.jpg')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  Joshua Hartshorne
                </Card.Title>
                <Card.Text>
                  Joshua Hartshorne is an assistant professor of psychology at
                  Boston College, and the founder of GamesWithWords.org. He is
                  hroadly interested in human behavior, with a particular
                  interest in language and inference. By “inference,” he means
                  the application of learned information to make predictions
                  about a novel situation.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body style={{ padding: '2rem' }}>
                <Card.Img
                  src={require('../../assets/images/profile/JDL.jpg')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  Joshua R. de Leeuw
                </Card.Title>
                <Card.Text>
                  Josh's research is focused on the development and application
                  of Internet-based tools for the study of human cognition. He
                  created the widely-used jsPsych experiment software for
                  conducting behavioral experiments online. He uses these tools
                  to study how people learn and represent new information.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body>
                <Card.Img
                  variant="top"
                  src={require('../../assets/images/profile/Template.png')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  Amy Geojo
                </Card.Title>
                <Card.Text>
                  Amy Geojo is a graduate student in the Psychology Department
                  at Harvard University. She collaborated with Josh on the Gorp
                  Test.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body style={{ padding: '2rem' }}>
                <Card.Img
                  src={require('../../assets/images/profile/Template.png')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  Claire Bonial
                </Card.Title>
                <Card.Text>
                  Claire Bonial is a graduate student at the University of
                  Colorado-Boulder and is a collaborator on the VerbCorner
                  Project.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body style={{ padding: '2rem' }}>
                <Card.Img
                  src={require('../../assets/images/profile/Template.png')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  Laura Germine
                </Card.Title>
                <Card.Text>
                  Laura Germine is a postdoctoral researcher in the Psychiatric
                  and Neurodevelopmental Genetics Unit at MGH, and the developer
                  of TestMyBrain.org. She collaborated on the Memory Test.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card
              className="text-white border-0 shadow"
              style={{ backgroundColor: '#3F729B' }}
            >
              <Card.Body style={{ padding: '2rem' }}>
                <Card.Img
                  src={require('../../assets/images/profile/Template.png')}
                  style={{ width: '100%', height: '15vw', objectFit: 'cover' }}
                />
                <Card.Title
                  className="mt-4 mb-3"
                  style={{ fontSize: 26, fontWeight: 600 }}
                >
                  FirstName LastName
                </Card.Title>
                <Card.Text>Description Here</Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Container>
      </Container>
    );
  }
  return props.children;
}
