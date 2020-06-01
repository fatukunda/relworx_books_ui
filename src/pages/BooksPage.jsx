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
import SearchForm from "../components/SearchForm";
import AppPagination from "../components/AppPagination";

const BooksPage = () => {
  const [visible, setVisible] = useState(false);
  const isLoggedIn = useSelector((state) => state.userReducer.isLoggedIn);
  const books = useSelector((state) => state.bookReducer.books);
  const isLoading = useSelector((state) => state.bookReducer.isLoading);
  const paginationData = useSelector(
    (state) => state.bookReducer.paginationData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/");
    }
    dispatch(viewUserBooks("/api/v1/books"));
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
      <div className="container main-container">
        <div className="row">
          <div className="col-md-6">
            <SearchForm />
          </div>
          <div className="col-md-6">
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
      <div className="container mt-4 books-container">
        {isLoading ? (
          <div className="books-container d-flex justify-content-center align-items-center">
            <Loader spinnerColor="text-primary" />
          </div>
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
          <BookRegistrationForm handleClose={hideModal}/>
        </AppModal>
      </div>
      <div className="container mt-4">
        <div className="row">
          {paginationData.itemCount ? (
            <AppPagination
              itemCount={paginationData.itemCount}
              pages={paginationData.pages}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;
