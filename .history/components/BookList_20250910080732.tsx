import React from "react";

interface props = {
  title: string;
  books: Book[];
  containerClassName: string;
};

const BookList = ({ title, books, containerClassName }: props) => {
  return (
    <section>
      <h2 className="font-bebas-neue text-4xl text-light-100">popular books</h2>
    </section>
  );
};

export default BookList;
