// ./src/components/Layout/Navigation.js

import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { getUser, setUserID } from '../../actions/userInfo';

//styling
import { Nav, Navbar, Button } from 'react-bootstrap';
//import * as i from 'react-social-icons';
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

const Header = props => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  if (!CONFIG.useAuth) {
    const isAuthenticated = false;
    const user = null;
  }

  useEffect(() => {
    props.dispatch(getUser(isAuthenticated, user));
  }, [isAuthenticated]);

  return (
    <div>
      <Navbar className="navbar-dark bg-dark">
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="ml-2 mr-2"
              src={require('../../assets/images/NavbarLogo.png')}
              width="30"
              height="30"
            />
            {CONFIG.whoAmI}
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse>
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
      {/* 
      <div
        id="head-placeholder"
        style={{ paddingBottom: this.state.headerHeight }}
      >
        {' '}
      </div> 
      */}
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(Header));
