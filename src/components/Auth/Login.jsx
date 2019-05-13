import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  loginUser,
  inputHandler,
  validateCredentials
} from "../../redux/actions";
import "./login.css";

class Login extends Component {
  signin = e => {
    const {
      credentials: { email, password },
      validate,
      login
    } = this.props;
    validate({ email, password }).then(res => {
      if (res.message === "Ok") {
        login({ email, password });
      }
    });
    e.preventDefault();
  };

  handleInput = e => {
    const { handleInput } = this.props;
    handleInput({ field: e.target.name, value: e.target.value });
  };

  handleError = () => {
    const { error } = this.props;
    if (error.message) {
      return error.message;
    }
    return "";
  };

  render() {
    const {
      credentials: { email, password },
      submitting,
      error: { passwordRequired, emailRequired }
    } = this.props;
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <div className="form-errors" data-test="form-errors">
              {this.handleError()}
            </div>
          </div>

          <form>
            <input
              type="text"
              id="email"
              className="fadeIn second"
              name="email"
              value={email}
              onChange={this.handleInput}
              placeholder="email"
            />
            <div className="errors">{emailRequired}</div>
            <input
              type="text"
              id="password"
              className="fadeIn third"
              value={password}
              onChange={this.handleInput}
              name="password"
              placeholder="password"
            />
            <div className="errors">{passwordRequired}</div>
            <input
              type="submit"
              onClick={this.signin}
              className="fadeIn fourth"
              value="Log In"
            />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Login.defaultProps = {
  credentials: {
    email: "",
    password: ""
  },
  error: {},
  submitting: false,
  isLoggedIn: false,
  nextPath: ""
};
export const mapStateToProps = ({
  login: { error, credentials, submitting }
}) => ({
  credentials,
  error,
  submitting
});

export const mapDispatchToProps = dispatch => ({
  handleInput: ({ field, value }) => dispatch(inputHandler({ field, value })),
  validate: ({ email, password }) =>
    dispatch(validateCredentials({ email, password })),
  login: ({ email, password }) => dispatch(loginUser({ email, password }))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
