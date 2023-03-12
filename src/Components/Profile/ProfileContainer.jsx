import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../../Redux/profile-reducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getProfile,
  getStatus,
  updateStatus,
} from "../../Redux/profile-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = this.props.autorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    status: state.profilePage.status,
    profile: state.profilePage.profile,
    img: state.profilePage.imgData,
    autorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
