import { connect } from 'react-redux';
import Header from '../components/Layout/Header';
import { useAuth0 } from '../utils/react-auth0-spa';

const mapStateToProps = state => {
  return {
    user: state.userInfo.userID
  };
};

const mapDispatchToProps = dispatch => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return {
    isAuthenticated: isAuthenticated,
    loginWithRedirect: loginWithRedirect,
    logout: logout
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
