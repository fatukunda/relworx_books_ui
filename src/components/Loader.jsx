import React from "react";

const Loader = ({ spinnerSize, spinnerColor }) => {
  return (
    <div className={`spinner-border ${spinnerSize} ${spinnerColor}`} role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
