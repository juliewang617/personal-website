'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"; 

export default function NavBar() {

  const pathname = usePathname(); 

  const isActive = (pn : String) => {
    if(pn == pathname){
      return "font-bold text-blue3"; 
    }
    return "text-blue2"; 
  }; 

  return (
    <nav className="bg-transparent p-5 mb-12">
      <div className="w-full flex justify-between">
      <Link href="/" className={isActive("/") + " hover:bg-blue1"}>
      jwang.dev
      </Link>

        <div className='sm:space-x-10 space-x-4'>
        <Link href="/projects" className={isActive("/projects") + " hover:bg-blue1"}>
            Projects
        </Link>
        <Link href="/fun" className={isActive("/fun") + " hover:bg-blue1"}>
            Fun
        </Link>
        <Link href="https://docs.google.com/document/d/e/2PACX-1vQIykasWoKeIvDdHKOdhb_pvejH-6eQvIsHnRaqHCGC2o-BWvUpXxbkpfeZrv0rEQ/pub" 
        target="_blank"
        className={isActive("/resume") + " hover:bg-blue1"}>
            Resume
        </Link>

        </div>
      </div>
    </nav>
  );
};

