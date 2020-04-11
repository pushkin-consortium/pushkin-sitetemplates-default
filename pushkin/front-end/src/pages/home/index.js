// react imports
import React from 'react';
// //import PropTypes from 'prop-types';
// import { LinkContainer } from 'react-router-bootstrap';

// styling
import { Container, CardDeck, Card, Jumbotron, Row } from 'react-bootstrap';

// components
import Vocab from '../../components/Quizzes/Vocab';
import Mind from '../../components/Quizzes/Mind';
import WhichEnglish from '../../components/Quizzes/WhichEnglish';

// experiments
import experiments from '../../experiments.js';

const SHOW_TECHNICAL_DIFFICULTIES_MESSAGE = false;

function QuizPage(props) {
  if (!props.children) {
    return (
      <Container className="mt-4">
        <Jumbotron
          className="text-white"
          style={{ backgroundColor: '#607d8b' }}
        >
          <div>
            We do <strong>citizen science</strong> to learn how the the mind
            works.{' '}
          </div>
          <div>
            <strong>Pick a game to get started!</strong>
          </div>
          <div className="mt-3">Feel free to send us feedback HERE.</div>
          {/*
            --- Technical difficulties alert ---
            To enable / disable, please set constant at the top of the file to either true or false
          */}
          {SHOW_TECHNICAL_DIFFICULTIES_MESSAGE && (
            <p>
              We’re currently experiencing unusually high traffic to
              themusiclab.org, which may make it difficult to load our games
              quickly. Sorry! We hope to have the problem fixed soon.
            </p>
          )}
        </Jumbotron>
        <CardDeck>
          <Row className="justify-content-between">
            {experiments.map(e => (
              <Vocab
                id={e.shortName}
                title={e.fullName}
                duration={e.duration}
                post={e.tagline}
                img={require('../../assets/images/Vocab.png')}
                key="quiztile"
              />
            ))}
            <Mind img={require('../../assets/images/Mind.png')} />
            <WhichEnglish
              img={require('../../assets/images/WhichEnglish.png')}
            />
          </Row>
        </CardDeck>
      </Container>
    );
  }
  return props.children;
}

export default QuizPage;
