import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <div className="col-md-3 mt-4">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={book.image}
              alt="Avatar"
              style={{ maxWidth: "250px", height: "320px" }}
            />
          </div>
          <div className="flip-card-back">
            <h4 className="mt-4">{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <div className="mt-4">
              <button
                className="btn btn-sm btn-warning mr-2"
                style={{ width: "5rem" }}
              >
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                style={{ width: "5rem" }}
              >
                <FontAwesomeIcon icon={faTrash} className="mr-2" />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
