import { connect } from 'react-redux';
import Home from './Home';
import { getData } from '../../redux/actions/HomeAction';

const mapStateToProps = (state) => ({
  users: state.home.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => {
    dispatch(getData());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
