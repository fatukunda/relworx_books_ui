import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  return (
    <form>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          aria-label="Email"
        />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faKey} />
          </span>
        </div>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          aria-label="Password"
        />
      </div>
      <button
        type="submit"
        className="btn btn-success btn-block mb-4 login-btn"
      >
        Sign In
      </button>
      <div className="text-white no-account">
        <p className="text-center">
          No Account? <Link to="/register" className="link">REGISTER NOW!</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
