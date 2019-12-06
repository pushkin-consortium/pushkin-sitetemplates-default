import React from 'react';
import { withRouter } from 'react-router-dom';
import experiments from '../../experiments.js';

const expObject = {};
experiments.forEach(exp => {
  expObject[exp.shortName] = exp.module;
});

class TakeQuiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if (isAuthenticated()) {
      this.props.dispatch(getUserInfo(quiz_name));
    } else {
      // if a user for this specific quiz already has a subject id, use that instead.
      if (this.props.userInfo.subjectIds[quiz_name]) {
        console.log('already have a userid for this quiz');
      } else {
        this.props.dispatch(generateAnonymousUser(quiz_name));
      }
    }
  }

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

const mapStateToProps = state => {
  return {
    todos: null
  };
};

export default withRouter(connect(mapStateToProps)(TakeQuiz));
