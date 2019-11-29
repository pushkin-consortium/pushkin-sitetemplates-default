import { connect } from 'react-redux';
import Header from '../components/Layout/Header';

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

const HeaderContainer = connect(mapStateToProps)(Header);

export default HeaderContainer;
