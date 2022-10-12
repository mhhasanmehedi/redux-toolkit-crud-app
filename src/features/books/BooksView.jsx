import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { deleteBook } from "./BooksSlice";
import { Link } from "react-router-dom";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="container">
      <h2
        className="text-center text-uppercase m-5"
        style={{ letterSpacing: "5px", fontWeight: "ligher" }}
      >
        List of books
      </h2>
      <table
        className="table mb-5"
        style={{ maxWidth: "600px", margin: "auto" }}
      >
        <thead>
          <tr style={{ background: "#006877", color: "white" }}>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book, index) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <th>{index + 1}</th>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td className="d-flex gap-2">
                    <Link to="/edit-book" state={{ id, title, author }}>
                      <button>
                        <FaEdit />
                      </button>
                    </Link>

                    <button onClick={() => handleDelete(id)}>
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default BooksView;
