"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MainHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const MenuItem = (
    <>
      <li>
        <Link className={`font-semibold font-mono ${isScrolled?"text-black":"text-gray-300 tracking-wide"}`} href="/">Home</Link>
      </li>
      <li>
        <Link className={`font-semibold font-mono ${isScrolled?"text-black":"text-gray-300 tracking-wide"}`} href="/">Blog </Link>
      </li>
      <li>
        <Link className={`font-semibold font-mono ${isScrolled?"text-black":"text-gray-300 tracking-wide"}`} href="/">Portfolio</Link>
      </li>
      <li>
        <Link className={`font-semibold font-mono ${isScrolled?"text-black":"text-gray-300 tracking-wide"}`} href="/">Skill</Link>
      </li>
      <li>
        <Link className={`font-semibold font-mono ${isScrolled?"text-black":"text-gray-300 tracking-wide"}`} href="/">About Me</Link>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`ml-1-20 flex w-full justify-center items-center fixed top-0 z-50 transition-colors duration-300 ${isScrolled? "bg-white":"bg-transparent"}`}>
      <div className="navbar w-[90%]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-md dropdown-content ${isScrolled?"bg-white":"bg-black"} opacity-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg`}
            >
              {MenuItem}
            </ul>
          </div>
          <Link className={`text-3xl font-bold font-mono ${isScrolled?"text-black":"text-white"}`} href="/">
            Mohai<span className="text-yellow-400">Minur</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal z-50 px-1">{MenuItem}</ul>
        </div>
        
      </div>
    </div>
  );
}
