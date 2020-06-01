import axios from "axios";
import * as actions from "../constants/bookConstants";

const baseUrl = "https://relworxbooks.herokuapp.com/api/v1/books";

const createBookSuccess = (book) => {
  return {
    type: actions.CREATE_BOOK_SUCCESS,
    payload: book,
  };
};

const createBookPending = (isLoading) => {
  return {
    type: actions.CREATE_BOOK_PENDING,
    payload: isLoading,
  };
};

const createBookFailure = (error) => {
  return {
    type: actions.CREATE_BOOK_FAILURE,
    payload: error,
  };
};

const fetchBooksSuccess = (books) => {
  return {
    type: actions.FETCH_BOOKS_SUCCESS,
    payload: books,
  };
};

const fetchBooksPending = (isLoading) => {
  return {
    type: actions.FETCH_BOOKS_PENDING,
    payload: isLoading,
  };
};

const fetchBooksFailure = (error) => {
  return {
    type: actions.FETCH_BOOKS_FAILURE,
    payload: error,
  };
};

const fetchBookSuccess = (book) => {
  return {
    type: actions.FETCH_BOOK_SUCCESS,
    payload: book,
  };
};

const fetchBookPending = (isLoading) => {
  return {
    type: actions.FETCH_BOOK_PENDING,
    payload: isLoading,
  };
};

const fetchBookFailure = (error) => {
  return {
    type: actions.FETCH_BOOK_FAILURE,
    payload: error,
  };
};

const editBookSuccess = (book) => {
  return {
    type: actions.EDIT_BOOK_SUCCESS,
    payload: book,
  };
};

const editBookPending = (isLoading) => {
  return {
    type: actions.EDIT_BOOK_PENDING,
    payload: isLoading,
  };
};

const editBookFailure = (error) => {
  return {
    type: actions.EDIT_BOOK_FAILURE,
    payload: error,
  };
};

const deleteBookSuccess = (book) => {
  return {
    type: actions.DELETE_BOOK_SUCCESS,
    payload: book,
  };
};

const deleteBookPending = (isLoading) => {
  return {
    type: actions.DELETE_BOOK_PENDING,
    payload: isLoading,
  };
};

const deleteBookFailure = (error) => {
  return {
    type: actions.DELETE_BOOK_FAILURE,
    payload: error,
  };
};

const setPaginationData = (paginationData) => {
  return {
    type: actions.SET_PAGINATION_DATA,
    payload: paginationData,
  };
};

export const registerBook = (bookDetails, handleClose) => async (dispatch) => {
  dispatch(createBookPending(true));
  try {
    const response = await axios.post(baseUrl, bookDetails);
    const book = response.data;
    dispatch(createBookSuccess(book));
    dispatch(createBookPending(false));
    handleClose();
    dispatch(viewUserBooks("/api/v1/books"));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(createBookFailure(error.response.data));
        localStorage.clear();
        window.location.href = "/";
      }
      dispatch(createBookFailure(error.response.data));
      dispatch(createBookPending(false));
    }
  }
};

export const viewSingleBook = (bookId) => async (dispatch) => {
  dispatch(fetchBookPending(true));
  try {
    const response = await axios.get(`${baseUrl}/${bookId}`);
    const book = response.data;
    dispatch(fetchBookSuccess(book));
    dispatch(fetchBooksPending(false));
  } catch (error) {
    if (error.response) {
      dispatch(fetchBookFailure(error.response.data));
      dispatch(fetchBookPending(false));
    }
  }
};

export const viewUserBooks = (url) => async (dispatch) => {
  dispatch(fetchBooksPending(true));
  try {
    const response = await axios.get(
      `https://relworxbooks.herokuapp.com${url}`
    );
    const {
      data: { books, itemCount, pages, pageCount },
    } = response.data;
    dispatch(fetchBooksSuccess(books.reverse()));
    dispatch(
      setPaginationData({
        itemCount,
        pages,
        pageCount,
      })
    );
    dispatch(fetchBooksPending(false));
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        dispatch(fetchBooksFailure(error.response.data));
        localStorage.clear();
        window.location.href = "/";
      }
      dispatch(fetchBooksFailure(error.response.data));
      dispatch(fetchBooksPending(false));
    }
  }
};

export const updateImage = (imageData, id) => async dispatch => {
   dispatch(editBookPending(true));
   try {
     const response = await axios.put(
        `${baseUrl}/${id}/image-upload`,
        imageData
      );
      const { data } = response;
      dispatch(editBookSuccess(data));
      dispatch(editBookPending(false));
      dispatch(viewUserBooks("/api/v1/books"));
      console.log(data)
   } catch (error) {
     if (error.response) {
       dispatch(editBookFailure(error.response.data));
       dispatch(editBookPending(false));
     }
   }
}

export const editBook = (bookData, id) => async (dispatch) => {
  dispatch(editBookPending(true));
  try {
    const response = await axios.patch(`${baseUrl}/${id}`, bookData);
    const {
      data: { book },
    } = response.data;
    dispatch(editBookSuccess(book));
    dispatch(editBookPending(false));
    dispatch(viewUserBooks("/api/v1/books"));
  } catch (error) {
    if (error.response) {
      dispatch(editBookFailure(error.response.data));
      dispatch(editBookPending(false));
    }
  }
};

export const deleteBook = (bookId) => async (dispatch) => {
  dispatch(deleteBookPending(true));
  try {
    const response = await axios.delete(`${baseUrl}/${bookId}`);
    const book = response.data;
    dispatch(deleteBookSuccess(book));
    dispatch(deleteBookPending(false));
    dispatch(viewUserBooks("/api/v1/books"));
  } catch (error) {
    if (error.response) {
      dispatch(deleteBookFailure(error.response.data));
      dispatch(deleteBookPending(false));
    }
  }
};

export const searchBooks = (books, keyword) => (dispatch) => {
  /*eslint array-callback-return: 0 */
  dispatch(fetchBooksPending(true));
  const filteredBooks = books.filter((book) => {
    return Object.keys(book).some((key) => {
      if (typeof book[key] === "string")
        return book[key].toLowerCase().includes(keyword.toLowerCase());
    });
  });
  dispatch(fetchBooksSuccess(filteredBooks));
  if (keyword.length > 1) {
    dispatch(fetchBooksPending(false));
  }
};
