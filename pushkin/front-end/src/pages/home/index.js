// react imports
import React from 'react';
// //import PropTypes from 'prop-types';
// import { LinkContainer } from 'react-router-bootstrap';

// styling
import { Container, CardDeck, Row, Col, Jumbotron } from 'react-bootstrap';

// components
import QuizTile from '../../components/QuizTile';
import { SuggestTile } from '../../components/SuggestTile';

// experiments
import experiments from '../../experiments.js';

const SHOW_TECHNICAL_DIFFICULTIES_MESSAGE = false;

function QuizPage(props) {
  if (!props.children) {
    return (
      <Container>
        <Jumbotron>
          <div>
            We do <strong>citizen science</strong> to learn how the the mind
            works.{' '}
          </div>
          <div>
            <strong>Pick a game to get started!</strong>
          </div>
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
          {/* <a id="quizzes"> </a> */}

          {experiments.map(e => (
            <QuizTile
              id={e.shortName}
              title={e.fullName}
              duration={e.duration}
              post={e.tagline}
              img={require('../../images/' + e.logo)}
              key="quiztile"
            >
              Experiment description here...
            </QuizTile>
          ))}
          <SuggestTile
            center={true}
            to="/Feedback"
            title="Suggest a New Game"
            img={require('../../images/logo512.png')}
            key="suggesttile"
          >
            What kind of science would you like to see here?
          </SuggestTile>
          {/* <Card>
            <Card.Text>
              asdf
            </Card.Text>
          </Card> */}
        </CardDeck>
      </Container>
    );
  }
  return props.children;
}

export default QuizPage;
