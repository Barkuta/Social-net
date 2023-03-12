import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  setUsersTotalCount,
  toggleIsFetching,
  unfollow,
  toggleFollowingProgress,
  requestUsers,
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/preloader";
import { compose } from "redux";
import {
  getUsers,
  getCurrentPage,
  getFollowingProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector,
} from "../../Redux/users-selectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unFollow={this.props.unfollow}
          toggleFollowingProgress={this.props.toggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     isFetching: state.usersPage.isFetching,
//     followingInProgress: state.usersPage.followingInProgress,
//   };
// };

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingProgress(state),
  };
};

let UsersContainer = connect(mapStateToProps, {
  follow,

  unfollow,

  setUsers,

  setCurrentPage,

  setUsersTotalCount,

  toggleIsFetching,

  toggleFollowingProgress,
})(UsersAPIComponent);

export default compose(
  connect(mapStateToProps, {
    follow,

    unfollow,

    setUsers,

    setCurrentPage,

    setUsersTotalCount,

    toggleIsFetching,

    toggleFollowingProgress,

    requestUsers,
  })
)(UsersContainer);
