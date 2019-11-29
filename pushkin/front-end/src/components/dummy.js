import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types' 

//import history from '../utils/history';

class Profile extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { loading: true, experimentComplete: false };
    this.props.history.listen(this.afunc)
  }

  afunc(props) {
    return (null);
  }

  componentDidMount() {
    console.log("component mounted");
  }


  render() {
    return (
      <div>
        Hi Mom!
      </div>
    );
  }
}

export default withRouter(Profile);
