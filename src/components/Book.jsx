import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import BookEditForm from "./BookEditForm";
import NoBookCover from "./NoBookCover";
import AppModal from "./AppModal";

const Book = ({ book }) => {
  const [editFormVisible, setEditFormVisible] = useState(false);
  const editHandler = () => {
    setEditFormVisible(true);
  };
  const hideEditModal = () => {
    setEditFormVisible(false);
  };
  return (
    <div className="col-md-3 mt-4">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {book.image !== "undefined" ? (
              <img
                src={book.image}
                alt="Avatar"
                style={{ maxWidth: "250px", height: "320px" }}
              />
            ) : (
              <NoBookCover title={book.title} author={book.author} />
            )}
          </div>
          <div className="flip-card-back">
            <h4 className="mt-4">{book.title}</h4>
            <p>{book.author}</p>
            <p>{book.isbn}</p>
            <div className="mt-4">
              <button
                className="btn btn-sm btn-warning mr-2"
                style={{ width: "5rem" }}
                onClick={editHandler}
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
      <AppModal
        show={editFormVisible}
        heading={`Edit Book #${book.isbn}`}
        handleClose={hideEditModal}
      >
        <BookEditForm book={book} />
      </AppModal>
    </div>
  );
};

export default Book;
