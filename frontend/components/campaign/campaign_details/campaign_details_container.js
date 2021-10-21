import { connect } from 'react-redux';
import CampaignDetails from './campaign_details';

const mapStateToProps = ({campaign, session}) => ({
  overview: campaign.overview,
  overview_img: campaign.overview_img,
  campaign_story: campaign.campaign_story,
  category: campaign.category,
  // will need backers, comments, updates
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetails);
