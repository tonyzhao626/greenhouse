import React from 'react';
import UserShowPageHeaderContainer from './user_show_page_header/usp_header_container';
import UserShowPageBodyContainer from './user_show_page_body/usp_body_container';
import CurrentUserBar from './current_user_bar';

class UserShowPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = { profile_shown: true };
    this.setState = this.setState.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.params.userId)
    .then(() => this.props.fetchCampaigns(this.props.params.userId))
    .then(() => this.setState({profile_shown: true}));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      this.props.fetchUser(nextProps.params.userId)
      .then(() => this.props.fetchCampaigns(nextProps.params.userId))
      .then(() => this.setState({profile_shown: true}));
    }
  }

  render() {
    if (this.props.user.campaigns === null) {
      return (<div> </div>);
    }

    let currentUserBar;
    if (this.props.currentUser !== null && this.props.user.user.id === this.props.currentUser.id) {
      currentUserBar = <CurrentUserBar userId={this.props.currentUser.id} page="show-page" />;
    }

    return (
      <div className="cub-sizer">
        {currentUserBar}
        <div className="user-show-page">
          <div >
            <h2 className="user-show-name">{this.props.user.user.first_name} {this.props.user.user.last_name}</h2>
            <div></div>
          </div>

          <UserShowPageHeaderContainer profileShown={this.state.profile_shown} setState={this.setState} />
          <UserShowPageBodyContainer profileShown={this.state.profile_shown} />
        </div>
      </div>
    );
  }
}
export default UserShowPage;
