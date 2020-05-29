import React from "react";
import { Link } from "react-router-dom";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import Alert from "./Alert";
import { useForm } from "../libs/hooks";
import { login } from "../store/actions/userActions";

const LoginForm = () => {
  const [fields, handleFieldChange] = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const error = useSelector((state) => state.userReducer.error);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = fields;
    const userDetails = {
      email,
      password,
    };
    dispatch(login(userDetails));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="email"
        icon={faEnvelope}
        placeholder="Email"
        name="email"
        onChange={handleFieldChange}
        value={fields.email}
      />
      <Input
        type="password"
        icon={faKey}
        placeholder="Password"
        name="password"
        onChange={handleFieldChange}
        value={fields.password}
      />
      {error ? <Alert alertype="alert-danger" message={error.message} /> : null}
      <button
        type="submit"
        className="btn btn-success btn-block mb-4 form-btn"
      >
        {isLoading
          ? <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          : "Sign In"}
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
