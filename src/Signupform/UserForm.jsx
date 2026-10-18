import React, { Component } from "react";
import { RiPencilAiFill } from "react-icons/ri";
import classNames from "classnames";
import styles from "../signupform/UserForm.module.css";

const INITIAL_VALUES = { name: "", email: "", password: "", agree: false };

const LOGIN_FORM_REX_EXP = {
  name: /^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}$/,
  email: /^[a-z\d]{3,}@gmail\.com$/i,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*\d.*)(?=.*[!@#$%^&*.].*).{8,16}$/,
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: INITIAL_VALUES.name,
      isNameValid: false,
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      password: INITIAL_VALUES.password,
      isPasswordValid: false,
      agree: INITIAL_VALUES.agree,
    };
  }

  handleFullNameChange = ({ target: { value } }) => {
    this.setState({
      name: value,
      isNameValid: LOGIN_FORM_REX_EXP.name.test(value),
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGIN_FORM_REX_EXP.email.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGIN_FORM_REX_EXP.password.test(value),
    });
  };

  handleAgreeChange = ({ target: { checked } }) => {
    this.setState({
      agree: checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); 
    this.setState(INITIAL_VALUES);
  };

  render() {
    const { name, email, password, isNameValid, isEmailValid, isPasswordValid, agree } = this.state;
    const nameClassName = classNames(styles.input, {
      [styles.inputValid]: isNameValid,
      [styles.inputInvalid]: !isNameValid,
    });
    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });

    const passwordClassName = classNames(styles.input, {
      [styles.inputValid]: isPasswordValid,
      [styles.inputInvalid]: !isPasswordValid,
    });

    return (
      <>
        <h1>Sign Up</h1>
        <div className={styles.container}>
          <form onSubmit={this.handleSubmit} className={styles.form}>
            <span className={styles.topIcon}>
              <RiPencilAiFill />
            </span>
            <h2 className={styles.formTitle}>Create Your Account</h2>

            <label className={styles.inputComtainer}>
              <p className={`${styles.fullName} ${styles.formText}`}>full name</p>
              <input
                className={nameClassName}
                type="text"
                name="name"
                placeholder="John Doe"
                autoFocus
                value={name}
                onChange={this.handleFullNameChange}
              />
            </label>
            <label className={styles.inputComtainer}>
              <p className={`${styles.email} ${styles.formText}`}>email adress</p>{" "}
              <input
                className={emailClassName}
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={this.handleEmailChange}
              />
            </label>
            <label className={styles.inputComtainer}>
              <p className={`${styles.password} ${styles.formText}`}>password</p>
              <input
                className={passwordClassName}
                type="password"
                name="password"
                placeholder="Aa123!@#"
                value={password}
                onChange={this.handlePasswordChange}
              />
            </label>
            <label className={`${styles.inputComtainer} ${styles.agreeContainer}`}>
              <input
                className={styles.agreeText}
                type="checkbox"
                name="checkbox"
                checked={agree}
                onChange={this.handleAgreeChange}
              />
              <span className={styles.agreeText}>I Agree All Statements In Terms Of Service</span>
            </label>
            <button className={styles.submitBtn} type="submit" disabled={!agree}>
              Sign Up
            </button>
          </form>
        </div>
      </>
    );
  }
}
