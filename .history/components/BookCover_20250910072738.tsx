// import React from "react";

// const BookCover = ({}) => {
//   return <div>BookCover</div>;
// };

// export default BookCover;
interface BookCoverProps {
  variant: string;
}

const BookCover: React.FC<BookCoverProps> = ({ variant }) => {
  return <div>BookCover</div>;
};

export default BookCover;
