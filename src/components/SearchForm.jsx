import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./Input";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { searchBooks, viewUserBooks } from "../store/actions/bookActions";

const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("");
  const books = useSelector((state) => state.bookReducer.books);
  const dispatch = useDispatch();
  const changeHandler = (event) => {
    setSearchWord(event.target.value);
    if (event.target.value === "") {
      dispatch(viewUserBooks("/api/v1/books"));
    } else {
      dispatch(searchBooks(books, searchWord));
    }
  };
  return (
    <form className="form">
      <Input
        type="search"
        placeholder="Search book by title or author"
        icon={faSearch}
        styles="mr-sm-2"
        value={searchWord}
        onChange={changeHandler}
        name="search"
      />
    </form>
  );
};
export default SearchForm;
