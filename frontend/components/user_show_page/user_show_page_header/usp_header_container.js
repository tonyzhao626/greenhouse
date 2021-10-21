import { connect } from 'react-redux';
import UserShowPageHeader from './usp_header';

const mapStateToProps = ({user, session}) => {
  return ({
    user: user,
  });
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShowPageHeader);
