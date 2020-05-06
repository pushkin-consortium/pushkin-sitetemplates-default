// react imports
import React from 'react';
// //import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

// styling
import { Container, CardDeck, Jumbotron, Row } from 'react-bootstrap';

// components
import Vocab from '../components/Quizzes/Vocab';
import Mind from '../components/Quizzes/Mind';
import WhichEnglish from '../components/Quizzes/WhichEnglish';

// experiments
import experiments from '../experiments.js';

function QuizPage(props) {
  if (!props.children) {
    return (
      <Container className="mt-4">
        <Jumbotron style={{ backgroundColor: '#eeeeee' }}>
          <div>
            We do <strong>citizen science</strong> to learn how the mind works.{' '}
          </div>
          <div>
            <strong>Pick a game to get started!</strong>
          </div>
          <div className="mt-3">
            Feel free to send us feedback{' '}
            <LinkContainer to="/feedback">
              <a>
                <strong>HERE</strong>
              </a>
            </LinkContainer>
          </div>
        </Jumbotron>
        <CardDeck>
          <Row className="justify-content-between">
            {experiments.map(e => {
              if (e.shortName === 'vocab') {
                return (
                  <Vocab
                    id={e.shortName}
                    title={e.fullName}
                    duration={e.duration}
                    post={e.tagline}
                    img={require('../assets/images/quiz/Vocab.png')}
                    key={e.shortName}
                  />
                );
              } else if (e.shortName === 'mind') {
                return (
                  <Mind
                    id={e.shortName}
                    title={e.fullName}
                    duration={e.duration}
                    post={e.tagline}
                    img={require('../assets/images/quiz/Mind.png')}
                    key={e.shortName}
                  />
                );
              } else if (e.shortName === 'whichenglish') {
                return (
                  <WhichEnglish
                    id={e.shortName}
                    title={e.fullName}
                    duration={e.duration}
                    post={e.tagline}
                    img={require('../assets/images/quiz/WhichEnglish.png')}
                    key={e.shortName}
                  />
                );
              }
            })}
          </Row>
        </CardDeck>
      </Container>
    );
  }
  return props.children;
}

export default QuizPage;
