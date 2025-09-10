import React from "react";

const variantStyles: Record<string, string> = {
  extraSmall: "book-cover_extra-small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
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
