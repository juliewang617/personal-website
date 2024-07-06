'use client'

import Link from "next/link";

export default function NavBar() {

  return (
    <div className="px-10 w-full flex bg-blue1 h-12 justify-center">
        <div className="m-auto text-blue3 text-sm text-center">
            @2024 Julie Wang | 
            <Link href="https://github.com/juliewang617" className="hover:opacity-75 mr-2"> GitHub</Link>
            ·
            <Link href="https://www.linkedin.com/in/juliewang617" className="hover:opacity-75 mx-2">LinkedIn</Link>
            ·
            <Link href="mailto:juliewang617@gmail.com" className="hover:opacity-75 ml-2">Email</Link>
        </div>
    </div>
  );
};

