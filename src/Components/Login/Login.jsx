import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../Utils/Valodators/validators";
import s from "./Login.module.css";
import { Element } from "../Common/FormsControls/FormsControls";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import { Navigate } from "react-router-dom";
import style from "../Common/FormsControls/FormsControls.module.css";
import LoginForm from "./LoginForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
  return (
    <div className={s.Login}>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { login })(Login);
