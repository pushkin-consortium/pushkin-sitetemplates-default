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

    const styles = {
      card: {
        backgroundColor: '#B7E0F2',
        borderRadius: 55,
        padding: '1rem'
      },
      cardImage: {
        width: '18.75rem',
        height: '18rem',
        objectFit: 'cover'
      },
      cardTitle: {
        fontSize: 26,
        fontWeight: 600
      },
      cardButton: {
        backgroundColor: '#FF6200',
        color: 'white',
        border: 0
      },
      socialIcon: {
        height: 30,
        width: 30,
        margin: 3
      }
    };

    return (
      <Card className="border-0" style={styles.card}>
        <Card.Body>
          <Card.Img src={this.props.img} style={styles.cardImage} />
          <Card.Title className="mt-4" style={styles.cardTitle}>
            {this.props.title}
          </Card.Title>
          <Card.Text className="mt-4" style={styles.cardText}>
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
        </Card.Body>
        <Row className="justify-content-center mt-2">
          <LinkContainer
            style={styles.cardButton}
            to={'/quizzes/' + this.props.id}
          >
            <Button className="btn-danger">Play Now</Button>
          </LinkContainer>
        </Row>
        <Row className="justify-content-center mt-3 mb-3">
          <i.SocialIcon
            url={share.facebook}
            onClick={e => {
              e.preventDefault();
              share.open(share.facebook);
            }}
            style={styles.socialIcon}
            target="_blank"
          />
          <i.SocialIcon
            url={share.twitter}
            onClick={e => {
              e.preventDefault();
              share.open(share.twitter);
            }}
            style={styles.socialIcon}
            target="_blank"
          />
          <i.SocialIcon
            url={share.email}
            style={styles.socialIcon}
            target="_blank"
          />
        </Row>
      </Card>
    );
  }
}

export default withRouter(QuizTile);
