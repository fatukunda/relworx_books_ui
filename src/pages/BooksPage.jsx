import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Book from "../components/Book";
import AppModal from "../components/AppModal";
import BookRegistrationForm from "../components/BookRegistrationForm";
import { history } from "../App";
import { viewUserBooks } from "../store/actions/bookActions";
import Loader from "../components/Loader";
import NoBooks from "../components/NoBooks";

const BooksPage = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const books = useSelector((state) => state.bookReducer.books);
  const isLoading = useSelector((state) => state.bookReducer.isLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
    dispatch(viewUserBooks());
  }, [dispatch, isLoggedIn]);

  const showModal = () => {
    setVisible(true);
  };
  const hideModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <NavBar />
      <div className="container-fluid main-container">
        <div className="row">
          <div className="col-md-12">
            {books.length > 0 ? (
              <button
                className="btn float-right btn-success"
                data-toggle="modal"
                data-target="#exampleModalCenter"
                onClick={showModal}
              >
                <FontAwesomeIcon icon={faPlus} className="mr-2" /> Add New Book
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container mt-4">
        {isLoading ? (
          <Loader
            styles="d-flex justify-content-center"
            spinnerColor="text-primary"
          />
        ) : (
          <div className="row mb-2">
            {books.length > 0 ? (
              books.map((book) => {
                return <Book book={book} key={book.isbn} />;
              })
            ) : (
              <NoBooks showModal={showModal} />
            )}
          </div>
        )}

        <AppModal
          show={visible}
          handleClose={hideModal}
          heading="Register a New Book"
        >
          <BookRegistrationForm />
        </AppModal>
      </div>
    </div>
  );
};

export default BooksPage;
