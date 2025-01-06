"use client";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); //making state for toggle menu visiblity
  const toggleMenu = () => {
    //function for toggle
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="relative bg-cover bg-center  h-[600px] flex items-center bg-no-repeat"
      style={{ backgroundImage: "url('/bgheaderimg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="container p-4">
        {/* Navbar */}
        <nav className="absolute flex justify-between top-0 w-full p-10  items-center z-10  left-0  mx-auto">
          <div className="text-mywhite leading-[25px] text-[18px] font-bold font-pop">
            Vence
          </div>
          <ul className="space-x-6 items-center md:flex hidden">
            <li>
              <Link
                href="/"
                className="hover:text-mywhite hover:underline-offset-3 hover:underline  transition text-white/50 text-xs font-pop"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-mywhite hover:underline-offset-3 hover:underline transition text-white/50 text-xs font-pop"
              >
                Inspiration
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-mywhite hover:underline-offset-3 hover:underline transition text-white/50 text-xs font-pop"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-mywhite hover:underline-offset-3 hover:underline transition text-white/50 text-xs font-pop"
              >
                Blog
              </Link>
            </li>
            <div className="h-[25px] w-[0.5px] bg-white/50"></div>
            <Search
              className="w-[12px] h-[12px"
              color="rgb(255 255 255 / 0.5)"
            />
          </ul>
          {/*mobile nav options*/}
          <Button
            onClick={toggleMenu}
            className="bg-transparent hover:bg-none flex md:hidden"
          >
            {isOpen ? <X /> : <Menu color="white" />}
          </Button>
          <div
            className={`md:hidden absolute top-20 left-0 transition-transform duration-300 ease-in-out  w-full bg-gray-900 z-10 ${isOpen ? "block" : "hidden"}`}
          >
            <ul
              onClick={toggleMenu}
              className="flex flex-col space-y-4 pt-4 items-center justify-center "
            >
              <li>
                <Link
                  href="/"
                  className="hover:text-mywhite hover:underline-offset-3 hover:underline  transition text-white/50 text-xs font-pop "
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-mywhite  hover:underline-offset-3 hover:underline  transition text-white/50 text-xs font-pop"
                >
                  Inspiration
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-mywhite  hover:underline-offset-3 hover:underline  transition text-white/50 text-xs font-pop"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-mywhite  hover:underline-offset-3 hover:underline  transition text-white/50 text-xs font-pop"
                >
                  Blog
                </Link>
              </li>

              <Search
                className="w-[12px] h-[12px"
                color="rgb(255 255 255 / 0.5)"
              />
            </ul>
          </div>
        </nav>

        {/* Header Content */}
        <div className="relative  w-full px-6 gap-4 flex flex-col top-14 lg:top-28">
          <p className="font-pop text-xs text-mylightgray tracking-wider">
            5 June 2025
          </p>
          <h1 className="text-2xl font-bold text-mywhite font-pop leading-[40px] tracking-wide">
            I Like to Keep Things Simple to Appreciate the
            <br /> Details
          </h1>
          <p className="text-xs text-mylightgray mt-4 font-pop tracking-wide">
            Many years ago, I worked for my parents who own a video
            <br />
            production company.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
