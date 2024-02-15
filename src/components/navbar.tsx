import Link from 'next/link';
//import { useState } from 'react';
import 'tailwindcss/tailwind.css';

export default function Navbar() {

 // const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
 //   setIsOpen(!isOpen);
  };

  return (
    <nav className="z-5 w-full bg-gray-800/30 backdrop-blur-2xl py-4">
      <div className="px-4 mx-auto flex justify-between items-center">
        <div>
          <Link href="/"
            className="text-white text-lg font-bold">PRINT DESK
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="text-white">Home
          </Link>
          <Link href="/design" className="text-white">Design
          </Link>
          <Link href="/about" className="text-white">About
          </Link>
        </div>
        <div className="md:hidden">
          {/* Hamburger menu for mobile */}
          <button
            className="text-white hover:border-gray-300 hover:bg-gray-500 focus:outline-none p-1"
            onClick={toggleDrawer}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Nav drawer 
      
        <div className={` top-0 right-0 w-full h-full bg-gray-800`}>
          <div className={` md:hidden  h-full fixed inset-y-0 right-0 top-0 w-64 bg-gray-800 transition-all duration-300 z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <ul className="p-4">
              <li>
                <Link href="/"
                  className="text-white">Home
                </Link>
              </li>
              <li>
                <Link href="/design"
                  className="text-white">Design
                </Link>
              </li>
              <li>
                <Link href="/about"
                  className="text-white">About
                </Link>
              </li>
            </ul>
          </div>
        </div>*/}
    </nav>
  );
};

