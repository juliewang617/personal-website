"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="px-10 w-full flex bg-transparent h-12 justify-center">
      <div className="m-auto text-gray1 text-sm text-center">
        @2024 Julie Wang. Developed with Next.js and Tailwind CSS |
        <Link
          href="https://github.com/juliewang617"
          className="hover:opacity-75 mr-2"
        >
          {" "}
          GitHub
        </Link>
        ·
        <Link
          href="https://www.linkedin.com/in/juliewang617"
          className="hover:opacity-75 mx-2"
        >
          LinkedIn
        </Link>
        ·
        <Link
          href="mailto:julie_wang2@brown.edu"
          className="hover:opacity-75 ml-2"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
