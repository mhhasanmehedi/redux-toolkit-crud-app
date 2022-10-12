import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./BooksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: uuidv4(), title, author };
    dispatch(addBook(book));
    navigate("/show-books", { replace: true });
  };
  return (
    <div className="container mt-5">
      <h2
        className="text-center text-uppercase m-5"
        style={{ letterSpacing: "5px", fontWeight: "ligher" }}
      >
        Add Book
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border rounded p-4"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author:
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="btn"
          style={{ background: "#006877", color: "white" }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
