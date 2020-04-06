//React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

//Styling
import styles from './styles.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <Card bg="light">
          <Card.Header as="h4">
              {this.props.title}
          </Card.Header>
          <Card.Body>
            <Card.Img
              src={this.props.img}
              className="img-thumbnail"
              style={{ backgroundColor: 'transparent', border: 0 }}
            />
            <div>
              {this.props.children}
              {this.props.duration && (
                <p>
                  {' '}
                  <strong>
                    {' '}
                    Average time: {this.props.duration} minutes.{' '}
                  </strong>{' '}
                </p>
              )}

              {this.state.count && (
                <p> {this.state.count} players so far! </p>
              )}
              <LinkContainer to={'/quizzes/' + this.props.id}>
                <Button variant="primary" size="lg">Play</Button>
              </LinkContainer>
            </div>
            <Row>
              <Col>
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
              </Col>
            </Row>

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
        </Card>
    );
  }
}

export default withRouter(QuizTile);
