import React from "react";

const variantStyles = {
  extraSmall: "book-cover_extra-small",
};
interface props {
  className?: string;
  variant: "wide" | "small";
  coverColor: string;
  coverUrl: string;
}

const BookCover = ({ className, variant, coverColor, coverUrl }: props) => {
  return <div>BookCover</div>;
};

export default BookCover;
