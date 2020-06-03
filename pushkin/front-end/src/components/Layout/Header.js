// ./src/components/Layout/Navigation.js

import React, { Fragment, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//redux
import { connect } from 'react-redux';
import { getUser, setUserID } from '../../actions/userInfo';

//styling
import { Nav, Navbar, Button, Image } from 'react-bootstrap';

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
    <Navbar className="navbar-dark bg-dark" expand="lg">
      <Navbar.Brand href="/">
        <Image
          className="mr-2 left"
          src={require('../../assets/images/logo/NavbarLogo.png')}
          width="30"
          height="30"
        />
        {CONFIG.whoAmI}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link href="/">Quizzes</Nav.Link>
          <Nav.Link href="/findings">Findings</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          {CONFIG.useAuth ? (
            !isAuthenticated ? (
              <Fragment>
                <Nav.Item>
                  <Button
                    onClick={() => loginWithRedirect({})}
                    variant="outline-success"
                  >
                    Login
                  </Button>
                </Nav.Item>
              </Fragment>
            ) : (
              <Fragment>
                <Nav.Item>
                  <Nav.Link href="/forum">Forum</Nav.Link>
                </Nav.Item>
                <Nav.Item></Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button
                    onClick={() => {
                      logout();
                      props.dispatch(setUserID(null));
                    }}
                  >
                    Logout
                  </Button>
                  <Image
                    className="ml-2 left"
                    src={user.picture}
                    width="30"
                    height="30"
                    roundedCircle
                  />
                </Nav.Item>
              </Fragment>
            )
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(connect(mapStateToProps)(Header));
