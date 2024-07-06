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
    <nav className="bg-transparent p-5 mb-12 ">
      <div className="w-full flex sm:justify-between justify-center">
      <Link href="/" className={isActive("/") + " hover:bg-blue1 mr-4 sm:mr-0"}>
      Home
      </Link>

        <div className='sm:space-x-10 space-x-4'>
        <Link href="/projects" className={isActive("/projects") + " hover:bg-blue1"}>
            Projects
        </Link>
        <Link href="/fun" className={isActive("/fun") + " hover:bg-blue1"}>
            Fun
        </Link>
        <Link href="https://drive.google.com/file/d/1MN14Zd6YfQrrObuCb35UDeV41uScSnEA/view?usp=sharing" 
        target="_blank"
        className={isActive("/resume") + " hover:bg-blue1"}>
            Resume
        </Link>

        </div>
      </div>
    </nav>
  );
};

