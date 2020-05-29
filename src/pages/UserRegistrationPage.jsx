import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/RegistrationForm";

const UserRegistrationPage = () => {
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