import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Massage";
import { sendActionCreator } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { compose } from "redux";

{
  <DialogItem />;
}
{
  <Message />;
}

let mapStateToProps = (state) => {
  return {
    state: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendActionCreator: (newMessageBody) => {
      dispatch(sendActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
