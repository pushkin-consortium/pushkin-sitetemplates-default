import React from 'react';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const EditProfile = props => {
  return (
    <Container>
      <Row>
        <Form>
          <Row>
            <Form.Group>
              <Col>
                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Control placeholder="Last name" />
              </Col>
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control placeholder="Enter your nickname here" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              defaultValue={props.userEmail}
            />
          </Form.Group>
          <Form.Group>
            <Button type="submit">Submit</Button>
          </Form.Group>
        </Form>
      </Row>
    </Container>
  );
};

export default EditProfile;
