// react imports
import React from 'react';
//import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

// styling
import styles from './styles.css';
//import { Row, Image, Card, Media, Button, Table } from 'react-bootstrap'; //  Clearfix,
import Container from 'react-bootstrap/Container';
import CardDeck from 'react-bootstrap/CardDeck';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

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
        <div id="page-wrap">
          {/*
            --- Technical difficulties alert ---
            To enable / disable, please set constant at the top of the file to either true or false
          */}
          {SHOW_TECHNICAL_DIFFICULTIES_MESSAGE && (
            <div className={styles.alert}>
              <div className="container">
                <p>
                  We’re currently experiencing unusually high traffic to
                  themusiclab.org, which may make it difficult to load our games
                  quickly. Sorry! We hope to have the problem fixed soon.
                </p>
              </div>
            </div>
          )}
          <div>
            <Jumbotron>
              <div>
                We do <strong>citizen science</strong> to learn how the the mind
                works.{' '}
              </div>
              <div>
                <strong>
                  Pick a game to get started!
                </strong>
              </div>
            </Jumbotron>
          </div>
          {/* <a id="quizzes"> </a> */}
          <CardDeck>
            {experiments.map(e => (
              <QuizTile
                id={e.shortName}
                title={e.fullName}
                duration={e.duration}
                post={e.tagline}
                img={require('../../images/' + e.logo)}
                key="quiztile"
              >
                <Row>
                  <Col>
                    Experiment description here...
                  </Col>
                </Row>
              </QuizTile>
            ))}
            <SuggestTile
              center={true}
              to="/Feedback"
              title="Suggest a New Game"
              img={require('../../images/logo512.png')}
              key="suggesttile"
            >
              <Row>
                <Col>
                  What kind of science would you like to see here?
                </Col>
              </Row>
            </SuggestTile>
          </CardDeck>
        </div>
      </Container>
    );
  }
  return props.children;
}

export default QuizPage;
