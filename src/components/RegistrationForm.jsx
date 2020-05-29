import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import Input from "./Input";
import Alert from "./Alert";
import { useForm } from "../libs/hooks";
import { createUser } from "../store/actions/userActions";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.userReducer.isLoading);
  const error = useSelector((state) => state.userReducer.error);
  const [fields, handleFieldChange] = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = fields;
    const userDetails = {
      firstName,
      lastName,
      email,
      password,
    };
    dispatch(createUser(userDetails));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={faUser}
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleFieldChange}
        value={fields.firstName}
      />
      <Input
        icon={faUser}
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleFieldChange}
        value={fields.lastName}
      />
      <Input
        icon={faEnvelope}
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleFieldChange}
        value={fields.email}
      />
      <Input
        icon={faKey}
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleFieldChange}
        value={fields.password}
      />
      {error ? <Alert alertype="alert-danger" message={error.message} /> : null}

      <button type="submit" className="btn btn-success btn-block mb-4 form-btn">
        {isLoading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Sign Up"
        )}
      </button>
      <div className="text-white no-account">
        <p className="text-center">
          Already have an Account?{" "}
          <Link to="/" className="link">
            SIGN IN
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegistrationForm;
