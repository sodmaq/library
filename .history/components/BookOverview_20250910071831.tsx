import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  total_copies,
  available_copies,
  description,
  color,
  cover,
}: Book) => {
  return (
    <section className="book-overview">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>
        <div className="book-info">
          <p>
            By <span className="font-semibold text-light-200">{author}</span>
          </p>
          <p>
            Category{" "}
            <span className="font-semibold text-light-200">{genre}</span>
          </p>
          <div className="flex flex-row gap-1">
            <Image src="/icons/star.svg" alt="star" width={22} height={22} />
            <p>{rating}</p>
          </div>
        </div>

        <div className="book-copies">
          <p>
            Total Books :{" "}
            <span className="font-semibold text-light-200">{total_copies}</span>
          </p>
          <p>
            Available Books :{" "}
            <span className="font-semibold text-light-200">
              {available_copies}
            </span>
          </p>
        </div>
        <p className="book-description"> {description}</p>
        <Button className="book-overview-btn">
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className="font-bebas-neue text-xl text-dark-100">Borrow</p>
        </Button>
      </div>
      <div className="relative flex flex-1 items-center justify-center"></div>
    </section>
  );
};

export default BookOverview;
