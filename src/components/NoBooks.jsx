import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation, faPlus } from "@fortawesome/free-solid-svg-icons";
import noBooksImg from "../assets/book-stack.svg";
const NoBooks = ({showModal}) => {
  return (
    <div className="col-md-12 text-center">
      <img src={noBooksImg} alt="No ooks" style={{ width: "300px" }} />
      <h4 className="mt-4 mb-4">
        <FontAwesomeIcon icon={faExclamation} className="mr-2" /> You have not
        registered any books yet!
      </h4>
      <button
        className="btn btn-info btn-lg "
        data-toggle="modal"
        onClick={showModal}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add a Book
      </button>
    </div>
  );
};

export default NoBooks;
