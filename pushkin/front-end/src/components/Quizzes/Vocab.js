//React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

//Styling
import { Card, Button, Row } from 'react-bootstrap';
//import PropTypes from 'prop-types';

//Other
import { CONFIG } from '../../config';
import * as i from 'react-social-icons';

//unneded imports
//import * as f from 'react-foundation';

//function numberWithCommas(x) {
//  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//}

class QuizTile extends Component {
  state = {
    count: null
  };

  //  componentDidMount() {
  // Retrieve participant count
  //    let experimentApi = Axios.create({
  //      baseURL: CONFIG.apiEndpoint + this.props.id + '/'
  //    });
  //    experimentApi
  //      .get('/count?started=true')
  //      .then(response => {
  //        let count = response.data.count;
  //        count = numberWithCommas(count);
  //        this.setState({ count });
  //      })
  //      .catch(error => console.error('Error loading participant count:', error));
  //  }

  render() {
    // Generate sharing links
    let url = CONFIG.frontEndURL + `${this.props.id}`;
    let subject = CONFIG.citizenScienceWebsite + ` - ${this.props.title}`;
    let text = `${this.props.post}`;
    let hashtags = CONFIG.hashtags;

    // Encode all special characters
    url = encodeURIComponent(url);
    subject = encodeURIComponent(subject);
    text = encodeURIComponent(text);
    hashtags = encodeURIComponent(hashtags);

    let share = {
      facebook: `https://www.facebook.com/sharer.php?u=` + url,
      twitter: `https://twitter.com/intent/tweet?url=${url}&hashtags=${hashtags}&text=${text}`,
      email: `mailto:?subject=${subject}&body=${text}`,

      open: function(url) {
        var left = (window.screen.width - 570) / 2;
        var top = (window.screen.height - 570) / 2;
        var params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;
        window.open(url, 'NewWindow', params);
      }
    };

    return (
      <Card className="text-white" style={{ backgroundColor: '#90a4ae' }}>
        <Card.Header as="h5" style={{ backgroundColor: '#607d8b' }}>
          {this.props.title}
        </Card.Header>
        <Card.Body style={{ padding: '2rem' }}>
          <Card.Img
            src={this.props.img}
            style={{ width: '18rem', height: '18rem', objectFit: 'cover' }}
          />
          <Card.Text className="mt-3">
            <Row>How many words do you know? See your results at the end.</Row>

            {this.props.duration && (
              <p>
                {' '}
                <strong>
                  {' '}
                  Average time: {this.props.duration} minutes.{' '}
                </strong>{' '}
              </p>
            )}

            {this.state.count && <p> {this.state.count} players so far! </p>}
          </Card.Text>
          {/* BETA ribbon */}
          {/* {this.props.beta && (
              <LinkContainer to={'/quizzes/' + this.props.id}>
                <div className={styles.ribbon + ' ' + styles.ribbonBottomLeft}>
                  {' '}
                  <span>BETA</span>{' '}
                </div>
              </LinkContainer>
            )} */}
        </Card.Body>
        <Row className="justify-content-center mt-2">
          <LinkContainer to={'/quizzes/' + this.props.id}>
            <Button className="btn-danger">Play</Button>
          </LinkContainer>
        </Row>
        <Row className="justify-content-center mt-3 mb-3">
          <i.SocialIcon
            url={share.facebook}
            onClick={e => {
              e.preventDefault();
              share.open(share.facebook);
            }}
            style={{ height: 30, width: 30 }}
            target="_blank"
          />
          <i.SocialIcon
            url={share.twitter}
            onClick={e => {
              e.preventDefault();
              share.open(share.twitter);
            }}
            style={{ height: 30, width: 30 }}
            target="_blank"
          />
          <i.SocialIcon
            url={share.email}
            style={{ height: 30, width: 30 }}
            target="_blank"
          />
        </Row>
      </Card>
    );
  }
}

export default withRouter(QuizTile);
