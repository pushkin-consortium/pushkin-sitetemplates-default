import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

//Styling
import { Card, Button, Row } from 'react-bootstrap';

//Other
import { CONFIG } from '../../config';
import * as i from 'react-social-icons';

class WhichEnglish extends Component {
  state = {
    count: null
  };

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
      <Card
        className="text-white border-0"
        style={{ backgroundColor: '#4B515D' }}
      >
        <Card.Header className="h5" style={{ backgroundColor: '#3E4551' }}>
          Which English?
        </Card.Header>
        <Card.Body style={{ padding: '2rem' }}>
          <Card.Img
            src={this.props.img}
            style={{ width: '18.75rem', height: '18rem', objectFit: 'cover' }}
          />
          <Card.Text className="mt-4">
            Help us map the grammar of English around the world? See our best
            guess as to which world English you speak.
          </Card.Text>
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

export default WhichEnglish;
