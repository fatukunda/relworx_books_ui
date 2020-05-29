import React from "react";

const Alert = ({ alertype, message }) => {
  return <div
    className={`alert ${alertype} alert-dismissible fade show`}
    role="alert"
  >
    {message}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  </div>;
};

export default Alert;
