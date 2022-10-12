import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "./BooksSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location.state);
  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({ id, title, author }));
    navigate("/show-books", { replace: true });
  };
  return (
    <div className="container mt-5">
      <h2
        className="text-center text-uppercase m-5"
        style={{ letterSpacing: "5px", fontWeight: "ligher" }}
      >
        Edit Book
      </h2>
      <form
        onSubmit={handleSubmit}
        className="border rounded p-4 "
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
          className="btn "
          style={{ background: "#006877", color: "white" }}
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
