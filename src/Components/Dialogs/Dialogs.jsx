import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Massage";
import { Field, reduxForm } from "redux-form";
// import { Textarea } from "../Common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../Utils/Valodators/validators";
import { Element } from "../Common/FormsControls/FormsControls";

const Dialogs = (props) => {
  const onSubmit = (values) => {
    props.sendActionCreator(values.newMessageBody);
  };

  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} img={d.img} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        <div className={s.messagesbox}>
          <div className={s.dialogbox}>
            <div>{messagesElements}</div>
          </div>
          <div className={s.textarea}>
            <div></div>
            <AddMessageFormRedux onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Textarea = Element("textarea");

// const maxLengths50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.textarea}>
      <div></div>
      <div className={s.textareabox}>
        <Field
          name={"newMessageBody"}
          placeholder={"Message..."}
          component={Textarea}
          // validate={[required, maxLengths50]}
        />
      </div>
      <div className={s.btn}>
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);

export default Dialogs;
