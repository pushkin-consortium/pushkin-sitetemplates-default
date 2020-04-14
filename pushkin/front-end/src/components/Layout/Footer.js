/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
//import * as i from 'react-social-icons';
import { Row, Col } from 'react-bootstrap';
// import s from './Footer.css';
import { CONFIG } from '../../config';

class Footer extends Component {
  render() {
    return (
      <Row className="mt-5" style={{ backgroundColor: '#eeeeee' }}>
        <Col>
          <div className="mt-5">
            &copy; {new Date().getFullYear()} {CONFIG.whoAmI}. All rights
            reserved.
          </div>
          <div className="mb-5">
            <LinkContainer to="/feedback">
              <a>
                <strong>Leave Feedback</strong>
              </a>
            </LinkContainer>
            &nbsp; - &nbsp;
            <a href={`mailto:` + CONFIG.email} target="_blank">
              <strong>Media Inquiries</strong>
            </a>
          </div>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Footer);
