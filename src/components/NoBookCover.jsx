import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

const NoBookCover = ({ title, author }) => {
  return (
    <div className="flip-card" style={{ backgroundColor: "#5d7b95" }}>
      <h4 className="text-white pt-4 mb-4">{title}</h4>
      <FontAwesomeIcon icon={faExclamation} size="5x" color="#fff" />
      <div className="mt-4">
        <h6 className="text-white mb-4">No Book Image</h6>
        <p className="text-white">{author}</p>
      </div>
    </div>
  );
};

export default NoBookCover;
