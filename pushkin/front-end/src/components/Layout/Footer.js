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
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import s from './Footer.css';
import { CONFIG } from '../../config';

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
            <Row>
              <Col>
              <div>
                  © 2020 {CONFIG.whoAmI}. All rights reserved.
                </div>
                    <LinkContainer to="/feedback">
                    <strong>Leave feedback</strong>
                  </LinkContainer>
                  &nbsp; - &nbsp;
                  <a href={`mailto:` + CONFIG.email} target="_blank">
                    <strong>Media inquiries</strong>
                  </a>
                </Col>
              </Row>
        </footer>
    );
  }
}

export default withRouter(Footer);
