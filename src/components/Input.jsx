import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = (props) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <FontAwesomeIcon icon={props.icon} />
        </span>
      </div>
      <input
        type={props.type}
        className="form-control"
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        required
      />
    </div>
  );
};

export default Input;
