import DefaultDrawer from './DefaultDrawer';

import {connect} from 'react-redux';

import {clearToken} from '../../actions/usersActions';

const mapDispatchToProps = dispatch => {
  return {
    onPressLogout: () => {
      dispatch(clearToken());
    },
  };
};

export default connect(null, mapDispatchToProps)(DefaultDrawer);
