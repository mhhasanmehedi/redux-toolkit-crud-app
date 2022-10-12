import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialBooks = {
  books: [
    {
      id: uuidv4(),
      title: "Love Bangladesh",
      author: "Anisul Islam",
    },
    {
      id: uuidv4(),
      title: "Bangladeshi",
      author: "Mehedi Hasan",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);

      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
  },
});

export const { showBooks, addBook, updateBook, deleteBook } =
  booksSlice.actions;
export default booksSlice.reducer;
