// import React from "react";

// const BookCover = ({}) => {
//   return <div>BookCover</div>;
// };

// export default BookCover;
interface BookCoverProps {
  variant: string;
  coverColor: any;
  coverImage: any;
}

const BookCover: React.FC<BookCoverProps> = ({
  variant,
  coverColor,
  coverImage,
}) => {
  return <div>BookCover</div>;
};

export default BookCover;
