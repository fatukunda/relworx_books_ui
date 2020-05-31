import * as actions from "../constants/bookConstants";

const initialState = {
  books: [],
  book: {},
  paginationData: {},
  createLoading: false,
  editLoading: false,
  deleteLoading: false,
  isLoading: false,
  error: null,
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
      };
    case actions.CREATE_BOOK_PENDING:
      return {
        ...state,
        createLoading: action.payload,
      };
    case actions.CREATE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
      };
    case actions.FETCH_BOOKS_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.FETCH_BOOKS_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.EDIT_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
      };
    case actions.EDIT_BOOK_PENDING:
      return {
        ...state,
        editLoading: action.payload,
      };
    case actions.EDIT_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.DELETE_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
      };
    case actions.DELETE_BOOK_PENDING:
      return {
        ...state,
        deleteLoading: action.payload,
      };
    case actions.DELETE_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        book: action.payload,
      };
    case actions.FETCH_BOOK_PENDING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actions.FETCH_BOOK_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case actions.SET_PAGINATION_DATA:
      return {
        ...state,
        paginationData: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
