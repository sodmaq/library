import React from "react";
interface props {
  className?: string;
  variant: string;
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({ className, variant, coverColor, coverUrl }: props) => {
  return <div>BookCover</div>;
};

export default BookCover;
