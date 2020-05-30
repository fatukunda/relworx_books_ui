import React, { useEffect } from "react";
import Header from "../components/Header";
import LoginForm from "../components/RegistrationForm";
import { history } from "../App";

const UserRegistrationPage = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn) {
      history.push("/books");
    }
  });
  return (
    <>
      <div className="row logo-title">
        <Header />
      </div>
      <div className="row justify-content-center form-modal">
        <div className="col-md-10 form-container">
          <h5 className="text-white text-center mb-4">Create an Account</h5>
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default UserRegistrationPage;
