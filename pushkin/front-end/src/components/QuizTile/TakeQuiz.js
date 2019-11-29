import React from 'react';
import { withRouter } from 'react-router-dom';
import experiments from '../../experiments.js';

const expObject = {};
experiments.forEach(exp => {
  expObject[exp.shortName] = exp.module;
});


class TakeQuiz extends React.Component {
  render() {
    const { match } = this.props;
    const QuizComponent = expObject[match.params.quizName];
    return (
      <div>
        <QuizComponent {...this.props} />
      </div>
    );
  }
}

export default withRouter(TakeQuiz);
