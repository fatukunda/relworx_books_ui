import React from "react";

const Loader = ({ styles, spinnerColor }) => {
  return (
    <div className={styles}>
      <div className={`spinner-border ${spinnerColor}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
