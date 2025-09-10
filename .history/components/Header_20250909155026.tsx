import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="text-2xl font-bold text-primary">
        BookWise
      </Link>
      <ul className="flex flex-row items-center gap-8"></ul>
    </header>
  );
};

export default Header;
