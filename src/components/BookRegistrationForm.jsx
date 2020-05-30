import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faUser, faBook } from "@fortawesome/free-solid-svg-icons";
import ImageUploader from "react-images-upload";
import Input from "./Input";
import Alert from "./Alert";
import { useForm } from "../libs/hooks";
import { registerBook } from "../store/actions/bookActions";

const BookRegistrationForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.bookReducer.isLoading);
  const error = useSelector((state) => state.bookReducer.error);
  const [image, setImage] = useState("");
  const [fields, handleFieldChange] = useForm({
    isbn: "",
    title: "",
    author: "",
  });
  const handleImageUpload = (image) => {
    setImage(image);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { isbn, title, author } = fields;
    const data = new FormData();
    data.append("image", image[0]);
    data.append("isbn", isbn);
    data.append("title", title);
    data.append("author", author);
    dispatch(registerBook(data));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        icon={faBook}
        type="text"
        name="isbn"
        placeholder="Book ISBN"
        onChange={handleFieldChange}
        value={fields.isbn}
      />
      <Input
        icon={faBook}
        type="text"
        name="title"
        placeholder="Book Title"
        onChange={handleFieldChange}
        value={fields.title}
      />
      <Input
        icon={faUser}
        type="author"
        name="author"
        placeholder="Author"
        onChange={handleFieldChange}
        value={fields.author}
      />
      <ImageUploader
        withIcon={true}
        buttonText="Upload book photo"
        onChange={handleImageUpload}
        imgExtension={[".jpg", ".gif", ".png"]}
        maxFileSize={5242880}
        name="image"
        singleImage={true}
      />
      {error ? <Alert alertype="alert-danger" message={error.message} /> : null}
      <button type="submit" className="btn btn-info btn-block mb-4 form-btn">
        {isLoading ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Save Book"
        )}
      </button>
    </form>
  );
};

export default BookRegistrationForm;
