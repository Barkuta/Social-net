import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../Utils/Valodators/validators";
import s from "./LoginForm.module.css";
import { Element } from "../Common/FormsControls/FormsControls";
import style from "../Common/FormsControls/FormsControls.module.css";

const Input = Element("input");

const LoginForm = (props) => {
  return (
    <section className={s.section}>
      <div className={s.formBox}>
        <div className={s.formValue}>
          <form onSubmit={props.handleSubmit}>
            <h2 className={s.h2}>Login</h2>
            <div className={s.inputBox}>
              <ion-icon name="mail-outline"></ion-icon>
              <Field
                placeholder={"Email"}
                name={"email"}
                component={Input}
                validate={[required]}
              />
              <label htmlFor=""></label>
            </div>
            <div className={s.inputBox}>
              <ion-icon name="lock-closed-outline"></ion-icon>
              <Field
                placeholder={"Password"}
                name={"password"}
                component={Input}
                validate={[required]}
                type={"password"}
              />
              <label htmlFor=""></label>
            </div>
            <div className={s.forget}>
              <label htmlFor="">
                <div>
                  <Field
                    type={"checkbox"}
                    name={"rememderMe"}
                    component={Input}
                  />
                </div>
                <div>
                  Remember me
                  <a href="#">Forget password</a>
                </div>
              </label>
            </div>
            {props.error && (
              <div className={style.formSummaryError}>{props.error}</div>
            )}
            <button className={s.btn}>Login</button>
            <div className={s.register}>
              <p>
                Don't have an account <a href="#">Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
