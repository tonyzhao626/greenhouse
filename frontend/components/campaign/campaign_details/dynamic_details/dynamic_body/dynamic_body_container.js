import { connect } from 'react-redux';
import DynamicBody from './dynamic_body';

const mapStateToProps = ({campaign, session}, ownProps) => {
  return ({
    selected: ownProps.selected,
  });
  // needs overview image
  // overview: campaign.overview,
  // campaign_story: campaign.campaign_story,
  // current_user: session.current_user,
  // will need backers, comments, updates
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DynamicBody);
