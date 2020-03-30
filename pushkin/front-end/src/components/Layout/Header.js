// ./src/components/Layout/Navigation.js

import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { getUser, setUserID } from '../../actions/userInfo';

//styling
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
//import * as i from 'react-social-icons';
import s from './Header.css';
//import l from './Layout.css';
import { LinkContainer } from 'react-router-bootstrap';
import Avatar from '../Avatar.js';

//other
import { CONFIG } from '../../config';
import { useAuth0 } from '../../utils/react-auth0-spa';

const mapStateToProps = state => {
  return {
    userID: state.userInfo.userID
  };
};

const Header = (props) => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (!CONFIG.useAuth) {
    const isAuthenticated = false;
    const user = null;
  }

  useEffect(() => {
    props.dispatch(getUser(isAuthenticated, user));
  }, [isAuthenticated]);

  return (
    <div id="App">
      <div id="head-wrap" className={s.gray}>
        <header className={s.header} id="header">
          <div className={s.navback}>
            <div className={s.navhead}>
              <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-b.Navbar-b.Nav" />
                <Navbar.Collapse id="basic-b.Navbar-b.Nav">
                  <LinkContainer to="/">
                    <Navbar.Brand>{CONFIG.whoAmI}</Navbar.Brand>
                  </LinkContainer>
                  <Nav className="mr-auto">
                    <Nav.Item>
                      <LinkContainer to="/">
                        <Nav.Link>Quizzes</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                      <LinkContainer to="/About">
                        <Nav.Link>About</Nav.Link>
                      </LinkContainer>
                    </Nav.Item>
                  </Nav>
                  <Nav className="ml-auto">
                    <Nav.Item>
                      {CONFIG.useAuth ? (
                          !isAuthenticated ? (
                            <Fragment>
                              <Button
                                onClick={() => loginWithRedirect({})}
                                variant="outline-success"
                              >
                                Login
                              </Button>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <LinkContainer to="/Dashboard">
                                <Nav.Link>Dashboard</Nav.Link>
                              </LinkContainer>
                              <Button
                                onClick={() => {
                                  logout();
                                  props.dispatch(setUserID(null));
                                }}
                              >
                                Logout
                              </Button>
                              <Avatar />
                            </Fragment>
                          )
                       ) : null}
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </header>

        {/* 
        <div
          id="head-placeholder"
          style={{ paddingBottom: this.state.headerHeight }}
        >
          {' '}
        </div> 
        */}
      </div>
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Header));
