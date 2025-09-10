"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/" className="text-2xl font-bold text-primary">
        BookWise
      </Link>
      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link href="/library" className={cn}>
            Library
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
