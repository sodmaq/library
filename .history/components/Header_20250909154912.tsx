import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="text-2xl font-bold text-primary">
        Library
      </Link>
    </header>
  );
};

export default Header;
