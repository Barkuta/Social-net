import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {
  setAuthUserData,
  toggleIsFetchingAC,
  logout,
} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
  render() {
    return <>{<Header {...this.props} />}</>;
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData,
  toggleIsFetchingAC,
  logout,
})(HeaderContainer);
