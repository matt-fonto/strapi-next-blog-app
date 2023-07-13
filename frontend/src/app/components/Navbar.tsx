"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // import menu and close icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <img className="h-8 w-8" src="/next.svg" alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="hidden md:flex items-center ml-10 space-x-4">
                <Link
                  href="/profile"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700"
                >
                  Profile
                </Link>
                <Link
                  href="/posts/create"
                  className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 hover:text-green-500 duration-200"
                >
                  <AiOutlinePlusCircle className="h-5 w-5 " />
                </Link>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <HiMenu className="block h-6 w-6" />
                  ) : (
                    <HiX className="block h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/profile"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              Profile
            </Link>
            <Link
              href="/posts/create"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              <AiOutlinePlusCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
