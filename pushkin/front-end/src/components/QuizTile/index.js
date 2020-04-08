//React
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

//Styling
import { Card, Button, Row, Col } from 'react-bootstrap';
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
      <Card>
        <Card.Body>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>
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

            {this.state.count && <p> {this.state.count} players so far! </p>}
            <LinkContainer to={'/quizzes/' + this.props.id}>
              <Button className="font-weight-bold" variant="primary" size="lg">
                Play
              </Button>
            </LinkContainer>
          </Card.Text>
          <div>
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
          </div>

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
